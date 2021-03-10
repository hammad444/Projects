window.addEventListener("keydown",(e)=>{
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return
    audio.currentTime = "0";
    audio.play();
    var div = document.querySelector(`div[data-key="${e.keyCode}"]`);
    div.classList.add("playing");
})
var div = document.querySelectorAll(".key");
div.forEach((e)=>{
    e.addEventListener("transitionend",removePlaying)})
function removePlaying(e){
    //console.log(e.propertyName=="transform");
    if(e.propertyName=="transform"){
        //alert("Work;")
        this.classList.remove("playing");
    }
}