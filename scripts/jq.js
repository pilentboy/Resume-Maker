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

        
    });
    //--------------

    //--------------ADDING A NEW  WorkingExperience Box
    $("#addWorkingExperienceBTN").click(function (e) { 
       
        socialMediaBox=$("#workingExperienceContainer").clone();
        
        $("#addMoreWorkingExperince").before(socialMediaBox);

        
    });
    //--------------

    

    //-------------- change resume box 

    $(".resume-pages-list li").click(function (e) { 
        let titleCliced=String($(this).index())
        
       
        $(".box").removeClass("d-flex")
        $(".box").addClass("d-none")

        $(`.box:eq(${titleCliced})`).removeClass("d-none")
        $(`.box:eq(${titleCliced})`).addClass("d-flex")

        

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


