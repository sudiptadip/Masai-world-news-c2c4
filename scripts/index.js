/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

let form = document.querySelector('form')

form.addEventListener('submit',myfunction)

function myfunction(){
event.preventDefault()

    var obj = {
        
            name: form.user_name.value,
            image: form.user_image.value,
            email: form.user_email.value,
            country: form.user_country.value 
    
    }

    localStorage.setItem('user',JSON.stringify(obj))
    window.location.reload()
}
