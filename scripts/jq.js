$(document).ready(function () {
    let socialMediaBox;
    //--------------ADDING A NEW SOCIAL MEDIA BOX 
    $("#addMoreSMBoxBTN").click(function (e) { 
       
        socialMediaBox=$("#soialMediaBox").clone();
        
        $(socialMediaBox).removeClass("d-none");

        $("#addMoreBox").before(socialMediaBox);
        
    });
    //--------------

      //--------------ADDING A NEW  educationExperience Box
      $("#addMoreEduExpeBTN").click(function (e) { 
       
        socialMediaBox=$("#eduExpInpContainer").clone();
        

        $("#addMoreEduExpe").before(socialMediaBox);
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


