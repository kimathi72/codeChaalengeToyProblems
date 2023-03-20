

document.getElementById("challenge3FormInput").addEventListener("submit", function(e){
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const formFields = form.elements;
    console.log(formFields);
    const grossPay = formFields.grossSalary.value;
    const userInput = formFields.map(function (item){
        console.log(item);
        const obj=Object.assign({},item["name"],item["name"].value );
        console.log(obj);
        return obj;

    })
    console.log(userInput);

    console.log(grossPay);
    const payeRates = [
        {monthly : [
            {start:0,end:24000,deduction:10},
            {start:24001,end:32333,deduction:25},
            {start:32333,over:32333,deduction:30}
        ]},
        {yearly: [
            {start:0,end:288000,deduction:10},
            {start:288001,end:38800,deduction:25},
            {start:388000,over:388000,deduction:30}
        ]}
    ]; 
    const reliefRates = [
        {personal : {monthly: 2400,yearly: 28800}},
        {insurance : {monthly: 5000,yearly: 60000}},
        {pension : {monthly: 20000,yearly: 240000}},
        {affordableHousing : {monthly: 25000,yearly: 300000}},
        {allowableOwnerOccupier : {monthly: 25000,yearly: 60000}},
        {disabilityExemption : {monthly: 150000,yearly: 1800000}}
    ];
    const nhifRates = [
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
    ];
    const nssfRates = grossPay * 0.06 ;
})
