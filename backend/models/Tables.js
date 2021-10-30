const rh = require("./ReservationHandling");
const base = require("./ResBase");
const Reservation = require("./Reservation");
exports.getTable = function getTable(minSeats, date, duration, status) {
  var list = [];
  for (const [number, table] of Object.entries(rh.tablesObj)) {
    if (table.maxNumberOfSeats < minSeats) continue;
    var res = new Reservation(date, duration, number, minSeats, "", "", "");
    var free = base.searchRes(res);
    if (
      status == "" ||
      status == null ||
      (free && status == "free") ||
      (!free && status != "free")
    ) {
      list.push(table);
    }
  }
  return list;
};
