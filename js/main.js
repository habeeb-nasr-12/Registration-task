 

let userName = document.querySelector(".username")
let userEmail = document.querySelector(".email")
let userPassword = document.querySelector(".password")
let userRePassword = document.querySelector(".confirmpassword")



let namefocused = false
let eamilfocused = false
let passswordfocused = false
let rePassswordfocused = false



function NameVaildation(){

    return /^[a-z][a-z0-9]{3,13}[a-z]$/i.test(userName.value)
}
function EamilVaildation(){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userEmail.value)

}
function PasswordValidation() {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z])(.{8,15})$/.test(userPassword.value)
}

function RePasswordValidation() {
    return userPassword.value == userRePassword.value
}

userName.addEventListener("focus",function(){
    namefocused=true
    
    })
    
    userEmail.addEventListener( "focus",function (){ 
        eamilfocused = true
    })
  
    
    userPassword.addEventListener( "focus",function (){
        passswordfocused = true
    })
    userRePassword.addEventListener("focus", function (){
        rePassswordfocused = true
    })
    

    function finalValidation(){
        if (namefocused) {
           if(NameVaildation()){
    
            userName.classList.remove("is-invalid")
            userName.classList.add("is-valid")
            document.querySelector(".namealert").classList.replace("d-block","d-none") 
            
           }
    
            else{
               
                userName.classList.remove("is-valid")
                userName.classList.add("is-invalid")
                document.querySelector(".namealert").classList.add("d-block")
               
    
    
    
    
    
    
        
             
            }}
    
    
    
    
    if (eamilfocused){
    
    if(EamilVaildation()){
    
            userEmail.classList.remove("is-invalid")
            userEmail.classList.add("is-valid")
            document.querySelector(".emailalert").classList.replace("d-block","d-none") 
           
           }
    else{
        userEmail.classList.remove("is-valid")
                userEmail.classList.add("is-invalid")
            document.querySelector(".emailalert").classList.add("d-block")
            
    
    }
    
    }
  
    
            if (passswordfocused){
    
                if(PasswordValidation()){
                
                        userPassword.classList.remove("is-invalid")
                        userPassword.classList.add("is-valid")
                        document.querySelector(".passwordalert").classList.replace("d-block","d-none") 
                       
                       }
                else{
                    userPassword.classList.remove("is-valid")
                            userPassword.classList.add("is-invalid")
                        document.querySelector(".passwordalert").classList.add("d-block")
                        
                
                }
                
                }
                if (rePassswordfocused){
    
                    if(RePasswordValidation()){
                    
                            userRePassword.classList.remove("is-invalid")
                            userRePassword.classList.add("is-valid")
                            document.querySelector(".Repasswordalert").classList.replace("d-block","d-none") 
                           
                           }
                    else{
                        userRePassword.classList.remove("is-valid")
                                userRePassword.classList.add("is-invalid")
                            document.querySelector(".Repasswordalert").classList.add("d-block")
                            
                    
                    }
                    
                    }
    if(NameVaildation() && EamilVaildation()  && PasswordValidation()&& RePasswordValidation()){
    
    document.querySelector(".submitBtn").removeAttribute("disabled")
   
    
        }
      else{
        document.querySelector(".submitBtn").setAttribute("disabled","true")
    
      }
    
    }

document.querySelector(".alert").addEventListener("change",function(){
    document.querySelector(".alert").classList.replace("d-block","d-none") 

})

 document.querySelector("form").addEventListener("submit",  function (e){
   checkUser(e)

 })









 async function checkUser(e){
    e.preventDefault()
    let data= await fetch("https://goldblv.com/api/hiring/tasks/register",{method: "POST",
    headers:{'Accept': 'application/json',
            'Content-Type': 'application/json'},
    body:JSON.stringify(
        {username:userName.value,
        email:userEmail.value,
        password:userPassword.value,
        password:userPassword.value,
        password_confirmation:userPassword.value


        }
        
    
        
    )



 })

    const resopnse = await data.json()

    if (resopnse.id!=null){

     location.href="/login.html"
        localStorage.setItem("email",resopnse.email)
      
     
    }
  

 }

 


