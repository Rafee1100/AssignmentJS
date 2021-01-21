

//Kilometer to Meter Converter

function kilometerToMeter(kilometer){
    var meter;
    if(kilometer>0){
        meter=kilometer*1000;
        return meter;
    }
    else{
        return "Distance Can't be negative";
    }
}

//budgetCalculator function

function budgetCalculator(watch,laptop,phone){
    var totalcost;
    if(watch>=0 && laptop >=0 && phone>= 0){
        totalcost=(50*watch)+(500*laptop)+(100*phone);
        return totalcost;
    }
    else{
        return "Amount of items can't be negative";
    }
}

//Hotel cost using hotelCost function

function hotelCost(days){
    var hotelstaycost;
    if(days>0){
        if(days<=10){
            hotelstaycost=100*days;           
        }
        else if(days<=20){
            var firstpart=10*100;
            var remaining=(days-10);
            var secondpart=remaining*80;
            hotelstaycost=firstpart+secondpart;
        }
        else{
            var firsttendayscost=10*100;
            var secondtendayscost=10*80;
            var remainingdays = days-20;
            var thirdpartcost=remainingdays*50;
            hotelstaycost=firsttendayscost+ secondtendayscost+thirdpartcost;
        }
        return hotelstaycost;
    }
    else{
        return "You have not been in the hotel.Welcome to Bay Resort have some cost!!"
    }
   
}

//Megafriend using function

function megafriend(friendsname){
    var largestname=friendsname[0],i;
    var l=largestname.length;
    for(i=1;i<friendsname.length;i++){
        var k=friendsname[i].length;
        if(k>l){
            largestname=friendsname[i];
        }
    }
    return largestname;
}
