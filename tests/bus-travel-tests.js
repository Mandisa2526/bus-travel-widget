describe('Bus travel Function Tests' , function(){
   
    it('should be to output number of single trip ' , function(){
        let greetDifferent2 = busTravel();
        greetDifferent2.enterAmountOfPoints("khaya");
        greetDifferent2.enterAmountOfPoints(40);
        assert.equal(1, greetDifferent2.totNumberOftrips());
    });
    it('should be able to output price per trip return"' , function(){
        let greetDifferent2 = busTravel();
        greetDifferent2.enterAmountOfPoints("khaya");
        assert.equal(80, greetDifferent2.costPerReturnTrips());
        
    });
    it('should be able to output price per trip return on "Peak' , function(){
        let greetDifferent2 = busTravel();
        
        greetDifferent2.enterAmountOfPoints("khaya");
        greetDifferent2.enterAmountOfPoints("Peak");
        
        assert.equal(100, greetDifferent2.costPerReturnTrips());
        
    });

    it('should be able to return number of return trip ' , function(){
        let greetDifferent2 = busTravel();
        greetDifferent2.enterAmountOfPoints("khaya");
        greetDifferent2.enterAmountOfPoints(80);
        assert.equal(1, greetDifferent2.numberOfReturnTrips());
    });
    it('should be able to output price per trip "off peak" ' , function(){
        let greetDifferent3 = busTravel();

        greetDifferent3.enterAmountOfPoints("khaya")
        assert.equal(40, greetDifferent3.costPricePerTrip());
    });
    it('should be able to output price per trip on "peak" ' , function(){
        let greetDifferent3 = busTravel();
        greetDifferent3.enterAmountOfPoints("khaya")
        greetDifferent3.enterAmountOfPoints("Peak")
        assert.equal(50, greetDifferent3.costPricePerTrip());
    });
    

});     