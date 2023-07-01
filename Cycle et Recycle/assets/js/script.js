document.getElementById("mobile-menu").addEventListener("click", function () {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");  });

    function showInfo(index) {
        document.getElementById(`info-${index}`).style.bottom = '0';
    }
    
    function hideInfo(index) {
        document.getElementById(`info-${index}`).style.bottom = '-100%';
    }
    