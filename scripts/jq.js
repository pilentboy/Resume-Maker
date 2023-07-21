$(document).ready(function () {
    

    // FUNCTIONS FOR THE BTNS ARE FOR MAKING A COPY OF THEIR ABOVE INPUTS
    //--------------ADDING A NEW SOCIAL MEDIA BOX 
    $("#socialParentBTN").click(function (e) { 
      
        let socialMediaBox=$("#soialMediaCouple").clone();

        $("#addingSocialParent").before(socialMediaBox);
        
    });
    //--------------


    //--------------ADDING A NEW EduExperience
        $("#addingEduExpParentBTN").click(function (e) { 
            e.preventDefault();
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

    // END

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
    $(document).on("keydown",function (e) {
        
        if($(e.target).hasClass("form-control") && e.which == 13){      
            let expInpCont=$(".experice-container:eq('0')").clone(); 
            $(".achievement-box").append(expInpCont); 
        }

      })
  

    
    /* Remove experice-container*/

    $(document).on("click",function(e){
       
        if($(e.target).hasClass("del-exper-input-btn")){
          if($(e.target).parent().index() > 2){
            $(e.target).parent().remove()
          }
        }
    })

   //----------end

    //-------------- ADDING Image

    $("#selectImgBTN").change(function(){
        if (typeof (FileReader) != "undefined") {

            var reader = new FileReader();
            $(".user-img i").remove()
            $(".user-img img").remove()
            reader.onload = function (e) {

                $("<img />", {
                    "src": e.target.result
                }).appendTo($(".user-img"));

            }
            
            reader.readAsDataURL($(this)[0].files[0]);
        }
    })
    //-------------- END ADDING IMAGE 

    // ul links
    // add position sticky to form ul
    // $(window).scroll(function () { 
    //     var offsetTop = $(window).scrollTop();
       
    //     if (offsetTop >= 60){
    //         $(".resume-pages-list").addClass("position-sticky top-0 index-top")
    //     }else{
    //         $(".resume-pages-list").removeClass("position-sticky top-0 index-top")
    //     }
 
    // });

    // end


    $("#formInputsForm").submit(function (e) { 
        e.preventDefault();
    });

  

    
    /* display star box*/
    $("#leaveingCommentBTN").click(function (e) { 
        $("body").addClass("overflow-y-hidden");
        $("#comment-box").removeClass("d-none");
        $("#comment-box").addClass("d-flex");

    });

    $("body").on("click",{value:"mahdi",id:"myid"},function(e){
        let targetID=$(e.target).attr("id");
        if(targetID == "comment-box" || targetID == "closeStarBox"  ){
            $("body").removeClass("overflow-y-hidden");
            $("#comment-box").removeClass("d-flex");
            $("#comment-box").addClass("d-none");
         
        }
    })
    /* end */

    /* star-row hover */
    $(".stars-row i").hover(function (e) {
        let iHoverIndex=$(e.target).index()
    

        for(i=0; i <= iHoverIndex; i++){
            $(`.stars-row i:eq(${String(i)})`).removeClass("bi-star")
            $(`.stars-row i:eq(${String(i)})`).addClass("bi-star-fill")

        }
    }, function (e) {
            $(".stars-row i").removeClass("bi-star-fill")
            $(".stars-row i").addClass("bi-star");
        }
    );

    // checking the star index clicked by user
    $(".stars-row i").click(function(){
        let liClickedIndex=$(this).index()

        // adding/removing bi-star-fill based on the i index cliced
        $(".stars-row i").removeClass("bi-star-fill")
        $(".stars-row i").addClass("bi-star")
        $(".stars-row i").unbind('mouseleave mouseenter')
        
        for(i=0; i <= liClickedIndex; i++){
            $(`.stars-row i:eq(${i})`).removeClass("bi-star")
            $(`.stars-row i:eq(${i})`).addClass("bi-star-fill")
        }

        // end adding/remove bi-star-fill 

        let iLength=$(".stars-row i").length / 2 -1
        $(".indicators").removeClass("d-none")
        $(".indicators").addClass("d-flex")

        if(liClickedIndex <= 1){
            $(".indicators-title").html("نقاط ضعف رزومه ساز چیست؟")
            $(".indicators-title").removeClass("text-green")
            $(".indicators-title").addClass("text-danger")
            
        }else if (liClickedIndex == iLength.toFixed(0)) {
            $(".indicators-title").html("")
            $(".indicators").removeClass("d-flex")
            $(".indicators").addClass("d-none")

        } else {    
            $(".indicators-title").html("نقاط قوت رزومه ساز چیست؟")
            $(".indicators-title").removeClass("text-danger")
            $(".indicators-title").addClass("text-success")
        }   
    })




    // control the resume progress
    let progress=0;
    let selectedInput;
    $("input,select,textarea").change(function () { 
        if($(this).val() != undefined){
            selectedInput=$(this).attr("used");
    
            if(selectedInput == undefined){
                progress+=2;
                $(this).attr("used", "true");
                $("#user-resume-progress").html("%" + progress )
            }
           
        }
       
    });

    // decreasing progress if any cliced input changed to ""
    $("input,select,textarea").change(function(){
        selectedInput=$(this).attr("used")
        if(selectedInput != undefined && $(this).val() == ""){
            $(this).removeAttr("used");
            progress-=2;
            $("#user-resume-progress").html("%" + progress )
        }
    })



    /* download resume*/

    
    $("#resumeResult").hide(0)
    

    $("#downloadResumeBTN").click(function(){
        $("body").addClass("overflow-y-hidden");
        $("#resumeResult").show(500)
    })


    $(document).on("click", function (e) {
    
        if($(e.target).attr("id") == "resumeResult"){
            $("body").removeClass("overflow-y-hidden");
            $("#resumeResult").hide(500)
        }
    });

});





