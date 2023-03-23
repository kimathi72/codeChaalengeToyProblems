
//created deductionsObj to hold the deduction rates for paye and nhif;
const deductionsObj = {

    payeRates : {
        //define paye monthly rates
        monthly : [
            {start:0,end:24000,deduction:10},
            {start:24001,end:32333,deduction:25},
            {start:32333,over:32333,deduction:30}
        ],
        //define paye yearly rates
        yearly: [
            {start:0,end:288000,deduction:10},
            {start:288001,end:38800,deduction:25},
            {start:388000,over:388000,deduction:30}
        ]}
,// nhif rates are defined as monthly rates
    nhifRates : [
        {start: 0,end: 5999,deduction: 150},
        {start: 6000,end: 7999,deduction: 300},
        {start: 8000,end: 11999,deduction: 400},
        {start: 12000,end: 14999,deduction: 500},
        {start: 15000,end: 19999,deduction: 600},
        {start: 20000,end: 24999,deduction: 750},
        {start: 25000,end: 29999,deduction: 850},
        {start: 30000,end: 34999,deduction: 900},
        {start: 35000,end: 39999,deduction: 950},
        {start: 40000,end: 44999,deduction: 1000},
        {start: 45000,end: 49999,deduction: 1100},
        {start: 50000,end: 59999,deduction: 1200},
        {start: 60000,end: 69999,deduction: 1300},
        {start: 70000,end: 79999,deduction: 1400},
        {start: 80000,end: 89999,deduction: 1500},
        {start: 90000,end: 99999,deduction: 1600},
        {start: 100000,over: 100000,deduction: 1700}
    ]
} 

//adding a submit event listener on callenge3FormInput
document.getElementById("challenge3FormInput").addEventListener("submit", (e)=>{
    e.preventDefault();
    //retrieve values submited by the form, (paymentPeriod && grossPay)
    const form = e.target;
    console.log(form);
    const formFields = form.elements;
    const paymentPeriod = formFields.period.value;
    const grossPay = formFields.grossSalary.value;
    // define paye as an immediately invoked function.
    const paye = function () {
        //use .find() method to check the rates that apply to  the grossPay value received on form submit
        let result =  deductionsObj.payeRates[paymentPeriod].find(item => grossPay >= item.start && grossPay <= item.end || grossPay >= item.start && grossPay > item.over);
        console.log(result.deduction);
        return (grossPay * result.deduction)/100; //calculate a percentile of grosspay and return value as paye value.
    }();
    paye;
    
    //define nhif as an immediately invoked function
    const nhif = function () {
        let nhifDeduction;
        //check if the paymentperiod covered is yearly
        if (paymentPeriod === "yearly"){
            //if paymentperiod is yearly, covert grosspay to minthly, check nhif rate, then return annual nhif rate.
            let monthlyGrossPay = (grossPay / 12);
            let result = deductionsObj.nhifRates.find(item => monthlyGrossPay >= item.start && monthlyGrossPay <= item.end || monthlyGrossPay >= item.start && monthlyGrossPay > item.over);
            nhifDeduction = (result.deduction *12) ;
        } else { // calculate nhif with grossPay as is, as paymentperiod will be in monthly
            let result = deductionsObj.nhifRates.find(item => grossPay >= item.start && grossPay <= item.end || grossPay >= item.start && grossPay > item.over);
            nhifDeduction = result.deduction;
        }
        return nhifDeduction;
    }();
    nhif;
    //nssf is calculated as  6% of the gross pay;
    const nssf = function (){
        return grossPay * 0.06;
    }();
    console.log(nssf);
    nssf;

    //sum up the total deductions that are to deducted from gross salary
    let totalDeductions = function(){
        return paye + nssf + nhif;
    }();
    //define netsalary as the return value of an anonymous function that deducts totaldeductions from the grosspay
    const netSalary = function (){
        return grossPay - totalDeductions;
    }();
    console.log(netSalary);
    netSalary;

    //define a dom element to hold and display the return answer 
    let displayAnswer = document.createElement('div');
    displayAnswer.innerHTML = `<p>The Net salary has been calculated to ${netSalary}</p><br>
    <p>The total deductions are ${totalDeductions}, which include:</p>
    <ul>
    <li>Paye: ${paye}</li>
    <li>Nhif: ${nhif}</li>
    <li>Nssf: ${nssf}</li>

    </ul>
    <p>From a Gross Pay of ${grossPay}, ${paymentPeriod}</p>`;
    let displayDiv = document.getElementById("feedBack");
    displayDiv.style = "display: flex; flex-direction:column; justify-content: center;"
    displayDiv.appendChild(displayAnswer);


})







