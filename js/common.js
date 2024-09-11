$(function(){
    // 사이드바 열기
    $('#main-toggle').on('click', function(event) {
        $('#siderBar').addClass('active');
        $('#main-toggle>p').hide(); // 사이드바가 열릴 때 p 태그 숨기기
        event.stopPropagation();
    });

    // 사이드바 닫기
    $('#side-closeToggle').on('click', function(event) {
        $('#siderBar').removeClass('active');
        $('#main-toggle>p').show(); // 사이드바가 닫힐 때 p 태그 다시 보이기
        event.stopPropagation();
    });

    // 바탕화면 클릭 시 사이드바 닫기
    $(document).on('click', function(event) {
        var sidebar = $('#siderBar');
        if (sidebar.hasClass('active') && !sidebar.is(event.target) && sidebar.has(event.target).length === 0) {
            sidebar.removeClass('active');
            $('#main-toggle>p').show(); // 사이드바가 닫힐 때 p 태그 다시 보이기
        }
    });

    $(function() {
        // 사이드메뉴 아코디언처리
        $('.accordion-toggle').on('click', function() {
            // 모든 열린 서브메뉴 닫기
            $('.subMenu').not($(this).next()).slideUp(500); 
            
            // 현재 클릭한 서브메뉴는 토글 처리 (열려 있으면 닫고, 닫혀 있으면 열기)
            $(this).next('.subMenu').slideToggle(500);
        });
    });
});


$(document).ready(function() {
    // 위로 이동 버튼 클릭 시 페이지 맨 위로 이동
    $("#topBtn").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, "smooth");
    });

    // 아래로 이동 버튼 클릭 시 페이지 맨 아래로 이동
    $("#bottomBtn").on("click", function() {
        $("html, body").animate({ scrollTop: $(document).height() }, "smooth");
    });
});