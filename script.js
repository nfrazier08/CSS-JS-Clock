window.onload = function(){
    //Grab the second hand
    const secondHand = document.querySelector('.second-hand')

    //Update second hand - updates most often
    function setDate(){
        //Let's grab the date
        const now = new Date();

        //This is giving the seconds of the current minute- but we need it in degrees so 
        //the app knows by how much to move the second hand
        const seconds = now.getSeconds();

        //Divide by 60 because there are 60 seconds in a minute. This will also give us the %
        //We mult by 360 to get the degrees of circle
        const secondDegrees = ((seconds/60) * 360)

        //We need to apply styles to the second hand
        secondHand.style.transform = `rotate(${secondDegrees}deg)`


        console.log(seconds)
    }

    //We need the setDate fxn to run every second
    setInterval(setDate, 1000)
}