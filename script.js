// Toggle between light and dark modes using a switch 
const toggle=document.querySelector("#toggleSwitch");
toggle.addEventListener("change",()=>{
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        document.getElementById("modes").innerHTML="Switch to Light Mode";
    }else{
        document.getElementById("modes").innerHTML="Switch to Dark Mode";
    }
})
//Calculator functionality
let recentinput='';
let result=document.getElementById("resultarea");

function updateDisplay(){
    result.innerHTML=recentinput||'0';
}
function numberfn(num){
    recentinput+=num;
    updateDisplay();
}
function operatorfn(op){
    
    if(/[+\-*/%]$/.test(recentinput)){
        recentinput=recentinput.slice(0,-1)+op;
    }
    recentinput+=op;
    updateDisplay();
}
function clearfn() {
  recentinput = '';
  updateDisplay();
}
function backspacefn(){
    recentinput=recentinput.slice(0,-1);
    updateDisplay();
}
function calculatefn(){
    try{
        recentinput=eval(recentinput).toString();   
    }catch(e){
        recentinput="Check the Value!";
    }
    updateDisplay();
}
updateDisplay();
