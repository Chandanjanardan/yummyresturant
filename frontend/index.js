// checking 
console.log("hello")

function connection(){
    fetch("http://localhost:5000/auth/register")
    .then(response => response.json())
        .then(data => {
            console.log(data)})
}
const btn= document.getElementById("btn")
btn.onclick=connection();