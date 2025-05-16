function mawa(){
    document.getElementById("jaa").innerHTML=" ";
}
function jagga(n){
document.getElementById("jaa").innerHTML +=n;
}
function hlo(){
    let a=document.getElementById("jaa");
    a.innerHTML=eval(a.innerHTML);
}
function heey(){
    let a=document.getElementById("jaa");
    a.innerHTML=a.innerHTML.slice(0,-1);
}
