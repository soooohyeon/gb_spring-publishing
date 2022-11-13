/*
* myPage/program.html
* */

let count = 0;

/* 마우스 오버시 이미지 확대/축소 애니메이션 */
$(".myProgram").hover(function() {
    let $image = $(this).children().find('img.program-img');

    $image.css("transform", "scale(1.1)");
    $image.css("zIndex", 1);
    $image.css("transition", "all 0.2s");
}, function(){
    let $image = $(this).children().find('img.program-img');

    $image.css("transform", "scale(1)");
    $image.css("zIndex", 0);
    $image.css("transition", "all 0.2s");
});

/* 클릭 시 삭제 버튼 */
$("img.l-menuBtn").on("click", function() {
    if(!($(this).hasClass("select-c"))){
        $("img.l-menuBtn").removeClass("select-c")
        $(this).addClass("select-c")
        $("img.l-menuBtn").prev().hide();
        $(this).prev().show();

    } else if($(this).hasClass("select-c")){
        $(this).removeClass("select-c");
        $(this).prev().hide();
    }
});