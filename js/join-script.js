$(document).ready(function () {
  let currentBox = 0;
  const boxes = $('.join1, .join2, .join3, .join4'); // 각 div 섹션
  const indicators = $('.join_process>div'); // 인디케이터
  const totalBoxes = boxes.length;

  // 처음 박스를 보여줌
  showBox(currentBox);

  // 다음 버튼 클릭 이벤트
  $('.next').on('click', function () {
      if (currentBox === 0) {
          // 첫 번째 섹션에서 체크박스 조건 확인
          const isChecked1 = $('#checkbox1').data('checked') === true;
          const isChecked2 = $('#checkbox2').data('checked') === true;
          const isChecked3 = $('#checkbox3').data('checked') === true;
          const isChecked4 = $('#checkbox4').data('checked') === true;
          const isChecked5 = $('#checkbox5').data('checked') === true;
          const isChecked6 = $('#checkbox6').data('checked') === true;

          // 1, 2, 3, 4번은 필수 체크
          if (!isChecked1 || !isChecked2 || !isChecked3 || !isChecked4) {
              alert('필수 항목에 모두 동의해 주세요.');
              return; // 체크박스 미완료 시 다음 섹션으로 넘어가지 않음
          }

          // 5번과 6번 중 하나는 반드시 체크되어야 함
        if (!isChecked5 && !isChecked6) {
          alert('마케팅 활용에 대한 동의 여부를 선택해 주세요.');
          return; // 둘 중 하나가 체크되지 않으면 다음 섹션으로 넘어가지 않음
      }
      }

      if (currentBox < totalBoxes - 1) {
          currentBox++;
          showBox(currentBox);
      } else if (currentBox === totalBoxes - 1) {
          // 마지막 섹션에서는 로그인 페이지로 이동
          window.location.href = 'login.html';
      }
  });

  // 이전 버튼 클릭 이벤트
  $('.prev').on('click', function () {
      if (currentBox > 0) {
          currentBox--;
          showBox(currentBox);
      }
  });

  // 박스를 보여주고 인디케이터 업데이트
  function showBox(index) {
      boxes.hide(); // 모든 박스 숨기기
      $(boxes[index]).show(); // 현재 박스만 보이게
      indicators.removeClass('active'); // 모든 인디케이터 비활성화
      $(indicators[index]).addClass('active'); // 현재 인디케이터만 활성화
  }

  // 체크박스 클릭 이벤트
  $('.checkboxImg').on('click', function () {
      const isChecked = $(this).data('checked');
      $(this).data('checked', !isChecked); // 상태 토글
      $(this).attr('src', isChecked ? './images/svg/check_black.svg' : './images/svg/check_black_fill.svg');

      // 1, 2, 3번 체크가 되면 4번 체크
      if ($('#checkbox1').data('checked') === true &&
          $('#checkbox2').data('checked') === true &&
          $('#checkbox3').data('checked') === true) {
          $('#checkbox4').data('checked', true).attr('src', './images/svg/check_black_fill.svg');
      }

      // 4번 체크하면 1, 2, 3번 모두 체크
      if ($('#checkbox4').data('checked') === true) {
          $('#checkbox1, #checkbox2, #checkbox3').data('checked', true).attr('src', './images/svg/check_black_fill.svg');
      }

      // 5번과 6번은 동시에 하나만 체크 가능
      if ($(this).attr('id') === 'checkbox5') {
          $('#checkbox6').data('checked', false).attr('src', './images/svg/check_black.svg');
      } else if ($(this).attr('id') === 'checkbox6') {
          $('#checkbox5').data('checked', false).attr('src', './images/svg/check_black.svg');
      }
  });
});