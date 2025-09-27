/*

      Author: Jonas Harvie
      Date: 2025-07-06

*/

// initialize variables for necessary elements and related regex patterns
let myForm = document.getElementById("myForm");

let fnBox = document.getElementById("fnBox"); 
let lnBox = document.getElementById("lnBox"); 
let addressBox = document.getElementById("addressBox"); 
let cityBox = document.getElementById("cityBox"); 

let postalcodeBox = document.getElementById("postalcodeBox"); 
let regexPostalCode = /^[a-zA-Z]\d[a-zA-Z] ?\d[a-zA-Z]\d$/;

let provinceBox = document.getElementById("provinceBox"); 
let regexProvince = /^(QC|ON|MN|SK|AB|BC)$/;

let ageBox = document.getElementById("ageBox");

let emailBox = document.getElementById("emailBox"); 
let regexEmailBox = /^.+@.+\..+$/;

let passwordBox = document.getElementById("passwordBox");
let regex1 = /[A-Z]/;
let regex2 = /[0-9]/;

let confirmBox = document.getElementById("confirmBox");

// event listener for registerNow button
myForm.addEventListener("submit", function(e) {
    // prevent default error message
    e.preventDefault();

    // get current contents of all elements that need to be validated
    postalcodeBox = document.getElementById("postalcodeBox");

    provinceBox = document.getElementById("provinceBox");

    ageBox = document.getElementById("ageBox");

    emailBox = document.getElementById("emailBox");

    passwordBox = document.getElementById("passwordBox");

    confirmBox = document.getElementById("confirmBox");
    
    // validate the contents of each element
    // if any content does not meet the requirement then display an error
    // else notify the user of success in creating customer record
    if(!regexPostalCode.test(postalcodeBox.value)){
        postalcodeBox.setCustomValidity("Input correct postal code format ex. 'a2a2a2'");
        postalcodeBox.reportValidity();
    }
    else if(!regexProvince.test(provinceBox.value)){
        provinceBox.setCustomValidity("Input one of the following Canadian provinces: QC, ON, MN, SK, AB, BC");
        provinceBox.reportValidity();
    }
    else if(ageBox.value < 18){
        ageBox.setCustomValidity("Age must be at least 18 yrs. old.");
        ageBox.reportValidity();
    }
    else if(passwordBox.value.length < 6){
        passwordBox.setCustomValidity("Your password must be at least 6 characters");
        passwordBox.reportValidity();
    }
    else if(!regex1.test(passwordBox.value)){
        passwordBox.setCustomValidity("Your password must include an uppercase letter");
        passwordBox.reportValidity();
    }
    else if(!regex2.test(passwordBox.value)){
        passwordBox.setCustomValidity("Your password must include a number");
        passwordBox.reportValidity();
    }
    else if(confirmBox.value != passwordBox.value){
        confirmBox.setCustomValidity("The Confirm Password and Password fields should have identical input.");
        confirmBox.reportValidity();
    }
    else if(!regexEmailBox.test(emailBox.value)){
        emailBox.setCustomValidity("The Email field must contain the '@' and '.' characters");
        emailBox.reportValidity();
    }
    else{
        alert("Thanks for registering with our website, your customer record was created successfully.");
        
        // save the contents of the form as cookies
        fnBox = document.getElementById("fnBox"); 
        lnBox = document.getElementById("lnBox"); 
        addressBox = document.getElementById("addressBox"); 
        cityBox = document.getElementById("cityBox"); 
        document.cookie = `fnBox=${fnBox.value};path=/; SameSite=None; Secure`;
        document.cookie = `lnBox=${lnBox.value};path=/; SameSite=None; Secure`;
        document.cookie = `addressBox=${addressBox.value};path=/; SameSite=None; Secure`;
        document.cookie = `cityBox=${cityBox.value};path=/; SameSite=None; Secure`;
        document.cookie = `postalcodeBox=${postalcodeBox.value};path=/; SameSite=None; Secure`;
        document.cookie = `provinceBox=${provinceBox.value};path=/; SameSite=None; Secure`;
        document.cookie = `ageBox=${ageBox.value};path=/; SameSite=None; Secure`;
        document.cookie = `passwordBox=${passwordBox.value};path=/; SameSite=None; Secure`;
        document.cookie = `emailBox=${emailBox.value};path=/; SameSite=None; Secure`;
    }
    
});

window.addEventListener("load", function() {
    let fields = {};
    if(document.cookie){
            let cookieList = document.cookie.split("; ");
            for (let items of cookieList){
                let cookie = items.split("=");
                let name = cookie[0];
                let value = decodeURIComponent(cookie[1]);
                fields[name] = value;
                console.log(name, value);

            }
            //console.log(fields);
            //document.getElementById("cookie").textContent = fields["addressBox"];
      }
});

// event listeners for each text field to reset each respective custom validity
postalcodeBox.addEventListener('input', function() {
    if (regexPostalCode.test(postalcodeBox.value)) {
        postalcodeBox.setCustomValidity("");
    }
});

provinceBox.addEventListener('input', function() {
    if (regexProvince.test(provinceBox.value)) {
        provinceBox.setCustomValidity("");
    }
});

emailBox.addEventListener('input', function() {
    if (regexEmailBox.test(emailBox.value)) {
        emailBox.setCustomValidity("");
    }
});

ageBox.addEventListener('input', function() {
    if (ageBox.value >= 18) {
        ageBox.setCustomValidity("");
    }
});

passwordBox.addEventListener('input', function() {
    if (regex1.test(passwordBox.value) || regex2.test(passwordBox.value)) {
        passwordBox.setCustomValidity("");
    }
});

confirmBox.addEventListener('input', function() {
    if (confirmBox.value == passwordBox.value) {
        confirmBox.setCustomValidity("");
    }
});
