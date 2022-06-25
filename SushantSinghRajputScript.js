const readmorebtn = document.querySelector(".readmorebtn");
const text = document.querySelector(".text");

readmorebtn.addEventListener("click", () =>{
    text.classList.toggle("show-more");
    if (readmorebtn.innerText == "Read Less"){
        readmorebtn.innerText = "Read More";
    }else{
        readmorebtn.innerText = "Read Less";
    }
});