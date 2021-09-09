document.getElementById("btn2").addEventListener("click",function(){
    document.querySelector(".popup").style.display ="flex";
})
document.getElementById("btn2").addEventListener("click",function(){
    document.querySelector(".popup-content").style.display ="flex";
})
document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".popup").style.display ="none";
})
document.querySelector(".button").addEventListener("click",function(){
    document.querySelector(".popup").style.display ="none";
    alert ("message send succesfully!!!!");
})
function myFunction() {
  location.replace("https://drive.google.com/file/d/1ADzrO8k3S-gXAqRmG9nIkjprVyojMS0b/view?usp=drivesdk")
}