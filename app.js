let date = document.querySelector(".date");
let hour = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let period = document.querySelector("#amp");
let msg = document.querySelector("#msg");

let no = Math.floor(Math.random() * 16);

function updateDate() {
  let newDate = new Date();
  date.innerHTML = newDate.toDateString();
}
function updateTime() {
  let tm = new Date();
  let hours = tm.getHours();
  let newhours;
  if (hours < 12) {
    hour.innerHTML = hours;
  } else {
    newhours = hours % 12;
    hour.innerHTML = newhours;
  }
  minutes.innerHTML = tm.getMinutes();
  seconds.innerHTML = tm.getSeconds();

  if (hours > 12) {
    period.innerText = "PM";
  } else {
    period.innerText = "AM";
  }
}
async function getMessage() {
  let thaught = await fetch("https://type.fit/api/quotes");
  let jd = await thaught.json();
  let quote = jd[no].text;
  console.log(jd[no].text);
  msg.innerText = quote;
}

updateDate();
updateTime();
setInterval(updateTime, 1000);
getMessage();
