//fetch the gradesForm from the Dom and assign variable gradeForm
let gradeForm = document.getElementById("gradesForm");

//define a grades array, which is an array of object contain grade, start mark and end mark for each grade.
let grades = [
    {
        grade : "A",
        start : 79,
        end: 100
    },
    {
        grade : "B",
        start : 60,
        end: 79
    },
    {
        grade : "C",
        start : 49,
        end : 60
    },
    {
        grade : "D",
        start : 40,
        end : 49,
    },
    {
        grade : "E",
        start : 0,
        end : 40
    }
]
    
//adding an onsubmit event listener on gradeForm 
gradeForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    let mark = document.getElementById("marksInput").value;
    //using .find() method to return the object containing the mark submited by the form
    let result = grades.find(item => mark >= item.start && mark < item.end);
    //assign result.grade to grade
    let grade = result.grade;
   // create dom element to contain the result and append it to the dom
    let displayAnswer = document.createElement('div');
    displayAnswer.innerHTML =` The Student's Grade is ${grade} with a Mark of ${mark}`  
    document.getElementById("feedBack").appendChild(displayAnswer);
})