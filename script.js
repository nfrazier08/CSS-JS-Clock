window.onload = function(){
    //Grab the second hand
    const secondHand = document.querySelector('.second-hand');
    //Grab the minute hand
    const minuteHand = document.querySelector('.minute-hand');
    //Grab the hour hand
    const hourHand = document.querySelector('.hour-hand');

    //Update second hand - updates most often
    function setDate(){
        //Let's grab the date
        const now = new Date();

        //SECONDS!
        //This is giving the seconds of the current minute- but we need it in degrees so 
        //the app knows by how much to move the second hand
        const seconds = now.getSeconds();
        //Divide by 60 because there are 60 seconds in a minute. This will also give us the %
        //We mult by 360 to get the degrees of circle
        const secondDegrees = ((seconds/60) * 360) + 90;
        //We need to apply styles to the second hand
        secondHand.style.transform = `rotate(${secondDegrees}deg)`;


        //MINUTES!
        //Get minutes
        const minutes = now.getMinutes();
        //Get minutes in degrees
        //NOTE: The default here is Left to Right. In our transform (CSS) we added 90 degrees
        //to make the default top to bottom. So, we have to add 90 degrees back here to offset the change made
        const minuteDegrees = ((minutes/60) * 360) + 90;
        //Apply styles to minutes
        minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;


        //HOURS!
        //Get Hours
        const hours = now.getHours();
        //Get hours in degrees
        const hourDegrees = ((hours/12) * 360) + 90;
        //Apply styles to hours
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;


        console.log(now);
        
       
    }

    //We need the setDate fxn to run every second
    setInterval(setDate, 1000)
}