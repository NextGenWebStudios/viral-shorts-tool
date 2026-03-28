function scrollToTool(){

document.getElementById("tool").scrollIntoView({
behavior:"smooth"
});

}


function generate(){

let topic=document.getElementById("topic").value

let output=document.getElementById("output")

if(topic==""){

output.innerText="Enter topic first"
return

}

let scripts=[

`Stop scrolling! Here's a crazy fact about ${topic}. Most people don't know this but it's trending right now.`,

`3 things you didn't know about ${topic}. Number 2 will surprise you.`,

`Everyone is talking about ${topic}. Here's why it's going viral.`,

`If you are interested in ${topic}, watch this. This trick is changing everything.`

]

let random=scripts[Math.floor(Math.random()*scripts.length)]

output.innerText=random

}
