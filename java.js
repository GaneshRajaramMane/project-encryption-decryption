/*const text = document.querySelector("#textmsg")
const password = document.querySelector('#password')
const result = document.querySelector("#result")
var clutter = "";
var parinam = "";


function encryption(){
    document.querySelector("#encbtn1").addEventListener("click",function(){
        var input =document.getElementById("textarea").value
        //console.log(input)
        var password= document.getElementById("password").value;
        //console.log(password)

        var a=input.split("")
        //console.log(a)

        a.forEach(element=> {
            clutter+=`&#128${(element.charCodeAt())}`
        });
       //console.log(clutter)

        document.querySelector("#result").innerHTML=clutter
        

        var dataarr=[]
        //agar data pahile se he h localstorage m tho push karna padega naya add hoga 
        if(JSON.parse(localStorage.getItem("data1"))){
            dataarr=JSON.parse(localStorage.getItem("data1"))
            dataarr.push({"pass":password,"input":input,"clutter":clutter})
        }
        //kuch nhi h tho store karna padega
        else{
            dataarr=[{"pass":password,"input":input,"clutter":clutter}]
        }
        //data aane ke badd arr mai store in local storage
        localStorage.setItem("data1",JSON.stringify(dataarr))
    })

}




function decryption() {
    document.querySelector("#decbtn1").addEventListener("click", function () {
        var clutter2 ='';
        var input2 = document.querySelector("#emojiinput").value
        var finalPass = document.querySelector("#password1").value
        var user = JSON.parse(localStorage.getItem('data1'))
        console.log(user)
        var str2 = input2.split(" ")
        str2.forEach(element => {
                clutter2 += `&#${(element.codePointAt(0))} `
        });
        console.log(clutter2)
        var found;
        for(let i of user){
            if(i.clutter == clutter2){
                found = i;
                console.log(i)
            }
        }
        if (found.clutter === clutter2) {
            console.log("jay ho")
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `#eee`

            document.querySelector("#result").innerHTML = found.input
        } else {
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `red`
            document.querySelector("#result").innerHTML = "Wrong password!"
        }
    })
}

function buttonclick(){
    document.querySelector(".decryption").style.display = "none"
    
    document.querySelector("button").addEventListener("click", function () {
        document.querySelector("#result").style.display = "block"
        // console.log(localStorage.getItem("password"))
        // console.log(localStorage.getItem("emojis"))
    })
    
    document.querySelector("#encbtn").addEventListener("click",function(){
        document.querySelector("#result").style.display="none"
        document.querySelector(".encryption").style.display="block"
        document.querySelector(".decryption").style.display="none"
        document.querySelector(".main h1 span img").style.rotate="180deg"
        document.querySelector("#encbtn").style.backgroundColor="#2e2e2e"
        document.querySelector("#decbtn").style.backgroundColor="#1c1c1c"
       
        
    })
    document.querySelector("#decbtn").addEventListener("click",function(){
        document.querySelector("#result").style.display="none"
        document.querySelector(".decryption").style.display="block"
        document.querySelector(".encryption").style.display="none"
        document.querySelector(".main h1 span img").style.rotate="360deg"
        document.querySelector("#decbtn").style.backgroundColor="#2e2e2e"
        document.querySelector("#encbtn").style.backgroundColor="#1c1c1c"
      
    })
}
encryption();
decryption()
buttonclick();*/

const text = document.querySelector("#textmsg")
const password = document.querySelector('#password')
const result = document.querySelector("#result")
var clutter = "";
var parinam = "";

function encryption() {

    document.querySelector("#encbtn1").addEventListener("click", function () {


        // get the password

        var pass = document.getElementById("password").value;
        console.log(pass)


        // get the input

        var input = document.getElementById("textarea").value;
        console.log(input)

        //converting it into a set of emojis

        var str = input.split("")
        str.forEach(element => {
            clutter += `&#128${(element.charCodeAt())} `
            // console.log((element.charCodeAt()) * Math.floor(Math.random() * 10))
        });
        // console.log(clutter)

        //saving emojis in localstorage

        // localStorage.setItem("emojis", clutter)

        //showing result

        document.querySelector("#result").innerHTML = clutter

        var dataarr = [];
        if(JSON.parse(localStorage.getItem('data1'))){
            dataarr = JSON.parse(localStorage.getItem('data1'));
            console.log(dataarr)
            dataarr.push({"pass":pass, "input":input, "clutter":clutter})
        }else{
            dataarr = [{"pass":pass,"input":input,"clutter":clutter}]
        }
        localStorage.setItem(`data1`, JSON.stringify(dataarr))
    })

}

function decryption() {
    document.querySelector("#decbtn1").addEventListener("click", function () {
        var clutter2 = '';
        var input2 = document.querySelector("#emojiinput").value
        var finalPass = document.querySelector("#password1").value
        var user = JSON.parse(localStorage.getItem('data1'))
        console.log(user)
        var str2 = input2.split(" ")
        str2.forEach(element => {
                clutter2 += `&#${(element.codePointAt(0))} `
                // console.log((element.charCodeAt()) * Math.floor(Math.random() * 10))
        });
        console.log(clutter2)
        var found;
        for(let i of user){
            if(i.clutter == clutter2){
                found = i;
                console.log(i)
            }
        }
        if (found.clutter === clutter2) {
            console.log("jay ho")
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `#eee`

            document.querySelector("#result").innerHTML = found.input
        } else {
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `red`
            document.querySelector("#result").innerHTML = "Wrong password!"
        }
    })

}


function btnClicking() {
    document.querySelector(".decryption").style.display="none"

    document.querySelector("button").addEventListener("click", function () {
        document.querySelector("#result").style.display = "block"
        // console.log(localStorage.getItem("password"))
        // console.log(localStorage.getItem("emojis"))
    })
    document.querySelector("#decbtn").addEventListener("click", function () {
        document.querySelector("#result").style.display = "none"
        document.querySelector(".decryption").style.display = "block"
        document.querySelector(".encryption").style.display = "none"
        document.querySelector("#decbtn").style.backgroundColor = "#333"
        document.querySelector("#encbtn").style.backgroundColor = "#222"
        document.querySelector(".main h1 span img").style.rotate = '360deg'
    })
    document.querySelector("#encbtn").addEventListener("click", function () {
        document.querySelector(".decryption").style.display = "none"
        document.querySelector("#result").style.display = "none"
        document.querySelector(".encryption").style.display = "block"
        document.querySelector("#decbtn").style.backgroundColor = "#222"
        document.querySelector("#encbtn").style.backgroundColor = "#333"
        document.querySelector(".main h1 span img").style.rotate = '180deg'

    })
}

encryption();

decryption()

btnClicking();
