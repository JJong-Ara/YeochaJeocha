//내 정기권 정보에서 즐겨찾기 버튼 함수
$(document).ready(function() {
    const bookmarkIcon = $('#bookmarkIcon');

    if (bookmarkIcon.length) { // 요소가 존재하는지 확인
        bookmarkIcon.on('click', function() {
            // 현재 이미지가 비어있는 별일 경우 채워진 별로 변경
            const currentSrc = $(this).attr('src'); // src 속성 가져오기

            if (currentSrc.includes('star_empty.svg')) {
                $(this).attr('src', './images/svg/star_fill.svg'); // 채워진 별로 변경
            } else {
                // 이미 채워진 별일 경우 다시 비어있는 별로 변경
                $(this).attr('src', './images/svg/star_empty.svg'); // 비어있는 별로 변경
            }
        });
    }
});

//내 정기권 정보에서 즐겨찾기 버튼 함수
$(document).ready(function() {
    const checkbox = $('.checkBox');

    if (checkbox.length) { // 요소가 존재하는지 확인
        checkbox.on('click', function() {
            // 현재 이미지가 비어있는 별일 경우 채워진 별로 변경
            const currentSrc = $(this).attr('src'); // src 속성 가져오기

            if (currentSrc.includes('Check_ring.svg')) {
                $(this).attr('src', './images/svg/Check_fill.svg'); // 채워진 별로 변경
            } else {
                // 이미 채워진 별일 경우 다시 비어있는 별로 변경
                $(this).attr('src', './images/svg/Check_ring.svg'); // 비어있는 별로 변경
            }
        });
    }
});


// 챗 아이콘을 눌렀을 때 챗 팝업창이 뜨고 챗 아이콘이 취소아이콘으로 변경되는 이벤트
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("aiAudioImage");
    const toggleIcon = document.getElementById("aiAudioImage");
    const popupSearch = document.getElementById("ai_audio_popup");
    const closeButton = document.getElementById("ai_close"); // close 버튼 선택
    let isOpen = false;

    toggleButton.addEventListener("click", function() {
        if (isOpen) {
            // 팝업 닫기
            popupSearch.style.display = "none";
            toggleIcon.src = "./images/svg/floatingAinormal.svg"; // 검색 아이콘으로 복구
        } else {
            // 팝업 열기
            popupSearch.style.display = "block";
            toggleIcon.src = "./images/svg/ai_click.svg"; // 닫기 아이콘으로 변경
        }
        isOpen = !isOpen; // 상태를 토글
    });

    // close 버튼을 눌렀을 때 팝업 닫기
    closeButton.addEventListener("click", function() {
        if (isOpen) {
            popupSearch.style.display = "none";
            toggleIcon.src = "./images/svg/floatingAinormal.svg"; // 검색 아이콘으로 복구
            isOpen = false; // 상태를 닫힌 상태로 설정
        }
    });

    // 팝업 외부를 클릭했을 때 팝업 닫기
    document.addEventListener("click", function(event) {
        const isClickInsidePopup = popupSearch.contains(event.target);
        const isClickOnButton = toggleButton.contains(event.target);

        if (!isClickInsidePopup && !isClickOnButton && isOpen) {
                popupSearch.style.display = "none";
                toggleIcon.src = "./images/svg/floatingAinormal.svg"; // 검색 아이콘으로 복구
                isOpen = false; // 상태를 닫힌 상태로 설정
            }
        });

    // 오디오 출력 스크립트

    let currentAudio = null; // 현재 재생 중인 오디오를 추적

    // data-audio 속성에 있는 오디오를 재생하는 함수
    function playAudio(event) {
        const audioSrc = event.currentTarget.getAttribute("data-audio");
        if (audioSrc) {
            stopAudio(); // 기존 오디오가 있으면 정지
            currentAudio = new Audio(audioSrc); // 새로운 오디오 객체 생성
            currentAudio.play();
        }
    }

    // 오디오를 정지하는 함수
    function stopAudio() {
        if (currentAudio) {
            currentAudio.pause(); // 오디오 일시 정지
            currentAudio.currentTime = 0; // 오디오 시간 초기화
            currentAudio = null; // 현재 오디오 초기화
        }
    }

    // AIvoice 클래스에 마우스 호버 시 data-audio를 재생하는 이벤트 추가
    const aiVoiceElement = document.querySelector(".AIvoice");
    if (aiVoiceElement) {
        aiVoiceElement.addEventListener("mouseenter", function(event) {
            const image = document.getElementById("aiAudioImage"); // 여기서 image를 정의합니다.
            if (!image.src.includes("floatingAiActive.svg")) {
                playAudio(event); // 이미지가 Active 상태가 아닐 때만 오디오 재생
            }
        });

        aiVoiceElement.addEventListener("mouseleave", function() {
            stopAudio();
        }); // 마우스가 떠나면 오디오 정지
    }


});