async function page() {
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
let url = 'https://6350def93e9fa1244e4f259a.mockapi.io/juZslayy'
    let res = await fetch(url)
    let data = await res.json(url)  
    for(obj of data){
        if(username===obj.name&&password===obj.password){
        console.log(`dear`)   
        login.style.backgroundColor = "black";
        window.location.href=('./ct1.html')
        
    }
    else{
        console.log("err")
       
    }

}

}

