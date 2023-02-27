function updateTime() {
  // Vancouver
  let vancouverElement = document.querySelector("#vancouver");
  if (vancouverElement) {
    let vancouverDateElement = vancouverElement.querySelector(".date");
    let vancouverTimeElement = vancouverElement.querySelector(".time");
    let vancouverTime = moment().tz("America/Vancouver");
    vancouverDateElement.innerHTML = vancouverTime.format("MMMM Do YYYY");
    vancouverTimeElement.innerHTML = vancouverTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Amsterdam
  let amsterdamElement = document.querySelector("#amsterdam");
  if (amsterdamElement) {
    let amsterdamDateElement = amsterdamElement.querySelector(".date");
    let amsterdamTimeElement = amsterdamElement.querySelector(".time");
    let amsterdamTime = moment().tz("Europe/Amsterdam");
    amsterdamDateElement.innerHTML = amsterdamTime.format("MMMM Do YYYY");
    amsterdamTimeElement.innerHTML = amsterdamTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Hong Kong
  let hongkongElement = document.querySelector("#hong-kong");
  if (hongkongElement) {
    let hongkongDateElement = hongkongElement.querySelector(".date");
    let hongkongTimeElement = hongkongElement.querySelector(".time");
    let hongkongTime = moment().tz("Asia/Hong_Kong");
    hongkongDateElement.innerHTML = hongkongTime.format("MMMM Do YYYY");
    hongkongTimeElement.innerHTML = hongkongTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="city"">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
