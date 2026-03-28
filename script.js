function generateScript(){

let topic=document.getElementById("topic").value;

if(topic===""){
alert("Enter a topic first");
return;
}

let script=
"HOOK: Nobody talks about this truth about "+topic+".\n\n"+
"STORY: Most people think it's simple, but the reality is shocking. "+
"Here is what actually happened and why it matters today.\n\n"+
"TWIST: The craziest part? Almost nobody noticed this hidden detail.\n\n"+
"ENDING: Follow for more viral stories like this.";

document.getElementById("result").innerText=script;

}


function copyScript(){

const text=document.getElementById("result").innerText;

navigator.clipboard.writeText(text);

alert("Script copied!");

}
