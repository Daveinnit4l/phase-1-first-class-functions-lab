const drivers=['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers=function(array){
         return  drivers.slice(0,2)
}
returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers=function(array){
return drivers.slice(-2)
}
returnLastTwoDrivers(drivers);

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function(fare){
        return fare*integer
    }
}
createFareMultiplier();

const fareDoubler=createFareMultiplier(2)
const fareTripler=createFareMultiplier(3)

function selectDifferentDrivers(array,returnFirstTwoDrivers){
    return drivers.slice(0,2),drivers.slice(-2);
}



