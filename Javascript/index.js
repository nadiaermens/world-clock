function updateTime() {
  // Vancouver
  let vancouverElement = document.querySelector("#vancouver");
  let vancouverDateElement = vancouverElement.querySelector(".date");
  let vancouverTimeElement = vancouverElement.querySelector(".time");
  let vancouverTime = moment().tz("America/Vancouver");
  vancouverDateElement.innerHTML = vancouverTime.format("MMMM Do YYYY");
  vancouverTimeElement.innerHTML = vancouverTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Amsterdam
  let amsterdamElement = document.querySelector("#amsterdam");
  let amsterdamDateElement = amsterdamElement.querySelector(".date");
  let amsterdamTimeElement = amsterdamElement.querySelector(".time");
  let amsterdamTime = moment().tz("Europe/Amsterdam");
  amsterdamDateElement.innerHTML = amsterdamTime.format("MMMM Do YYYY");
  amsterdamTimeElement.innerHTML = amsterdamTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Hong Kong
  let hongkongElement = document.querySelector("#hong-kong");
  let hongkongDateElement = hongkongElement.querySelector(".date");
  let hongkongTimeElement = hongkongElement.querySelector(".time");
  let hongkongTime = moment().tz("Asia/Hong_Kong");
  hongkongDateElement.innerHTML = hongkongTime.format("MMMM Do YYYY");
  hongkongTimeElement.innerHTML = hongkongTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

setInterval(updateTime, 1000);
