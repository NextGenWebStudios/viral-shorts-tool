let dailyLimit = 2;
let today = new Date().toDateString();

function generateScript(){

let topic=document.getElementById("topic").value;
let length=document.getElementById("length").value;

let storedDate = localStorage.getItem("date");
let count = parseInt(localStorage.getItem("count") || 0);

if(storedDate !== today){
localStorage.setItem("date", today);
localStorage.setItem("count", 0);
count = 0;
}

if(count >= dailyLimit){
alert("Free limit reached. Upgrade for more scripts.");
return;
}

localStorage.setItem("count", count + 1);

if(topic===""){
alert("Enter a topic first");
return;
}

let hook = [
`Nobody talks about this truth about ${topic}.`,
`The real story behind ${topic} is shocking.`,
`This secret about ${topic} changed everything.`,
`Most people misunderstand ${topic}.`
];

let hookPick = hook[Math.floor(Math.random()*hook.length)];

let script="";

if(length==="short"){

script =

`HOOK:
${hookPick}

SCRIPT:
Most people only see the surface of ${topic}, but the real story is very different.
At first, things looked completely normal.
But behind the scenes, something unexpected happened that changed everything.
That small moment is actually the reason people still talk about it today.

ENDING:
Follow for more viral stories.`;

}

else if(length==="medium"){

script =

`HOOK:
${hookPick}

STORY:
Most people think ${topic} happened overnight, but the truth is very different.
In the beginning, nobody believed this idea would work.
There were many failures, criticism, and doubts.

But one key decision completely changed the direction.
That moment turned a struggling idea into something powerful.

Today, when people talk about ${topic}, they usually ignore the difficult part of the journey.

ENDING:
Follow for more viral stories like this.`;

}

else{

script =

`HOOK:
${hookPick}

STORY:
Most people believe ${topic} became successful very quickly.
But the reality is much more interesting.

In the early days, there were many problems and almost nobody believed the idea would succeed.
Many people thought it would fail completely.

But then something unexpected happened.
One decision changed everything and pushed the idea forward.

That moment is the reason why ${topic} became so influential today.

TWIST:
The craziest part is that this turning point was almost invisible at the time.

ENDING:
Follow for more viral stories like this.`;

}

document.getElementById("result").innerText=script;

}

function copyScript(){

const text=document.getElementById("result").innerText;
navigator.clipboard.writeText(text);

alert("Script copied!");

}
