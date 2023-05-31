function busTravel(){
    // A amount of points
    // select where she is traveling from ( … ) - all trips are to the City Centre
    // select her travel time peak or off-peak
    // To see how many return trips she can make in peak or off-peak travel.
    // Only show return trip information if “Return trip” is checked.

    // The widget should calculate:

    // The cost price per trip (single)
    // The total  number of trips she can take
    // The number of return trips she can make
    // The cost per return trip
    // The price for a trip based on - travel time (peak or off-peak)


    // Destinations
    // Cost
    // Peak hour increase
    // Khayelitsha
    // R40
    // +25%
    // Dunoon
    // R25
    // +25%
    // Mitchells Plain
    // R30
    // +25%
    var pricePerTrip_ = 0;
    var pricePerReturnTrip_ = 0;
    var numberOfSingleT_ = 0;
    var numberOfTripsReturn_ = 0;

    function enterAmountOfPoints(amount){
        if(amount ==="khaya") {
            pricePerTrip_ = 40;
            pricePerReturnTrip_ = 80;
            
        } 
        if(amount ==="Dun") {
            pricePerTrip_ = 25;
            pricePerReturnTrip_ = 50;
        }
        if(amount ==="Mitch"){
            pricePerTrip_ = 30; 
            pricePerReturnTrip_ = 60; 
        }

        if(amount === "Peak"  ){
            pricePerTrip_ *= 1.25
            pricePerReturnTrip_ *= 1.25;
        }
        numberOfSingleT_ = amount / pricePerTrip_;
        numberOfTripsReturn_ = amount / pricePerReturnTrip_;

    
    }
    function costPricePerTrip(){
        return pricePerTrip_
    }
    function totNumberOftrips(){
        return numberOfSingleT_
    }
    function numberOfReturnTrips(){
        return numberOfTripsReturn_
    }
    function costPerReturnTrips(){
       return pricePerReturnTrip_

    }
    
    return{
        enterAmountOfPoints,
        costPerReturnTrips,
        numberOfReturnTrips,
        costPricePerTrip,
        totNumberOftrips
    }

}