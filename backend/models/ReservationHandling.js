const Reservation = require("./Reservation");
const fs = require("fs");
const data = fs.readFileSync("seats.json");
const tables = JSON.parse(data).tables;
var tablesObj = {};
const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
for (var elem of tables) {
  tablesObj[elem.number] = elem;
}
exports.createReservation = function createReservation(resData) {
  if (
    !Number.isInteger(resData.duration) ||
    !Number.isInteger(resData.seatNumber) ||
    !Number.isInteger(resData.numberOfSeats)
  )
    return null;
  let num = resData.seatNumber;
  if (
    resData.numberOfSeats < tablesObj[num].minNumberOfSeats ||
    resData.numberOfSeats > tablesObj[num].maxNumberOfSeats
  )
    return null;
  if (!resData.email.match(email)) return null;
  return new Reservation(
    resData.date,
    resData.duration,
    resData.seatNumber,
    resData.numberOfSeats,
    resData.fullName,
    resData.email,
    resData.phone
  );
};
exports.tablesObj = tablesObj;
