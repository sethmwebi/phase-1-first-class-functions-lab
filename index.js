// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
  const fareMultiplier = (fare) => {
    return fare * multiplier;
  };

  return fareMultiplier;
};

const fareDoubler = (fare) => {
  return fare * 2;
};

const fareTripler = (fare) => {
  return fare * 3;
};

const selectDifferentDrivers = (arrayOfDrivers, func) => {
  return func(arrayOfDrivers);
};
