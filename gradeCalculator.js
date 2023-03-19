let gradeForm = document.getElementById("gradesForm");
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
    

gradeForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(e.target);
    let mark = document.getElementById("marksInput").value;
    console.log(mark);
    let result = grades.find(item => mark >= item.start && mark < item.end);
    console.log(result);
    let grade = result.grade;
    console.log(grade);
    alert(`The Student's Grade is ${grade} with a Mark of ${mark}`);  
    
})