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




let data  = JSON.parse(localStorage.getItem('news'))

funny(data)

function funny(el){
    let right = document.querySelector('#detailed_news')
    
    let img = document.createElement('img')
    img.src = el.urlToImage 
    let title = document.createElement('h3')
    title.innerText=el.title
    let aut = document.createElement('h4')
    aut.innerText=el.description
    
    right.append(img,title,aut)

}