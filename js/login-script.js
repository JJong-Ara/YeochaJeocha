// 1. 카카오 SDK 초기화 (JavaScript 키 입력)
Kakao.init('YOUR_KAKAO_JAVASCRIPT_KEY'); // YOUR_KAKAO_JAVASCRIPT_KEY를 발급받은 JavaScript 키로 대체하세요.

// 2. 카카오톡 로그인 버튼 클릭 시 팝업 창 열기
document.getElementById('kakao-login-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=YOUR_KAKAO_JAVASCRIPT_KEY&redirect_uri=YOUR_KAKAO_REDIRECT_URI&response_type=code`;

    window.open(kakaoLoginUrl, 'kakaoLogin', 'width=500,height=700');
});