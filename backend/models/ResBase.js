const fs = require("fs");
const data = fs.readFileSync("seats.json");
const tables = JSON.parse(data).tables;
var times = {};
var all = {};
for (let element of tables) {
  times[element.number] = [];
}
exports.searchRes = function searchRes(res) {
  res.end = addDuration(res.date, res.duration);
  let num = res.seatNumber;
  let tab = times[num];
  let len = tab.length;
  if (len == 0 || res.end <= tab[0].date || res.date >= tab[len - 1].end) {
    return true;
  }
  for (let i = 0; i < len - 1; i++) {
    if (tab[i].end <= res.date) {
      if (tab[i + 1].date >= res.end) {
        return true;
      }
    } else {
      return false;
    }
  }
};
exports.addRes = function addRes(res) {
  let num = res.seatNumber;
  let tab = times[num];
  if (exports.searchRes(res)) {
    tab.push(res);
    all[res.id] = res;
    tab = sortArr(tab);
    return true;
  }
  return false;
};
function addDuration(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}
function sortArr(arr) {
  arr.sort((a, b) => (a.date > b.date ? 1 : -1));
  return arr;
}
exports.times = times;
exports.all = all;
exports.getTime = function getTime(date) {
  var arr = [];
  let day = new Date(date).getDay();
  for (const prop in all) {
    let res = all[prop];
    let date1 = res.date.getDay();
    let date2 = res.end.getDay();
    if (day == date1 || day == date2) {
      arr.push(res);
    }
  }
  return arr;
};
exports.clear = function clear(arr) {
  var newarr = [];
  for (var i = 0; i < arr.length; i++) {
    newarr.push(
      JSON.parse(
        JSON.stringify({
          ...arr[i],
          id: undefined,
          end: undefined,
          status: undefined,
        })
      )
    );
  }
  return newarr;
};
exports.remove = function remove(reservation) {
  var tab = times[reservation.seatNumber];
  var index = tab.indexOf(reservation);
  tab.splice(index, 1);
  delete all[reservation.id];
};
