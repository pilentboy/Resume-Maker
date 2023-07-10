$(document).ready(function () {
    
    //--------------ADDING A NEW SOCIAL MEDIA BOX 
    $("#socialParentBTN").click(function (e) { 
       
        let socialMediaBox=$("#soialMediaCouple").clone();

        $("#addingSocialParent").before(socialMediaBox);
        
    });
    //--------------


    //--------------ADDING A NEW EduExperience
        $("#addingEduExpParentBTN").click(function (e) { 
       
            let eduExperienceBox=$("#eduExperience").clone();
    
            $("#addingEduExpParent").before(eduExperienceBox);
            
        });
    //--------------
    
    //--------------ADDING A NEW workingExperience
        $("#addinWoExpBTN").click(function (e) { 
       
            let workingExperienceBox=$("#workingExperience").clone();
    
            $("#addinWoExp").before(workingExperienceBox);
            
        });
    //--------------
    

    //--------------ADDING A NEW workingExperience
        $("#LanSkillParentBTN").click(function (e) { 
       
            let workingExperienceBox=$("#userLanguageSkill").clone();
    
            $("#LanSkillParent").before(workingExperienceBox);
            
        });
    //--------------

    
    //--------------ADDING A NEW workingExperience
    $("#addingLanSkillBTN").click(function (e) { 
       
        let workingExperienceBox=$("#userLanguageSkill").clone();

        $("#addingLanSkill").before(workingExperienceBox);
        
    });
    //--------------

    
    //--------------ADDING A NEW Experimentalskill
       $("#addingExpeskillBTN").click(function (e) { 
       
        let workingExperienceBox=$("#Experimentalskill").clone();

        $("#addingExpeskill").before(workingExperienceBox);
        
    });
    //--------------


    //--------------ADDING A NEW CertificateSkill
    $("#addingCertSkillBTN").click(function (e) { 
       
        let workingExperienceBox=$("#CertificateSkill").clone();

        $("#addingCertSkill").before(workingExperienceBox);
        
    });
    //--------------

    
    //--------------ADDING A NEW Project Box
    $("#addingProjectBTN").click(function (e) { 
       
        let workingExperienceBox=$("#CertificateSkill").clone();

        $("#addingProject").before(workingExperienceBox);
        
    });
    //--------------

    //--------------ADDING A NEW Reseach
    $("#addingResearchBTN").click(function (e) { 
       
        let workingExperienceBox=$("#Research").clone();

        $("#addingResearch").before(workingExperienceBox);
        
    });
    //--------------


    //-------------- change resume box 

    $(".resume-pages-list li").click(function (e) { 
        let titleCliced=String($(this).index())

        $(".resume-pages-list li").removeClass("li-color")
        $(this).addClass("li-color");

       
        $(".box").removeClass("d-flex")
        $(".box").addClass("d-none")

        $(`.box:eq(${titleCliced})`).removeClass("d-none")
        $(`.box:eq(${titleCliced})`).addClass("d-flex")

        

    });
    //--------------


    /*-----add more achievement box*/
    $(".achiv-input").keydown(function (e) { 
        if(e.which == 13){
            let expInpCont=$(".experice-input:eq('0')").clone();
           
            $(".achievement-box").append(expInpCont);
         
        }
     
    });

   
    //--------------ADDING Image

});


