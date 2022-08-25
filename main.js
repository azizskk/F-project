let like = document.getElementsByClassName('fa-heart')
console.log(like)
for(let i=0; i< like.length; i++){
    like[i].addEventListener('click', function(){
    if (like[i].style.color==="rgb(158, 158, 158)")
    {
        like[i].style.color="red"
    }
    else{
        like[i].style.color="rgb(158, 158, 158)"
    }
    })
}

function validateForm(){
    var name = document.login.name.value;
    var email = document.login.email.value;
    // var password = document.login.password.value;
    var adresse = document.login.adresse.value;
    var num = document.login.num.value;
    var phone = document.login.phone.value;
    var model = document.login.model.value;

    if(name.length == 0 
        || email.length == 0 
        // || password.length ==0
        || adresse.length ==0
        || num.length ==0
        || phone.length ==0
        || model.length ==0)
    
        return alert("all fields are required!!")
        else return alert("Felicitation :)")}
        
        function ValidateEmail(mail) 
        {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
        {
            return (true)
        }
            alert("You have entered an invalid email address!")
            return (false)
        }

