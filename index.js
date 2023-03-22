const links = document.querySelectorAll("a.nav-link");
const pages = []; 
for (const link of links  ){
      pages.push(document.getElementById(link.target));    
     }
function loadPage (pageToLoad){
  for (const page of pages){
    (page.id === pageToLoad) ? (page.style.display = "block"): (page.style.display = "none");    }
  }
function index () {
  loadPage("studentGradeGenerator");
  for (const link of links){
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let pageToLoad = link.target;
      loadPage(pageToLoad);
    })    
  }
}
document.addEventListener("DOMContentLoaded", index);


