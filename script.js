const hooks=[
"Nobody talks about the truth about",
"The hidden secret behind",
"Why everyone misunderstands",
"The shocking reality of",
"This mistake is ruining"
]


const titles=[
"The Untold Story of",
"What Really Happened to",
"The Truth About",
"The Rise of",
"The Dark Side of"
]


const ideas=[
"Why Tesla almost failed",
"How Netflix changed entertainment",
"The rise of MrBeast",
"The hidden story of Apple",
"The fall of Nokia"
]


function random(arr){

return arr[Math.floor(Math.random()*arr.length)]

}



function generateHook(){

let topic=document.getElementById("hookTopic").value

let hook=random(hooks)+" "+topic

document.getElementById("hookResult").innerText=hook

}



function generateTitle(){

let topic=document.getElementById("titleTopic").value

let title=random(titles)+" "+topic

document.getElementById("titleResult").innerText=title

}



function generateIdea(){

document.getElementById("ideaResult").innerText=random(ideas)

}



function generateScript(){

let topic=document.getElementById("scriptTopic").value


let hook=random(hooks)+" "+topic+"."


let story="Most people think the story is simple, but the reality is far more interesting."


let twist="The craziest part? Almost nobody noticed the key moment that changed everything."


let ending="Follow for more viral stories."


let script=

"HOOK:\n"+hook+"\n\n"+

"STORY:\n"+story+"\n\n"+

"TWIST:\n"+twist+"\n\n"+

"ENDING:\n"+ending+"\n\n"+

"Created with CreatorGrowth AI"



document.getElementById("scriptResult").value=script

}



function copyScript(){

let text=document.getElementById("scriptResult")

text.select()

document.execCommand("copy")

alert("Script copied!")

}



function scrollToTools(){

document.getElementById("tools").scrollIntoView({behavior:"smooth"})

}
