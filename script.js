async function page() {
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
let url = 'https://637db1519c2635df8f8c560f.mockapi.io/juzslay'
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

