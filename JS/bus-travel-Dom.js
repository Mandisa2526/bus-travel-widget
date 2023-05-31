//reference 
let pointsElement = document.querySelector(".input");
let locationElement = document.querySelector(".locations");
//radio buttons
let peakAndOffRadioElement = document.querySelector(".TravelTimes");
//checkbox
let returnTripCheckElement = document.querySelector(".Return");
let calcBtnElement = document.querySelector(".button");
//calculations
let numberOfSingleElem = document.querySelector(".singleTrip");
let pricePerTripElem = document.querySelector(".price");
let returnTripsElem = document.querySelector(".returntrips");
let pricePerReturnElem = document.querySelector(".pricePerReturnTrip");

let busTravels = busTravel();

function busTravelCheck(){
    // var checkedBtnElem = document.querySelector("input[name='vehicle1']");
    var checkedRadioBtnElem = document.querySelector("input[name='billItemType']:checked");
    var pricePerTrip = 0;
    var pricePerReturnTrip = 0;
    var numberOfSingleT = 0;
    var numberOfTripsReturn = 0;

    if (checkedRadioBtnElem && locationElement){
        var billTypeEntered = checkedRadioBtnElem.value;
        var locatonSelected = locationElement.value
        if(locatonSelected ==="khaya") {
            pricePerTrip = 40;
            pricePerReturnTrip = 80;
            
        } 
        if(locatonSelected ==="Dun") {
            pricePerTrip = 25;
            pricePerReturnTrip = 50;
        }
        if(locatonSelected ==="Mitch"){
            pricePerTrip = 30; 
            pricePerReturnTrip = 60; 
        }

        if(billTypeEntered === "Peak"  ){
            pricePerTrip *= 1.25
            pricePerReturnTrip *= 1.25;
        }
        numberOfSingleT = pointsElement.value / pricePerTrip;
        numberOfTripsReturn = pointsElement.value / pricePerReturnTrip;
        pricePerTripElem.innerHTML =  pricePerTrip;
        pricePerReturnElem.innerHTML = pricePerReturnTrip;
        numberOfSingleElem.innerHTML = numberOfSingleT;
        returnTripsElem.innerHTML = numberOfTripsReturn;

    }    
    

    
    
    
   
    

}
calcBtnElement.addEventListener('click',busTravelCheck)

