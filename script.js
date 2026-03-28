function generateScript(){

let topic=document.getElementById("topic").value;

let length=document.getElementById("length").value;

if(topic===""){

alert("Enter a topic first");

return;

}

let script="";


if(length==="short"){

script=

"HOOK: Nobody tells you this about "+topic+".\n\n"+

"Most people think it's simple, but the truth is shocking.\n\n"+

"Here’s the hidden detail that changes everything.\n\n"+

"Follow for more viral stories.";

}


else if(length==="medium"){

script=

"HOOK: The truth about "+topic+" will surprise you.\n\n"+

"Everyone believes one thing about this topic, but very few know what actually happened.\n\n"+

"Here’s the real story behind it and why it matters today.\n\n"+

"The craziest part? Almost nobody noticed this small detail.\n\n"+

"Once you see it, everything changes.\n\n"+

"Follow for more viral stories like this.";

}


else{

script=

"HOOK: This is the real story behind "+topic+".\n\n"+

"Most people only know the surface of this topic, but the deeper story is far more interesting.\n\n"+

"Let’s break down what really happened and why it shocked everyone.\n\n"+

"First, something unexpected happened that nobody predicted.\n\n"+

"Then everything changed because of one key moment.\n\n"+

"The craziest part is that very few people noticed the hidden reason behind it.\n\n"+

"And once you understand it, the entire story makes sense.\n\n"+

"Follow for more viral stories like this.";

}


document.getElementById("result").innerText=script;

}


function copyScript(){

const text=document.getElementById("result").innerText;

navigator.clipboard.writeText(text);

alert("Script copied!");

}
