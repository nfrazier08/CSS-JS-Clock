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

        //This is giving the seconds of the current minute- but we need it in degrees so 
        //the app knows by how much to move the second hand
        const seconds = now.getSeconds();

        //get minutes just like we did seconds
        const minutes = now.getMinutes();

        //get hours just like we did seconds
        const hours = now.getHours();

        //Divide by 60 because there are 60 seconds in a minute. This will also give us the %
        //We mult by 360 to get the degrees of circle
        const secondDegrees = ((seconds/60) * 360);

        //Get minutes in degrees
        const minuteDegrees = ((minutes/60) * 360);

        //We need to apply styles to the second hand
        secondHand.style.transform = `rotate(${secondDegrees}deg)`

        //Apply styles to minutes



        console.log(seconds)
    }

    //We need the setDate fxn to run every second
    setInterval(setDate, 1000)
}