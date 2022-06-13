let obj = JSON.parse(localStorage.getItem('user'))
fun()
function fun(){
let side = document.querySelector('#sidebar')
let div = document.createElement('div')
 let img = document.createElement('img')
 img.src=obj.image
 img.setAttribute('id','user_image')
 let name = document.createElement('h2')
 name.innerText=obj.name
 name.setAttribute('id','user_name')
 let email = document.createElement('h3')
 email.innerText=obj.email
 email.setAttribute('id','user_email')
 let country = document.createElement('h3')
 country.innerText=obj.country
 country.setAttribute('id','user_country')
div.append(img,name,email,country)
side.append(div)
}

// api1 = https://masai-mock-api.herokuapp.com/news/top-headlines?country=   
// api2 = https://masai-mock-api.herokuapp.com/news?q=


hello(obj.country)

async function hello(x){
    url = "https://masai-mock-api.herokuapp.com/news/top-headlines?country="+x;
    let res = await fetch(url)
    let data = await res.json()
    console.log(data.articles)
     append1(data.articles)
}

function append1(arr){
    let right = document.querySelector('#news_result')
    right.innerHTML='';
arr.forEach(el => {
    let div = document.createElement('div')
    div.addEventListener('click',function(){
        dip(el)
    })


    let imd = document.createElement('div')
    let img = document.createElement('img')
    img.src = el.urlToImage
    imd.append(img) 
    let title = document.createElement('h3')
    title.innerText=el.title
    let aut = document.createElement('h3')
    aut.innerText=el.author
    div.append(imd,title,aut)
    right.append(div)
});
}

let india = document.querySelector('#in')
india.addEventListener('click',a2)
function a2(){
    hello("in")
}
let china= document.querySelector('#ch')
china.addEventListener('click',a3)
function a3(){
    hello("ch")
}
let usa = document.querySelector('#us')
usa.addEventListener('click',a4)
function a4(){
    hello("us")
}
let uk = document.querySelector('#uk')
uk.addEventListener('click',a5)
function a5(){
    hello("uk")
}
let nz = document.querySelector('#nz')
nz.addEventListener('click',a6)
function a6(){
    hello("nz")
}

function dip(elem){
    localStorage.setItem('news',JSON.stringify(elem))
    window.location.href = "news.html"
}

function sudipta(){
    
}


