function timeUntilSleep() {

    let sleepHour = parseInt(document.getElementById('sleepHour').value);
    let sleepMinute = parseInt(document.getElementById('sleepMinute').value);

    // Getting user's time zone
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // Get the current date and time
    const now = new Date();

    //converting to users local time zone
    const localDate = new Date(now.toLocaleString('en-US', { timeZone: userTimeZone }));
    
    // Create a new Date object for today's sleep time
    const sleepTime = new Date(localDate.getFullYear(), localDate.getMonth(), localDate.getDate(), sleepHour, sleepMinute, 0);
  
    // Check if current time is past the sleep time
    if (now > sleepTime) {
      // If it's past the sleep time, set sleep time to the next day
      sleepTime.setDate(sleepTime.getDate() + 1);
    }
  
    // Calculate the difference in milliseconds
    const diff = sleepTime - now;
  
    // Convert milliseconds to hours, minutes, and seconds
    let hours = Math.floor(diff / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
    // Return the time left until sleep
    let result = `${hours} hours, ${minutes} minutes, and ${seconds} seconds left until sleep.`
    document.getElementById('result').textContent =  result;
    setInterval(timeUntilSleep, 1000);
  }
