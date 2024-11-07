// Populate the dropdown menu for navigation bar
var navdropdown_option=[
    {name:"Tutorial", link:"tutorial.html"},
    {name:"Tools", link:"tools.html"},
    {name:"Care", link:"care.html"}
];

function populate_nav(){
    var nav_dropdown=document.querySelector(".dropdown-content");
    if (nav_dropdown){
        navdropdown_option.forEach(option =>{
            var li=document.createElement("li");
            li.textContent=option.name;
            li.addEventListener("click",function(){
                window.location.replace(option.link);
            });
            nav_dropdown.appendChild(li);
        });
    }
    
}
populate_nav();
function send_email(){
    var name_value= document.getElementById("name_field").innerText;
    var gender_value=document.getElementById("gender_field").innerText;
    var phone_value=document.getElementById("phone_field").innerText;
    var email_value=document.getElementById("email_field").innerText;
    var street_value=document.getElementById("street_field").innerText;
    var city_value=document.getElementById("city_field").innerText;
    var state_value=document.getElementById("state_field").innerText;
    var postcode_value=document.getElementById("postcode_field").innerText;
    var tutorial_value=document.getElementById("tutorial_field").innerText;
    var subject_value=document.getElementById("subject_field").innerText;
    var comment_value=document.getElementById("comment_field").innerText;

    var mailtolink=`mailto:104384041@students.swinburne.edu.my?subject=${encodeURIComponent(subject_value)}&body=Name:${encodeURIComponent(name_value)}%0A`+`Gender:${encodeURIComponent(gender_value)}%0A`+`Phone:${encodeURIComponent(phone_value)}%0A`+`Email:${encodeURIComponent(email_value)}%0A`+`Street Address:${encodeURIComponent(street_value)}%0A`+`City:${encodeURIComponent(city_value)}%0A`+`State:${encodeURIComponent(state_value)}%0A`+`Postcode:${encodeURIComponent(postcode_value)}%0A`+`Tutorial:${encodeURIComponent(tutorial_value)}%0A`+`Comment:${encodeURIComponent(comment_value)}`;
    window.location.href=mailtolink;
}
confirm_btn.addEventListener("click",function(){
    send_email();
})

