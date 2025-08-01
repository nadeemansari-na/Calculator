let screen = document.getElementsByClassName("screen")[0];
let buttons=document.getElementsByTagName("button");
let string=""

Array.from(buttons).forEach(e=>{
    e.addEventListener("click",v=>{
        console.log("is it working")
        if(v.target.innerHTML == `=`) {
            // console.log(v.target.innerHTML)
            string = eval(string)
             screen.value= string
             
        }else if(v.target.innerHTML == `Ac`){
            string= "";
            screen.value=string
        } else if(v.target.innerHTML == `Del`){
           string = string.substring(0,string.length-1)
           screen.value=string
        }
        else{
            string =string + v.target.innerHTML
            screen.value= string
        }
    })
})
