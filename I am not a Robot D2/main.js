const checkbox = document.getElementById("checkbox");
const submitButton = document.querySelector("button[type=submit]");

console.log(submitButton);
submitButton.disabled = true;
checkbox.disabled=true;

const element =document.querySelectorAll(".elements");
const selectColor=document.getElementById("selectColor");

element.forEach(function(e){
    const color = getRandomColor();
    e.style.backgroundColor = color;
    e.innerHTML=color;
    selectColor.innerHTML=color;
});

element.forEach(function(e) {
    e.addEventListener("click",function(){
        if(e.innerHTML === selectColor.innerHTML){
            checkbox.checked=true;    
            submitButton.classList.remove("btn-light");
            submitButton.classList.add("btn-success");
            submitButton.disabled=false;
        }
        else{
            alert("VERIFY THAT YOU ARE A HUMAN");
            location.reload(true);
        }
})
});



function getRandomColor(){
    letter = "ABCDEF1234567890"
    let color = "#";

    for( var i=0; i<6; i++){
        color += letter[Math.floor(Math.random()*16)];
    }
    return color;
}