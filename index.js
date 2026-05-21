const createEmployeeRecord = function (employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    };
};

function createEmployeeRecords(arrayOfArrays) {
  return arrayOfArrays.map(employeeData => createEmployeeRecord(employeeData));
}

function findEmployeeByFirstName(collection, firstNameString) {
  return collection.find(employee => employee.firstName === firstNameString);
}


function createTimeInEvent(timeStamp) {
    const [date, hour] = timeStamp.split(" ");

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    });

    return this;
}


function createTimeOutEvent(timeStamp) {
  const [date, hour] = timeStamp.split(" ");

  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date
  });

  return this;
}

function hoursWorkedOnDate(date) {
  const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
  const timeInEvent = this.timeInEvents.find(event => event.date === date);
  
  return (timeOutEvent.hour - timeInEvent.hour) / 100;
}

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((total, employee) => {
    return total + allWagesFor.call(employee);
  }, 0);
}


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) 
    return payable
}

