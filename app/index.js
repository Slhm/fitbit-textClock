import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update the clock every second
clock.granularity = "seconds";

// Get a handle on the <text> element
const hc = document.getElementById("hourCounter");
const mc = document.getElementById("minuteCounter");
//const sc = document.getElementById("secondCounter");
const dateCounter = document. getElementById("dateCounter");

const seasonalText = document.getElementById("seasonalText");



// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
    hours = util.toLetters(hours);

  } else {
    // 24h format
    //hours = util.zeroPad(hours);
    hours = util.toLetters(today.getHours());
  }
  //let mins = util.zeroPad(today.getMinutes());
  let mins = util.toLetters(today.getMinutes());
  let secs = util.toLetters(today.getSeconds());
  let date = util.toLetters(today.getDate());
  let month = util.toLetters(today.getMonth() + 1);
  let year = util.toLetters(today.getFullYear() - 2000);
  hc.text = `${hours}`;
  mc.text = `${mins}`;
  dateCounter.text = `${date}/${month}-${year}`;
  //sc.text = `${secs}`;
}
