class Reservation {
  constructor(date, duration, number, seats, name, email, phone) {
    this.date = new Date(date);
    this.end = null;
    this.duration = duration;
    this.seatNumber = number;
    this.numberOfSeats = seats;
    this.fullName = name;
    this.email = email;
    this.phone = phone;
    this.id = Math.random().toString(36).substr(2, 11);
    this.status = "active";
  }
}
module.exports = Reservation;
