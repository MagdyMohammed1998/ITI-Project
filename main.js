var btn = document.getElementsByClassName("btn");

  var gallery = document.getElementById("gallery");

    var images = new Array(

        " Rescours/images/1.png",
         "Rescours/images/2.png",
          "Rescours/images/3.png",
           "Rescours/images/4.png"

    );

     for (let i=0; i<btn.length; i++){
      btn[i].onclick = function(){
       
        gallery.src = images[i];
      };
     }


//===========================================







