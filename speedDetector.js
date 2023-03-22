let speedForm = document.getElementById("detectorForm");// fetches speed form
console.log(speedForm);
const speedLimit = 70; //set speed limit to 70
//define speedDetectorCalaculator function
const speedDetectorCalculator = (num) => {
    //check if spped is under speed limit, if so, return "ok"
    //if not under 70, assign a point for every 5 km/h over the speed limit
    //else suspend license if points exceed 12 
    let result = (num <=70) ? ("ok"):((num > 70 && num < 130)? (`Points : ${(num-70)/5}`) : ("License suspended"));
    
    let displayAnswer = document.createElement('div');
    displayAnswer.innerHTML = result; 
    document.getElementById("feedBack").appendChild(displayAnswer);
} 
//adding event listener, and calling speedDetectorCalculatoron submited speed value.
speedForm.addEventListener("submit", function (e){
    e.preventDefault();
    let speed = document.querySelector("input#speedInput").value;
    console.log(speed);
    speedDetectorCalculator(speed);

})