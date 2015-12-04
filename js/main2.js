window.addEventListener("load", function(){
    
    var handleBar = document.querySelector(".handle-bar");
    var navMenu = document.querySelector(".nav-menu");
    
    
    
    var navItem = document.querySelector(".home"); 
    var container = document.querySelector(".container");
    
    var navItem2 = document.querySelector(".scan");
    var scanContainer = document.querySelector(".scanContainer");
    
    var navItem3 = document.querySelector(".info");
    var infoContainer = document.querySelector(".infoContainer");
    
    var navItem4 = document.querySelector(".contact");
    var contactContainer = document.querySelector(".contactContainer");
    
    handleBar.addEventListener("click" ,function(){
    
        navMenu.classList.toggle("show");
        handleBar.classList.toggle("bgColorChange");
        //container.classList.toggle("ease");
        
    
    });
    
    navItem.addEventListener("click", function(){
    
        container.classList.toggle("showContainer");
        
        scanContainer.classList.remove("showContainer");
        infoContainer.classList.remove("showContainer");
        contactContainer.classList.remove("showContainer");
        
        navMenu.classList.remove("show");
        handleBar.classList.remove("bgColorChange");
        
        
    });
    
    navItem2.addEventListener("click", function(){
    
        scanContainer.classList.toggle("showContainer");

        container.classList.remove("showContainer");
        infoContainer.classList.remove("showContainer");
        contactContainer.classList.remove("showContainer");
        
        
        navMenu.classList.remove("show");
        handleBar.classList.remove("bgColorChange");
    
    });

    navItem3.addEventListener("click", function(){
    
        infoContainer.classList.toggle("showContainer");
        
        container.classList.remove("showContainer");
        scanContainer.classList.remove("showContainer");
        contactContainer.classList.remove("showContainer");
        
        
        navMenu.classList.remove("show");
        handleBar.classList.remove("bgColorChange");
    
    });

    navItem4.addEventListener("click", function(){
    
        contactContainer.classList.toggle("showContainer");
        
        container.classList.remove("showContainer");
        infoContainer.classList.remove("showContainer");
        scanContainer.classList.remove("showContainer");
        
        
        navMenu.classList.remove("show");
        handleBar.classList.remove("bgColorChange");
        
    });

    
});