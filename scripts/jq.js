$(document).ready(function () {
    

    // to make copy of the box when its btn clicked
    $(document).on("click",function (e) {
            let btnClickedID=$(e.target).attr("id");
            let cloneBox=$(`.${btnClickedID}:eq('0')`).clone(true)
            cloneBox.find("input,textarea").val('')
            $(`#${btnClickedID + 'BTNContainer'}`).before(cloneBox)
        
    })


    //-------------- change resume box 

    $(".resume-pages-list li").click(function (e) { 
        let titleCliced=String($(this).index())

        $(".resume-pages-list li").removeClass("active-index")
        $(this).addClass("active-index");

       
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

    $("#downloadResumeBTN").click(function(){
        $("header").addClass("d-none")
        $("body").addClass("overflow-y-hidden");
        $("#resumeResult").removeClass("d-none")
    })


    $(document).on("click", function (e) {
    
        if($(e.target).attr("id") == "resumeResult"){
            $("header").removeClass("d-none")
            $("body").removeClass("overflow-y-hidden");
            $("#resumeResult").addClass("d-none")
        }
    });

});





