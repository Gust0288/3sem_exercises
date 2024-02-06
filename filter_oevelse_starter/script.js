import { $ } from "../utils/dom.js"

const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = $("#ulHead");
const ulPointer2 = $("#extra")
const isElectricButton = $("#electric")
const moreThen2SeatsButton = $("#moreThen2Seats")
const electricAndJonasButton = $("#electricAndJonas")
const ryebreadButton = $("#ryebread")
const showAllButton = $("#showAll")


isElectricButton.addEventListener("click", () =>  showTheseVehicles(vehicles.filter(isElectric)));
moreThen2SeatsButton.addEventListener("click", () => showTheseVehicles(vehicles.filter(moreThen2Seats)));
showAllButton.addEventListener("click", () => showTheseVehicles(vehicles));
electricAndJonasButton.addEventListener("click", () => showTheseVehicles(vehicles.filter(electricOwnJonas)));
ryebreadButton.addEventListener("click", () => showTheseVehicles(vehicles.filter(ryebreadVehicles)));



// showTheseVehicles(vehicles);
// showTheseVehicles(vehicles.filter(isElectric));
// showTheseVehicles(vehicles.filter(moreThen2Seats));
// showTheseVehicles(vehicles.filter(electricOwnJonas));
// showTheseVehicles(vehicles.filter(ryebreadVehicles));

function showTheseVehicles(arr) {
  ulPointer2.innerHTML = "";
  arr.forEach((each) => {
    ulPointer2.innerHTML += `<li>${each.type === undefined ? "": each.type}</li>`;
    ulPointer2.innerHTML += `<li>${each.fuel === undefined ? "" : each.fuel}</li>`;
    ulPointer2.innerHTML += `<li>${each.passengers === undefined ? "" : each.passengers}</li>`;
    ulPointer2.innerHTML += `<li>${each.stops === undefined ? "" : each.stops}</li>`;
    ulPointer2.innerHTML += `<li>${each.ownedBy === undefined ? "" :  each.ownedBy}</li>`;
    ulPointer2.innerHTML += `<li>${each.isElectric === undefined ? "" : each.isElectric}</li>`;
    ulPointer2.innerHTML += `<li>${each.isTandem === undefined ? "" : each.isTandem}</li>`;
  });
}

function isElectric (vehicles){
  if (vehicles.isElectric === true){
    return true;
  } else{
    return false;
  }
}
function moreThen2Seats(vehicles){
  if(vehicles.passengers > 2){
    return true;
  } else{
    return false
  }
}

function electricOwnJonas(vehicles){
  if(vehicles.isElectric === true && vehicles.ownedBy === "Jonas") {
    return true;
  } else{
    return false;
  }

}

function ryebreadVehicles(vehicles){
  if(vehicles.fuel === "Rugbrød" && vehicles.passengers > 1) {
    return true;
  } else{
    return false;
  }
}

