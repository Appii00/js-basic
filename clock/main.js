 function showTime() {
     var time = new Date()
     var hour = time.getHours()
     var minute = time.getMinutes()
     var second = time.getSeconds()
     var myClock = document.getElementById("MyClock")
     let sessions = "AM"
     if (hour == 0) {
         hour = 12
     }
     if (hour > 12) {
         hour = hour - 12
         sessions = "PM"
     }

     hour = (hour < 10) ? "0" + hour : hour
     minute = (minute < 10) ? "0" + minute : minute
     second = (second < 10) ? "0" + second : second

     var timeNew = hour + ":" + minute + ":" + second + "" + sessions
     myClock.innerText = timeNew
     myClock.textContent = timeNew

     setTimeout(showTime, 1000)
 }
 showTime()