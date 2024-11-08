// variable
var tutorial_btn=document.getElementById("tutorial_btn");
var tools_btn=document.getElementById("tools_btn");
var care_btn=document.getElementById("care_btn");
var subject=document.getElementById("subject");
var subject_select=document.getElementById("select_enquiry");
var form=document.querySelector(".enquiry-form");
var first_name=document.getElementById("fname");
var last_name=document.getElementById("lname");
var phone=document.getElementById("phone");
var email=document.getElementById("email");
var street=document.getElementById("street");
var city=document.getElementById("city");
var postcode=document.getElementById("postcode");
var enquiry_field=document.getElementById("enquiry-field");
var confirm_btn=document.getElementById("submit_confirm");
var wrapper=document.getElementsByClassName("select_wrapper")[0];
var select_btn=document.getElementById("select_btn");
var options=document.getElementById("options");
var searchInput=document.getElementById("search_input");

// Function to store the item for enquiry form in sessionstorage
function store_enquiry(){
    var gender=document.querySelector('input[name="gender"]:checked').value;
    var state=select_btn.firstElementChild.innerText;
    var tutorial=document.querySelector('select[name="tutorial"]').value;
    sessionStorage.setItem("first_name",first_name.value);
    sessionStorage.setItem("last_name",last_name.value);
    sessionStorage.setItem("gender",gender);
    sessionStorage.setItem("phone",phone.value);
    sessionStorage.setItem("email",email.value);
    sessionStorage.setItem("street",street.value);
    sessionStorage.setItem("city",city.value);
    sessionStorage.setItem("state",state);
    sessionStorage.setItem("postcode",postcode.value);
    sessionStorage.setItem("tutorial",tutorial);
    sessionStorage.setItem("subject",subject.value);
    sessionStorage.setItem('enquiry',enquiry_field.value);
}

// Function to retrieve the stored data in confirm page
function retrive(){
    // Retrieve the name
    var fname_value=sessionStorage.getItem("first_name");
    var lname_value=sessionStorage.getItem("last_name");
    var stored_name=fname_value+" "+lname_value;
    var name= document.getElementById("name_field");
    if (name && stored_name){
        name.innerHTML=stored_name;
    }

    // Retrieve the gender
    var stored_gender=sessionStorage.getItem("gender");
    var gender=document.getElementById("gender_field");
    if (gender && stored_gender){
        gender.innerHTML=stored_gender;
    }
    
    // Retrieve the phone number
    var phone=document.getElementById("phone_field");
    var stored_phone=sessionStorage.getItem("phone");
    if (phone && stored_phone){
        phone.innerHTML=stored_phone;
    }

    // Retrieve the email address
    var email=document.getElementById("email_field");
    var stored_email=sessionStorage.getItem("email");
    if (email && stored_email){
        email.innerHTML=stored_email;
    }
    
    // Retrieve the street
    var street=document.getElementById("street_field");
    var stored_street=sessionStorage.getItem("street");
    if (street && stored_street){
        street.innerHTML=stored_street;
    }

    // Retrieve the city
    var city=document.getElementById("city_field");
    var stored_city=sessionStorage.getItem("city");
    if (city && stored_city){
        city.innerHTML=stored_city;
    }

    // Retrieve the state
    var state=document.getElementById("state_field");
    var stored_state=sessionStorage.getItem("state");
    if (state && stored_state){
        state.innerHTML=stored_state;
    }

    // Retrieve the postcode
    var postcode=document.getElementById("postcode_field");
    var stored_postcode=sessionStorage.getItem("postcode");
    if (postcode && stored_postcode){
        postcode.innerHTML=stored_postcode;
    }

    // Retrieve the tutorial
    var tutorial=document.getElementById("tutorial_field");
    var stored_tutorial=sessionStorage.getItem("tutorial");
    if (tutorial && stored_tutorial){
        tutorial.innerHTML=stored_tutorial;
    }

    // Retrieve the subject
    var subject=document.getElementById("subject_field");
    var stored_subject=sessionStorage.getItem("subject");
    if (subject && stored_subject){
        subject.innerHTML=stored_subject;
    }

    // Retrieve the enquiry
    var comment=document.getElementById("comment_field");
    var stored_comment=sessionStorage.getItem("enquiry");
    if (comment && stored_comment){
        comment.innerHTML=stored_comment;
    }
    
    
}

retrive();

// function to store the item in sessionstorage
function storeitem(subject_text,tutorial_value){
    sessionStorage.setItem("subject",`RE: Query Concerning: [${subject_text}]`);
    sessionStorage.setItem("tutorial",tutorial_value);
    window.location.replace("enquiry.html");
}

// Enquiry button on different page to call out the storing function
if (tutorial_btn){
    tutorial_btn.addEventListener("click",function(){
        storeitem("Tutorial","Tutorial");
    })
}
if (tools_btn){
    tools_btn.addEventListener("click",function(){
        storeitem("Tools","Tools");
    })
}
if (care_btn){
    care_btn.addEventListener("click",function(){
        storeitem("Care","Care");
    })
}


function option_tutorial(){
    // Populate the dropdown menu for tutorial in enquiry
    var tutorial_option=["Tutorial","Tools","Care"];
    for (var i=0;i<tutorial_option.length;i++){
        var opt=tutorial_option[i];
        var new_opt=document.createElement("option");
        new_opt.text=opt;
        new_opt.value=opt;
        subject_select.appendChild(new_opt);
    }
}
// initially filled the subject and select
function display_data(){
    subject.value="RE: Query Concerning: [Tutorial]";
    var stored_subject=sessionStorage.getItem("subject");
    if (subject && stored_subject){
        subject.value=stored_subject;
    };
    var stored_tutorial=sessionStorage.getItem("tutorial");
    if (subject_select && stored_tutorial){
        subject_select.value=stored_tutorial;
    }
}

// subject can auto change with the tutorial selection
function storesub(){
    var selected_tutorial=subject_select.value;
    sessionStorage.setItem("tutorial",selected_tutorial);
    subject.value=`RE: Query Concerning: [${sessionStorage.getItem("tutorial")}]`;
}
subject_select.addEventListener("change",function(){
    storesub();
})

var error_alert="";
// Set error message inside the form
function setError(element, message){
    var input=element.parentElement;
    var error_display=input.querySelector(".error");
    error_display.innerText=message;
    error_alert += message + "\n";
    input.classList.add("error");
    input.classList.remove("success");
}

// Remove the error message and update to success status
function setSuccess(element){
    var input=element.parentElement;
    var error_display=input.querySelector(".error");
    error_display.innerText="";
    input.classList.add("success");
    input.classList.remove("error");
}

// Capitalize the first letter of the word
function capitalize(element){
    value=element.value.trim();
    if (value){
        value=value.split(/[\s,]+/).map(word=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(" ");
        element.value=value;
    }
}
// Function to check whether contain digit
function onlystring(input) {
    var string=/^[a-zA-Z\s]+$/;
    return string.test(input);
}

// Called the function after click the other place (need ask)
first_name.addEventListener("blur",function(){
    capitalize(first_name);
});
last_name.addEventListener("blur", function(){
    capitalize(last_name);
});
email.addEventListener("blur",function(){
    var emailvalue=email.value.trim();
    // Make sure all the gmail address is lower case
    emailvalue=emailvalue.toLowerCase();
    email.value=emailvalue;
})
street.addEventListener("blur",function(){
    capitalize(street);
})
city.addEventListener("blur",function(){
    capitalize(city);
})

// Validate the firstname
function validate_firstname(){
    var fnamevalue=first_name.value.trim();
    if (fnamevalue==""){
        setError(first_name,"* The first name is required.");

        return false;
    }
    else if (!onlystring(fnamevalue)){
        setError(first_name,"* Name only contain alphabert.");
        return false;
    }
    else if (fnamevalue.length>25){
        setError(first_name,"* Name cannot exceed 25 alphabert.");
        return false;
    }
    else{
        setSuccess(first_name);
        return true;
    }
}
// Validate the last name
function validate_lastname(){
    var lnamevalue=last_name.value.trim();
    if (lnamevalue==""){
        setError(last_name,"* The last name is required.");
        return false;
    }
    else if(!onlystring(lnamevalue)){
        setError(last_name,"* Name only contain alphabert.");
        return false;
    }
    else if(lnamevalue.length>25){
        setError(last_name,"* Name cannot exceed 25 alphabert.");
        return false;
    }
    else{
        setSuccess(last_name);
        return true;
    }
}

// Validate the phone
function validate_phone(){
    const phonepattern=/^01[0-9]{8}$/;
    var phonevalue=phone.value.trim();
    if (phonevalue==""){
        setError(phone,"* The phone number is required.");
        return false;
    }
    else if (!phonepattern.test(phonevalue)){
        setError(phone,"* The phone number should be 10 digit and start from 01.");
        return false;
    }
    else{
        setSuccess(phone);
        return true;
    }
}

// Validate the email address
function validate_email(){
    const emailpattern = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
    var emailvalue=email.value.trim();
    if (emailvalue==""){
        setError(email,"* The email address is required.");
        return false;
    }
    else if (!emailpattern.test(emailvalue)){
        setError(email,"* Ensure your email address is valid.");
        return false;
    }
    else{
        setSuccess(email);
        return true;
    }
}
// Validate the street
function validate_street(){
    var streetvalue=street.value.trim();
    if (streetvalue==""){
        setError(street,"* The street is required.");
        return false;
    }
    else if (streetvalue.length>255){
        setError(street,"* Street address is too long.");
        return false;
    }
    else{
        setSuccess(street);
        return true;
    }
}

// Validate the city
function validate_city(){
    var cityvalue=city.value.trim();
    if (cityvalue==""){
        setError(city,"* The city is required.");
        return false;
    }
    else if(!onlystring(cityvalue)){
        setError(city,"* Please ensure that the city is exist.")
        return false;
    }
    else if (cityvalue.length>25){
        setError(city,"* The city/town cannot exceed 25 character.")
        return false;
    }
    else{
        setSuccess(city);
        return true;
    }
}

// Validate the postcode
function validate_postcode(){
    var postcodevalue=postcode.value.trim();
    const postcodepattern=/^[0-9]{5}$/;
    if (postcodevalue==""){
        setError(postcode,"* The postcode is required.");
        return false;
    }
    else if (!postcodepattern.test(postcodevalue)){
        setError(postcode,"* Please ensure the postcode is in 5 digit.")
    }
    else if(postcodevalue.length>5){
        setError(postcode,"* Postcode cannot exceed 5 digit.")
    }
    else{
        setSuccess(postcode);
        return true;
    }
}
// Validate the enquiry comment
function validate_enquiry(){
    var enquiryvalue=enquiry_field.value.trim();
    if (enquiryvalue==""){
        setError(enquiry_field,"* Please leave your comments.");
        return false;
    }
    else {
        setSuccess(enquiry_field);
        return true;
    }
}

// Validate the subject field
function validate_subject(){
    var subjectvalue=subject.value.trim();
    if(subjectvalue==""){
        setError(subject,"* The subject field is required.");
        return false;
    }
    else{
        setSuccess(subject);
        return true;
    }
}

// Validate all the input
function validate_input(){ 
    let isValid = true; 
    error_alert="";
    if (!validate_firstname()) isValid = false;
    if (!validate_lastname()) isValid = false;
    if (!validate_phone()) isValid = false;
    if (!validate_email()) isValid = false;
    if (!validate_street()) isValid = false;
    if (!validate_city()) isValid = false;
    if (!validate_postcode()) isValid = false;
    if (!validate_enquiry()) isValid = false;
    if (!validate_subject()) isValid = false;
    return isValid; 
}

let defaultCountry = "Sarawak";
select_btn.firstElementChild.innerText = defaultCountry;
// Add active class
select_btn.addEventListener("click",function(){
    wrapper.classList.toggle("active");
});
// Countries array
let countries=["Perak","Pahang","Selangor","Malacca","Sabah","Sarawak","Kelantan","Terengganu","Perlis","Negeri Sembilan","Kedah","Johor","Penang"];
// Function to add countries
function addCountries(selected_option = defaultCountry) { // Pass defaultCountry as parameter
    options.innerHTML = "";
    countries.forEach(country => {
        let isselected = country === selected_option ? "selected" : "";
        let li = `<li onclick="updateField(this)" class="${isselected}" id="country_option">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountries();
// Function to retrieve the selected_option
function updateField(selected_option){
    select_btn.firstElementChild.innerText=selected_option.innerText;
    addCountries(selected_option.innerText);
    wrapper.classList.remove("active");
}
// Function to search the countries and modified the array based on the searched value
searchInput.addEventListener("keyup",function(){
    let arr=[];
    let searchedval=searchInput.value.toLowerCase();
    arr=countries.filter(data => {
        return data.toLowerCase().startsWith(searchedval);
    }).map(data=>`<li onclick="updateField(this)">${data}</li>`).join("");
    options.innerHTML=arr ? arr : `<p>Opps! State not found!</p>`;
})

function initalise(){
    option_tutorial();
    display_data();
    // Prevent the form submit if the inputs are invalid
    form.addEventListener("submit",(e)=>{
        if (!validate_input()){
            e.preventDefault();
            alert("Somethings went wrong! Please enter all valid message:\n"+error_alert);
        } else{
            store_enquiry();
            window.location.href="confirm.html";
        }
    });
    showslideherbarium(herbarium_index);
    updateTime();
    
}
window.onload = initalise;




