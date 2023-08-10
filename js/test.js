$(document).ready(function(){let count=0; setInterval(function(){count++; count %=$(".banner div").length; $(".banner div").eq(count).addClass("op").siblings().removeClass("op")},3000);
$("#gnb").on('mouseenter', function(){$(".banner span").removeClass("opn")}).on('mouseleave', function(){$(".banner span").addClass("opn")});
    $(".content2 li:nth-child(1) li:nth-child(1)").click(function(){
       $(".popup").removeClass("d-none");
    })
    $(".popup button").click(function(){$(".popup").addClass("d-none")});
})