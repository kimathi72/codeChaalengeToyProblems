let speedForm = document.getElementById("detectorForm");
console.log(speedForm);
const speedLimit = 70;
const speedDetectorCalculator = (num) => {
    let result = (num <=70) ? ("ok"):((num > 70 && num < 130)? (`Points : ${(num-70)/5}`) : ("License suspended"));
    alert(result);
} 
speedForm.addEventListener("submit", function (e){
    e.preventDefault();
    let speed = document.querySelector("input#speedInput").value;
    console.log(speed);
    speedDetectorCalculator(speed);

})