           
            var slideH1Index = 0;
            showSlidesH1();
            
            function showSlidesH1() {
              let i;
              let slidesH1 = document.getElementsByClassName("mySlidesH1");
              let dotsH1 = document.getElementsByClassName("dotH1");
              for (i = 0; i < slidesH1.length; i++) {
                slidesH1[i].style.display = "none";  
              }
              slideH1Index++;
              if (slideH1Index > slidesH1.length) {slideH1Index = 1}    
              for (i = 0; i < dotsH1.length; i++) {
                dotsH1[i].className = dotsH1[i].className.replace(" active", "");
              }
              slidesH1[slideH1Index-1].style.display = "block";  
              dotsH1[slideH1Index-1].className += " active";
              setTimeout(showSlidesH1, 2000); // Change image every 2 seconds
            }
