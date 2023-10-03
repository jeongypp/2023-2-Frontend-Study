const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const doneList = document.getElementById("done-list");

const TODOS_KEY = "todos"
let toDos = []; // TODO들을 저장할 배열

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    paintToDO();
}

function handleToDoSubmit(event){
    event.preventDefault;
    const newToDo =toDoInput.value; // 새로운 변수에 value 복사
    toDOInput.value = ""; //입력하면 사라지도록
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
        isDone: false,
    };
    toDos.push(newToDoObj);
    paintToDO(newToDoObj);
    saveToDos();
}

// isDone을 토글해준다
const toggleItem = (e) => {
    const itemObject = toDos.find(
      (inputObject) => inputObject.text === e.target.innerText
    );
    itemObject.isDone = !itemObject.isDone;
    localStorage.setItem("toDos", JSON.stringify(toDos));
    paintToDO();
  };

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
}

function paintToDO(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null){
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDO);
}

// todo와 done의 수 세기
const countItem = () => {
    const todoCount = document.getElementById("todo-count");
    todoCount.innerText = ` (${itemList.filter((item) => !item.isDone).length})`;
  
    const doneCount = document.getElementById("done-count");
    doneCount.innerText = ` (${itemList.filter((item) => item.isDone).length})`;
  };

  ----------------------------------------------------------
  위 소스코드는 이번 3주차 스터디를 학습하며 vanilla js를 이용하여 직접 만들어본 todo-list 코드의 시행착오이다. 하지만 과제 명세에 따라 완벽하게 구현하는것이 쉽지 않았고, 결국 개발자 도구를 참고하되 변수명 등을 최대한 내가 익숙한것 위주로 바꾸어 만들어보게 되었다.

  이번주 학습을 하며 내가 느끼고 학습한 바는 다음과 같다.

  1. html과 js를 연결하여 다양한 사용자 경험을 다룰 수 있게 되었다. 
  id를 통해 js에서 html의 노드들을 참조하는 방식을 처음 경험하였는데, 매우 깔끔하게 알아보기 쉽게 되어 있어서 처음 학습함에도 불구하고 재미있고 이해가 쉬웠다.

  2. event 다루기.
  사용자가 화면을 클릭하고, 문장을 입력하고, 엔터키를 누르고, 심지어는 wifi에 연결되어 있는지도 실시간으로 발생하는 event를 통하여, EventListener 메서드를 이용한 js와의 다양한 상호작용이 매우 신기하였고, 다양한 event 들이 있으며 todo-list말고도 다른 웹을 구현할 때 중요한 요소들이 많음을 알게 되었다.

  3. 웹 새로고침 시 이전 상황 저장되도록 하기
  TODO(할 일)들을 저장하는 변수의 형태로 처음에는 배열을 생각했었다. 문자열 형태의 할 일들을 배열에 각 요소에 저장하면 될 것 같다고 생각했었다. 그렇지만, 배열의 각 요소에 접근하여야할 상황(TODO list의 삭제와 토글)이 있었기에, 할일의 이름이 중복된다면 어느 요소에 어떻게 접근해야 할 지 알기가 힘들다는 문제에 봉착했다. 이에따라, TODO들을 저장하는 자료구조의 형태를 객체로 바꾸어, 현재 시간을 반영하는 id를 각각 할당해준다면, 리스트의 각 요소에 접근할때 요소의 문자열 이름 text가 아닌, 난수로 배타적으로 생성된 id로 접근 할 수 있기에, 중복되는 할 일TODO의 이름 문제를 해결할 수 있었다.
  이처럼 주어진 문제상황을 해결할 때 필요한 자료구조가 무엇인지 판단하고 수정하는 과정을 학습 할 수 있었다.