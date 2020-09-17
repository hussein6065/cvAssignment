const form = document.getElementById("cv");

function createCv(event) {
    event.preventDefault(); 
    const first= form.elements["fName"].value;
    const mid = form.elements["mName"].value;
    const last = form.elements["lName"].value;
    const email = form.elements["email"].value;
    const gender = form.elements["gender"].value;
    const number = form.elements['phone'].value;
    const address = form.elements['address'].value;
    
    if(validateForm(form)){
        localStorage.setItem("first",first);
        localStorage.setItem("mid",mid);
        localStorage.setItem("last",last);
        localStorage.setItem("email",email);
        localStorage.setItem("gender",gender);
        localStorage.setItem("number",number);
        localStorage.setItem("address",address);
        window.location.replace('./cv.html');
    }
    
}
form.addEventListener("submit",createCv);

function validateForm(form) {
    const first= form.elements["fName"];
    const mid = form.elements["mName"];
    const last = form.elements["lName"];
    const email = form.elements["email"];
    const gender = form.elements["gender"];
    const number = form.elements['phone'];
    const address = form.elements['address'];

    var validate = true;
    


    if (first.value.trim() == "" || !isNaN(first.value.trim())){ 
        document.getElementById("first").style.borderColor = "red";
        
        validate = false; 
    }
    if (last.value.trim() == "" ||  !isNaN(last.value.trim())){ 
        document.getElementById("last").style.borderColor = "red";
        
        validate = false; 
    }
    if (email.value.trim() == "" ){ 
        document.getElementById("emailinput").style.borderColor = "red";
        
        validate = false;  
    }
    if (phone.value.trim() == "" || isNaN(phone.value.trim())){ 
        document.getElementById("phone").style.borderColor = "red";
        //  console.log(isNaN(phone.value.trim()));
        validate = false; 
    }
    if (address.value.trim() == "" || !isNaN(address.value.trim())){ 
        document.getElementById("address").style.borderColor = "red";
         
        validate = false;  
    }
return validate;

}






