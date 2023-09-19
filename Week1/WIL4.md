[모던 자바스크립트 4장]

<객체와 배열, 함수의 기초>
(4-0)
자바 스크립트에서는 객체와 함수가 중요한 역할을 한다.

(4-1) 프로퍼티: 
객체의 데이터 하나(이름과 값의 쌍)

var card = { suit :"하트", rank = “A”};

suit,rank :프로퍼티(문자열로 입력 가능 (ex)"suit")

프로퍼티의 추가와 삭제:

추가-ex)
card.value =14;

console.log(card); //Object{suit:“하트”,  rank:”A” , value: 14}

삭제-ex)

delete card.rank;

(4-2) 함수 :
인수:함수 입력값
반환값:함수 출력값

전역변수:함수 전체 내에 사용되는 인수
*변수를 선언하지 않으면 전역변수로 사용됨
-> a=“local”;
a는 함수 전체에서 호출 가능

지역변수:특정 함수 내에 사용되는 인수


-블록 유효 범위:

let문: 블록 유효 범위를 갖는 지역변수 선언.

ex)
let a;

let a,b,c;

let x=5, y=7;

let으로 선언한 변수의 유효범위:

1 let x= " out x";
2 {
3 let x = "in x";
4 let y = " in y";
5 console.log(x); // inner x
6 console.log(y); // inner y
7 }
8 console.log(x); // outer x
9 console.log(y); // ReferenceError: y in not defined

3-6:안쪽x,y의 유효범위
1,8,9:바깥쪽 x의 유효범위

const선언자:

블록 유효범위를 가지며, 한 번만 힐당할수 있는 변수 선언.
반드시 초기화해야함.

cost문으로 선언한 상수 값은 수정 불가.
상수 값이 객체 혹 배열일 경우 프로퍼티 수정 가능.

(4-3) 생성자 :

생성자라는 함수를 통해 객체를 만든다.

functuin Card(suit,rank){
 
             this.suit=suit;
             this.rank=rank;
        }

var card = new Card("하트","A"); // "new"를 사용해 객체 생성

->suit프로퍼티에는 "하트", rank 프로퍼티에는 "A" 라는 값이 저장된 객체 생성
 이 객체의 참조가 변수 card에 할당.

console.log(card); // Card{suit: "하트", rank: "a"}


(4-4) 내장객체 :

처음부터 사용할 수 있는 내장된 객체를 말한다.


(4-5) 배열 :

배열로 리터럴 생성:

var evens = [2,4,6,8];

[..] 부분이 배열 리터럴, 배열 값 하나가 배열 요소임.

왼쪽부터 순서대로 0,1,2,.. 번의 번호(인덱스)가 매겨짐.

배열의 length 프로퍼티: 배열 요소의 최대 인덱스 값+1

length 프로퍼티 값: 배열길이

Array 생성자로 배열 생성

ex) 
var evens new Array(2,4,6);

배열 요소의 참조:

대괄호([])연산자를 사용해 읽거나 쓰기 가능.
ex) even[2] // ->6 (인덱스가 2인 요소)


배열 요소 추가와 삭제:

var A=["a","b","c"];
A[3]=["d"];
console.log(A); // ["a","b","c","d"];

push메서드 사용:

var A = ["a","b"];
A.push("c");
console.log(A); // ["a","b","c"]
