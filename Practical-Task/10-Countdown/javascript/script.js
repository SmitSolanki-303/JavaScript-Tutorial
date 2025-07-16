const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "MonDay",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

document.addEventListener("DOMContentLoaded", function(){
    const giveaway = document.querySelector(".info-giveaway");

    const deadline = document.querySelector(".info-deadline");
    const timerBox = document.querySelectorAll(".timer-box .timer-number");


    // console.log(giveaway.textContent);

    let currentdate = new Date();
    let currentYear = currentdate.getFullYear();    // get year
    let currentMonth = currentdate.getMonth();      // get index value of month
    let currentWeekDay = currentdate.getDay();      // get index value of day of the week


    const futureDate = new Date(2025, 6, 20, 1, 12, 50, 0); // year, monthIndex, actualDate, hour, minute, second, milisecond

    const futureYear = futureDate.getFullYear();  // get year
    const futureMonth = futureDate.getMonth();    // get index value of month
    const futureWeekDay = futureDate.getDay();    // get index value of day of the week
    const futureDateNumber = futureDate.getDate();  // get date number
    const futureHour = futureDate.getHours();       // get hour
    const futureMinute = futureDate.getMinutes();   // get minute

    let year = futureYear;
    let month = months[futureMonth];
    let weekday = weekdays[futureWeekDay];
    let date = futureDateNumber;
    let hour = futureHour;
    let minute = futureMinute;

    // console.log(futureDate);
    // console.log(date);  

    // Before Update
    // console.log(giveaway.textContent);


                          // giveaway ends on Friday, 25 July 2025 1:30am
    giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hour}:${minute}`

    console.log(currentdate);
    // After Update
    console.log(giveaway.textContent);


    // For Timer Box

    // future time ni miliseconds 
    // miliseconds of future date - miliseconds of current date = miliseconds of difference
    const futureTime = futureDate.getTime();
    // console.log(futureTime);
    

    function getRemainingTime() {
      const currentTime = new Date().getTime();
      // console.log(currentTime);

      const timeDifference = futureTime - currentTime;
      // console.log(timeDifference);
      // 1second = 1000ms
      // 1minute = 60seconds
      // 1hour = 60 minutes
      // 1day = 24 hours
      
      // calculate miliseconds values
      const oneDay = 24 * 60 * 60 * 1000;
      const oneHours = 60 * 60 * 1000;
      const oneMinutes = 60 * 1000;
      const oneSeconds = 1000;

      // floor() will return integer value
      // calculate miliseconds in 1 day
      const remainingDays = Math.floor(timeDifference / oneDay);
      // console.log(remainingDays);

      // calculate miliseconds in 1 hour
      // Using % becasue it will return the remainder/ remaining value that is left 
      const remainingHours = Math.floor((timeDifference % oneDay) / oneHours);
      // console.log(remainingHours);

      // calculate miliseconds in 1 minutes
      const remainingMinutes = Math.floor((timeDifference % oneHours) / oneMinutes);
      // console.log(remainingMinutes);

      // calculate miliseconds in 1 seconds
      const remainingSeconds = Math.floor((timeDifference % oneMinutes) / oneSeconds);
      // console.log(remainingSeconds);

      const values = [remainingDays, remainingHours, remainingMinutes, remainingSeconds];
      // console.log(values);

      // function to format values in timer box like 01, 02, 03, ..., 09, 10
      function format(item){
        if(item < 10){
          return item = `0${item}`;
        }
        return item;
      }

      // update timer box values 
      timerBox.forEach(function(box, index) {
        box.textContent = format(values[index]);
      })

      // update timer box
      // console.log(timerBox[0].textContent = remainingDays);
      // console.log(timerBox[1].textContent = remainingHours);
      // console.log(timerBox[2].textContent = remainingMinutes);
      // console.log(timerBox[3].textContent = remainingSeconds);

      // timerBox[0].textContent = values[0];
      // timerBox[1].textContent = values[1];
      // timerBox[2].textContent = values[2];
      // timerBox[3].textContent = values[3];


    }

    setInterval(getRemainingTime, 1000)
    // accessing initial value
    getRemainingTime();


})