const arr = document.querySelectorAll("input");

const changing = document.querySelector(".calculate");
const heading = document.querySelector("h2");

changing.addEventListener("click", () =>{ 
   const weight = parseInt(arr[0].value);
   const height = parseInt(arr[1].value);
   heading.innerHTML = weight / ((height / 100) ** 2);

    
});
