[모던 자바스크립트 6장]

<웹 브라우저에서의 입출력>
(6-0)
일반적인 프로그램(사용자로부터 입력을 받고, 모니터와 프린터에 출력해줌)과 달리, 자바 스크립트에서는 입출력 형식이 규정되어있지 않아서, 각각의 실행 환경에서 구현해 주어야 한다는 차이점이 있다.

웹 브라우저에서 입출력하는 방법을 알아보고, 사용자 인터페이스에서 HTML과 관련된 요소를 읽고 쓰는 방법도 공부한다.


(6-1)
대화상자 : 웹 브라우저의 전역 객체(Window)에 있는 대화상자를 표시하기 위한 메서드 3개에 대해 알아본다. 대화상자가 떠 있는 동안에는, 다른작업을 조작할 수 없다. 이를 모달(modal)창 이라고 한다.

1. alert(경고 대화상자)
: 주로 경고 내용(문자열)을 인수로 받고, '확인'버튼을 누르면 대화상자가 사라진다.
2. prompt(입력 대화상자)
: 인수로 입력을 보조하는 (사용자에게 입력을 받도록 유도하는) 문자열을 받고, 사용자에게 입력받은 문자열이 이 prompt 문자열의 반환값이 된다.
3. confirm(확인 대화상자)
: '확인'버튼과 '취소'버튼이 있는 대화상자를 표시한다. 인수로는 메시지를 표현하는 문자열을 받는다. 이 대화상자는 논리값을 반환한다. 사용자가 선택하는 버튼에 따라, '확인'이면 true, '취소'면 false가 반환된다.


(6-2)
콘솔(console) : 