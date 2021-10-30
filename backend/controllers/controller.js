const rh = require("../models/ReservationHandling");
const reservations = require("../models/ResBase");
const email = require("../services/Email");
const getTable = require("../models/Tables").getTable;
exports.home = (req, res) => {
  const response = {
    title:
      "Solvro backend recruitment task - API for reserving tables in a restaurant",
    author: "Krzysztof Wołkonowski",
    version: "1.0.1",
  };
  res.json(response);
};
exports.postRes = (req, res) => {
  var reservation = null;
  try {
    //var resData = JSON.parse(req.body)
    var resData = req.body;
    reservation = rh.createReservation(resData);
  } catch (error) {
    console.log(error);
    res.status(400).end();
    return;
  }

  if (reservation == null || !reservations.addRes(reservation)) {
    res.status(409).end();
    return;
  } else {
    email(
      reservation.fullName,
      reservation.email,
      "Reservation successfull",
      JSON.stringify(reservation),
      `
      <h1>Reservation details</h1><br>
      Date: ${reservation.date.toDateString}<br>
      Duration: ${reservation.duration} minutes<br>
      Full name: ${reservation.fullName}<br>
      Seat number: ${reservation.seatNumber}<br>
      Number of seats: ${reservation.numberOfSeats}<br>
      Email: ${reservation.email}<br>
      Phone number: ${reservation.phone}<br>

      <h2>Your reservation id: <b>${reservation.id}</b></h2><br>
      You can use it to cancel your reservation.
      `
    );
    res.status(201);
    var resJSON = { reservationId: reservation.id };
    res.json(resJSON);
  }
};
exports.getRes = (req, res) => {
  var date = req.query.date;
  var list = reservations.getTime(date);
  res.json(reservations.clear(list));
};
exports.putRes = (req, res) => {
  var id = req.params.id;
  var reservation = reservations.all[id];
  if (reservation == null) {
    res.status(404).end();
    return;
  }
  let query = req.body.status;
  if (query == "requested cancellation") {
    let now = Date();
    if (now + 2 * 60 * 60 * 1000 > reservation.date) {
      res.status(400).send("It's too late to cancel your reservation.");
      return;
    }
    let code = Math.random().toString(10).substr(2, 6);
    reservation.status = code;
    email(
      reservation.fullName,
      reservation.email,
      "Cancellation request",
      code
    );
    res.statusMessage = "Success";
    res.status(200).end();
    return;
  }
  res.status(400).end();
};
exports.delRes = (req, res) => {
  var id = req.params.id;
  var reservation = reservations.all[id];
  if (reservation == null || reservation.status == "active") {
    res.status(404).end();
    return;
  }
  let code = req.body.verificationCode;
  if (code != reservation.status) {
    res.status(403).end();
    return;
  }
  reservations.remove(reservation);
  email(
    reservation.fullName,
    reservation.email,
    "Reservation cancelled",
    "You have just cancelled your reservation"
  );
  res.statusMessage = "Success";
  res.status(200).end();
};
exports.getTab = (req, res) => {
  var status = req.query.status;
  var minSeats = req.query.min_seats;
  var date = req.query.start_date;
  var duration = req.query.duration;
  if (date == null || duration == null) {
    res.status(400).end();
    return;
  }
  if (minSeats == null) minSeats = 0;
  var list = getTable(minSeats, date, duration, status);
  res.statusMessage = "OK";
  res.json(list);
};
