$(document).ready(function () {

    //--------------ADDING A NEW SOCIAL MEDIA BOX 
    $("#addMoreSMBoxBTN").click(function (e) { 
       
        let socialMediaBox=$("#soialMediaBox").clone();
        
        $(socialMediaBox).removeClass("d-none");

        $("#addMoreBox").before(socialMediaBox);
        console.log("test")
        
    });
    //--------------

    //--------------ADDING Image

   $("#selectImgBTN").change(function (e) { 
       getImg()
    
   });

   function getImg(){
        const myReader = new FileReader();
        
   }
});


