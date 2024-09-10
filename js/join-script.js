$(function(){

  /* ------------------------------------
          체크박스 관련
      ------------------------------------ */
  
  // 체크박스 이미지 경로 (체크됨과 안됨 상태 이미지)
  const checkedImage = './images/svg/check_black_fill.svg';  // 체크된 이미지
  const uncheckedImage = './images/svg/check_black.svg';  // 체크되지 않은 이미지
  
  // 각 체크박스에 대한 변수 할당
  const checkbox1 = document.getElementById('checkbox1');
  const checkbox2 = document.getElementById('checkbox2');
  const checkbox3 = document.getElementById('checkbox3');
  const checkbox4 = document.getElementById('checkbox4');
  
  
  // 체크박스 이미지 상태 토글 함수
  function toggleCheckbox(checkbox) {
    const isChecked = checkbox.getAttribute('data-checked') === 'true';
    if (isChecked) {
      checkbox.src = uncheckedImage;
      checkbox.setAttribute('data-checked', 'false');
    } else {
      checkbox.src = checkedImage;
      checkbox.setAttribute('data-checked', 'true');
    }
    validateCheckboxes();  // 체크박스 상태가 바뀔 때 버튼 상태 확인
  }
  
  // 체크박스 1, 2, 3 클릭 시 상태 변경
  checkbox1.addEventListener('click', function() {
    toggleCheckbox(checkbox1);
    checkAllThree();  // 필수 항목 확인 후 4번째 체크박스 처리
  });
  checkbox2.addEventListener('click', function() {
    toggleCheckbox(checkbox2);
    checkAllThree();
  });
  checkbox3.addEventListener('click', function() {
    toggleCheckbox(checkbox3);
    checkAllThree();
  });
  
  // 체크박스 4 클릭 시 체크박스 1, 2, 3의 상태를 모두 변경
  checkbox4.addEventListener('click', function() {
    toggleCheckbox(checkbox4);
    const isChecked = checkbox4.getAttribute('data-checked') === 'true';
    toggleAllThree(isChecked);
  });
  
  // 체크박스 1, 2, 3 모두 선택 시 체크박스 4 자동 체크
  function checkAllThree() {
    if (checkbox1.getAttribute('data-checked') === 'true' &&
        checkbox2.getAttribute('data-checked') === 'true' &&
        checkbox3.getAttribute('data-checked') === 'true') {
      checkbox4.src = checkedImage;
      checkbox4.setAttribute('data-checked', 'true');
    } else {
      checkbox4.src = uncheckedImage;
      checkbox4.setAttribute('data-checked', 'false');
    }
  }
  
  // 체크박스 4가 클릭되면 1, 2, 3의 상태를 모두 변경
  function toggleAllThree(isChecked) {
    const newImage = isChecked ? checkedImage : uncheckedImage;
    checkbox1.src = newImage;
    checkbox2.src = newImage;
    checkbox3.src = newImage;
    checkbox1.setAttribute('data-checked', isChecked);
    checkbox2.setAttribute('data-checked', isChecked);
    checkbox3.setAttribute('data-checked', isChecked);
  }
  
  // 체크박스 상태에 따라 추가적인 동작을 정의할 수 있습니다 (예: 다음 버튼 활성화 등)
  function validateCheckboxes() {
    // 필요 시, 체크박스 상태에 따라 추가 로직 작성
  }
  
  
  const checkedImgSrc = './images/svg/check_black_fill.svg';  // 체크된 이미지
    const uncheckedImgSrc = './images/svg/check_black.svg';  // 체크되지 않은 이미지
  
  // 체크박스5 클릭 시 상태 변경 및 체크박스6 해제
  function toggleCheckbox5() {
      const checkbox5 = document.getElementById('checkbox5');
      const checkbox6 = document.getElementById('checkbox6');
      const isChecked5 = checkbox5.getAttribute('data-checked') === 'true';
  
      if (isChecked5) {
        checkbox5.src = uncheckedImgSrc;
        checkbox5.setAttribute('data-checked', 'false');
      } else {
        checkbox5.src = checkedImgSrc;
        checkbox5.setAttribute('data-checked', 'true');
  
        // 체크박스6 해제
        checkbox6.src = uncheckedImgSrc;
        checkbox6.setAttribute('data-checked', 'false');
      }
    }
  
  // 체크박스6 클릭 시 상태 변경 및 체크박스5 해제
  function toggleCheckbox6() {
      const isChecked6 = checkbox6.getAttribute('data-checked') === 'true';
  
      if (isChecked6) {
        checkbox6.src = uncheckedImgSrc;
        checkbox6.setAttribute('data-checked', 'false');
      } else {
        checkbox6.src = checkedImgSrc;
        checkbox6.setAttribute('data-checked', 'true');
  
        // 체크박스5 해제
        checkbox5.src = uncheckedImgSrc;
        checkbox5.setAttribute('data-checked', 'false');
      }
  }
  
  // 체크박스5 클릭 이벤트
  checkbox5.addEventListener('click', toggleCheckbox5);
  
  // 체크박스6 클릭 이벤트
  checkbox6.addEventListener('click', toggleCheckbox6);
  
  $('.next').on('click', function () {
      // 각 체크박스의 상태를 확인
      const isChecked1 = checkbox1.getAttribute('data-checked') === 'true';
      const isChecked2 = checkbox2.getAttribute('data-checked') === 'true';
      const isChecked3 = checkbox3.getAttribute('data-checked') === 'true';
      const isChecked4 = checkbox4.getAttribute('data-checked') === 'true';
      const isChecked5 = checkbox5.getAttribute('data-checked') === 'true';
  
      // 5개의 체크박스 중 하나라도 체크되지 않은 경우 경고창을 띄움
      if (!isChecked1 || !isChecked2 || !isChecked3 || !isChecked4 || !isChecked5) {
        alert('필수 항목에 모두 동의해 주세요.');
      } else {
        // 모든 체크박스가 체크된 경우 다음 화면으로 이동
        window.location.href = checkbox; // 'nextPage.html'은 다음 페이지의 경로로 변경
      }
    });
  
  });
  
  
  /* -------------------------------------------
          회원가입 과정 넘어가기
      ------------------------------------------- */
     
  $(document).ready(function () {
      let currentBox = 0; // 현재 박스 인덱스 (0부터 시작)
      const boxes = $('.join1, .join2, .join3, .join4'); // 모든 박스 가져오기
      const indicators = $('.join_process>div'); // 인디케이터 가져오기
      const totalBoxes = boxes.length; // 총 박스 개수
    
      // 처음 박스를 보여줌
      showBox(currentBox);
    
      // 이전 버튼 클릭 이벤트
      $('.prev').on('click', function () {
        if (currentBox === 0) {
          // 첫 번째 박스에서 이전 버튼을 누르면 로그인 페이지로 이동
          window.location.href = 'login.html';
        } else if (currentBox === totalBoxes - 1) {
          // 마지막 박스에서 이전 버튼을 누르면 영상 팝업
          showPopup();
        } else {
          currentBox--;
          showBox(currentBox);
        }
      });
    
      // 다음 버튼 클릭 이벤트
      $('.next').on('click', function () {
        if (currentBox === totalBoxes - 1) {
          // 마지막 박스에서 다음 버튼을 누르면 로그인 페이지로 이동
          window.location.href = 'login.html';
        } else {
          currentBox++;
          showBox(currentBox);
        }
      });
    
      // 박스를 보여주고 인디케이터를 업데이트하는 함수
      function showBox(index) {
        boxes.removeClass('active'); // 모든 박스 숨기기
        $(boxes[index]).addClass('active'); // 현재 박스만 보이게 함
        indicators.removeClass('active'); // 모든 인디케이터 비활성화
        $(indicators[index]).addClass('active'); // 현재 박스에 해당하는 인디케이터 활성화
      }
    
      // 팝업을 보여주는 함수
      function showPopup() {
        $('#videoPopup').css('display', 'block');
      }
    
      // 팝업 닫기 버튼
      $('#closePopup').on('click', function () {
        $('#videoPopup').css('display', 'none');
      });
    });