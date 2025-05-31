function show_menu(){
    var overlay = document.getElementById("overlay");
    if(overlay.style.display == "none" || overlay.style.display == ""){
        overlay.style.display = "block";
    }
    else{
        overlay.style.display = "none";
    }
    
}

document.getElementById('hamburger').addEventListener('click', function(){
    this.classList.toggle('active');
    show_menu();
});

