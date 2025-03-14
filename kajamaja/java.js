      window.onscroll = function () {
        let scrollWert = window.scrollY / 5;
        document.getElementById("scroll").style.transform = `rotate(${scrollWert}deg)`;
      
      
    };


    window.addEventListener("scroll", function () {
      let scrollPosition = window.scrollY; 
      let moveX = scrollPosition * 0.1; // Geschwindigkeit
  
      document.querySelector(".header").style.setProperty("--overlay-offset", `${moveX}px`);
  });

