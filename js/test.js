$(document).ready(function(){
   
   
   
   
   
   
   
    let hh =$(".slides div").width();
    let dir =-1;




// setInterval(function(){
//     $(".slides").animate({"marginLeft":hh*dir},500,function(){
//         $(".slides div").eq(0).appendTo(".slides");
//         $(".slides").css({"marginLeft": 0}) })
//         ,3000})

setInterval(function(){
    $(".slides").animate({"marginLeft":hh*dir},550,function(){
        $(".slides div").eq(0).appendTo(".slides");
        $(".slides").css({"marginLeft":0})
    }
)
},5500)
























$("#gnb").on('mouseenter', function(){$(".banner span").removeClass("opn")}).on('mouseleave', function(){$(".banner span").addClass("opn")});
    $(".content2 li:nth-child(1) li:nth-child(1)").click(function(){
       $(".popup").removeClass("d-none");
    })
    $(".popup button").click(function(){$(".popup").addClass("d-none")});
})