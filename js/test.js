$(document).ready(function(){
   
   
   
   
   
   
   
    let hh =$(".slides div").height();
    let dir =-1




setInterval(function(){
    $(".slides").animate({"marginTop":hh*dir},9000,function(){
        $(".slides div").eq(0).appendTo(".slides");
        $(".slides").css({"marginTop": 0}) })
        ,3000})


























$("#gnb").on('mouseenter', function(){$(".banner span").removeClass("opn")}).on('mouseleave', function(){$(".banner span").addClass("opn")});
    $(".content2 li:nth-child(1) li:nth-child(1)").click(function(){
       $(".popup").removeClass("d-none");
    })
    $(".popup button").click(function(){$(".popup").addClass("d-none")});
})