//https://github.com/Rafee1100/AssignmentJS


//Kilometer to Meter Converter

function kilometerToMeter(kilometer) {
    var meter;
    if (kilometer >= 0) {
        meter = kilometer * 1000;
        return meter;
    }
    else {
        return "Distance Can't be negative";
    }
}

//budgetCalculator function

function budgetCalculator(watch, phone, laptop) {
    var totalcost;
    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        totalcost = (50 * watch) + (100 * phone) + (500 * laptop);
        return totalcost;
    }
    else {
        return "Amount of items can't be negative";
    }
}


//Hotel cost using hotelCost function

function hotelCost(days) {
    var hotelstaycost;
    if (days > 0) {
        if (days <= 10) {
            hotelstaycost = 100 * days;
        }
        else if (days <= 20) {
            var firstpart = 10 * 100;
            var remaining = (days - 10);
            var secondpart = remaining * 80;
            hotelstaycost = firstpart + secondpart;
        }
        else {
            var firsttendayscost = 10 * 100;
            var secondtendayscost = 10 * 80;
            var remainingdays = days - 20;
            var thirdpartcost = remainingdays * 50;
            hotelstaycost = firsttendayscost + secondtendayscost + thirdpartcost;
        }
        return hotelstaycost;
    }
    else if(days == 0) {
        return "You have not been in the hotel.Welcome to Bay Resort have some cost!!";
    }
    else{
        return "Number of days can't be negative";
    }

}

//megaFriend using function that will find the maximum length name in an array

function megaFriend(friendsname) {
    if (friendsname.length > 0) {
        var largestname = friendsname[0], i;
        for (i = 1; i < friendsname.length; i++) {
            var l = largestname.length;
            var k = friendsname[i].length;
            if (k > l) {
                largestname = friendsname[i];
            }
        }
        return largestname;
    }
    if (friendsname.length == 0) {
        return "There is no name in the Array.Have some person!"
    }
}


