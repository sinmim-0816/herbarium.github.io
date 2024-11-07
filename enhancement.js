// Variable
var popup_window=document.getElementById("popup-window");
var open_feedback=document.querySelector(".feedback");
var close_feedback= document.getElementById("close_popup");
var pathName=window.location.pathname;
var currentpage=pathName.split("/").pop();
var navmenu=document.querySelectorAll(".menu li");
var animatedcards=document.querySelectorAll(".card");

// function to show feedback content
function show_feedback(){
    popup_window.style.display="block";
}
// function to hide feedback content
function hide_feedback(){
    popup_window.style.display="none";
}
// show the feedback content after clicking feedback button
open_feedback.addEventListener("click",show_feedback);
// close the feedback content after clicking close
close_feedback.addEventListener("click",hide_feedback);

// Hightlighting the current page view
function SetActiveNav(){
    navmenu.forEach(function(item){
        var link=item.querySelector("a");
        if(link && link.getAttribute("href")===currentpage){
            item.classList.add("active");
        }
    });
    if (currentpage=="tutorial.html" || currentpage=="tools.html" || currentpage=="care.html"){
        document.querySelector(".menubar").classList.add("active");
    }
}
SetActiveNav();
// Slideshow image
let herbarium_index=1;
function autoslideherbarium(){
    // increment the image in slideshow by 1
    plusherbarium_image(1); 
}
// Set the interval for herbarium slide to change for every 3 seconds
let herbarium_interval=setInterval(autoslideherbarium,3000);
// Function to move next or previous image
function plusherbarium_image(n){
    clearInterval(herbarium_interval);
    herbarium_interval=setInterval(autoslideherbarium,3000);
    showslideherbarium(herbarium_index+=n);
}
// Function to set the current image in slideshow by clicking the dot
function currentSlideHerbarium(n){
    clearInterval(herbarium_interval);
    showslideherbarium(herbarium_index=n);
    herbarium_interval=setInterval(autoslideherbarium,3000);
}
// Function to display the slideshow based on index
function showslideherbarium(n){
    let i;
    let slides=document.getElementsByClassName("slides_image");
    let dots=document.getElementsByClassName("dot1");
    if(n>slides.length){
        herbarium_index=1;
    }
    if (n<1){
        herbarium_index=slides.length;
    }
    for (i=0; i<slides.length;i++){
        slides[i].style.display="none";
    }
    for (i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace("active","");
    }
    slides[herbarium_index -1].style.display="block";
    dots[herbarium_index -1].className +=" active";
}
var dots=document.getElementsByClassName("dot1");
for (let i=0;i<dots.length;i++){
    dots[i].addEventListener("click",function(){
        currentSlideHerbarium(i+1);
    })
}

// Animated Card
animatedcards.forEach(function(card){
    card.addEventListener("mouseover",function(){
        animatedcards.forEach(function(previous){
            previous.classList.remove("active");
        });
        this.classList.add("active");
    });
})

// Add Animation Scrolling for the role of herbarium by using API 
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, index) {
        if (entry.isIntersecting) {
            // Apply a delay based on the index to create a staggered effect
            // Delay increases by 200ms for each element
            setTimeout(function() {
                entry.target.classList.add("showrole");
            }, index * 200); 
        } 
        else {
            entry.target.classList.remove("showrole");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hiddenrole");
hiddenElements.forEach(function(el) {
    observer.observe(el);
});

// Set the current time
const timeElement = document.getElementById("clock");
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day=now.getDate();
    const monthindex=now.getMonth();
    const year=now.getFullYear();
    const monthname=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month=monthname[monthindex];
    // Format the string with leading zeroes
    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const dateStr = `${day.toString().padStart(2, '0')}-${month}-${year}`;

    timeElement.innerText = `${dateStr} ${clockStr}`;
}
setInterval(updateTime, 1000);

// Random image
image_nectandra_array=[
    "images/herbarium_nect.jpg",
    "images/herbarium_nect2.jpg",
    "images/herbarium_nect3.jpg"
];
image_mier_array=[
    "images/herbarium_mier.jpg",
    "images/herbarium_mier2.jpg",
    "images/herbarium_mier3.jpg"
];
image_rox_array=[
    "images/herbarium_rox.jpg",
    "images/herbarium_rox2.jpg",
    "images/herbarium_rox3.jpg"
];
function get_random_image(array,imageid){
    // Get random index
    var random_index=Math.floor(Math.random()*array.length);
    // Get image at random_index
    var selected_image=array[random_index];
    // Display the image
    document.getElementById(imageid).src=selected_image;
}
var shufflebtn=document.getElementById("shuffle");
shufflebtn.addEventListener("click",function(){
    get_random_image(image_nectandra_array,"randomimage_nectandra");
    get_random_image(image_mier_array,"randomimage_mier");
    get_random_image(image_rox_array,"randomimage_rox");
});

