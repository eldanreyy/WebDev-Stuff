
const checkbox = document.getElementById("checkbox");
const  submitButton = document.querySelector("button[type=submit]")

checkbox.disabled = true;
submitButton.disabled = true;
const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("selectColor");


//assign color

elements.forEach(function(element) {
    const color = getRandomColor();
    element.style.backgroundColor =color;
    element.innerHTML = color;
    selectColor.innerHTML = color;
});

elements.forEach(function(element) {
    element.addEventListener("click", function(){
        if(element.innerHTML === selectColor.innerHTML) {
            checkbox.checked = true;
            submitButton.classList.remove("btn-light");
            submitButton.classList.add("btn-success");
            submitButton.disabled = false;
        }
        else{
            alert("VERIFY THAT YOURE A HUMAN");
            location.reload(true);
        }
    })
    
    
})


function getRandomColor(){
    let color = "#";
    const letter = "1234567890ABCDEF";

    for(let i =0; i<6; i ++){
        color += letter[Math.floor(Math.random()*16)];
    }
    return color;
}