let toDos = []; // TODO들을 저장할 배열 (변경가능 변수 let)

const paintToDO = () => {
    const saveToDos = localStorage.getItem("toDos");

    const toDoList = document.getElementById("todo-list");
    const doneList = document.getElementById("done-list");
    toDoList.innerHTML = "";
    doneList.innerHTML = "";

    if (saveToDos) {
        toDos = JSON.parse(saveToDos);

        toDos.forEach((saveToDos) => {
            const li = document.createElement("li");

            const span = document.createElement("span");
            span.className = "item-text";
            span.addEventListener("click", toggleItem);
            span.innerText = saveToDos.text;

            const button = document.createElement("button");
            button.className = "delete-button"
            button.innerText = "❌";
            button.addEventListener("click", deleteToDo);

            li.appendChild(span);
            li.appendChild(button);
            
            if (!saveToDos.isDone) {
                toDoList.appendChild(li);
            } else {
                doneList.appendChild(li);
            }
        });  
    }
    countItem(); //카운트 함수 실행
};

const handleToDoSubmit = () => {
    event.preventDefault;
    const newToDo = document.getElementById("input-text").value; // 새로운 변수에 value 복사
    toDOInput.value = ""; //입력하면 사라지도록
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
        isDone: false,
    };
    if (newToDoObj.text){
        toDos = [...toDos, newToDoObj];
        localStorage.setItem("toDos", JSON.stringify(toDos)); //문자열 형태로 바꾸어줌
        paintToDO();
    }
    
};

// 로컬 저장소에서 값 삭제해준다.
const deleteToDo = (e) => {
    const filteredList = toDos.filter(
        (newToDoObj) =>
            newToDoObj.text !== e.target.parentNode.innerText.slice(0, -2)
    );
    localStorage.setItem("toDos", JSON.stringify(filteredList)); // 로컬 저장소 갱신
    paintToDO();
};


// isDone을 토글해준다
const toggleToDo = (e) => {
    const itemObject = toDos.find(
      (newToDoObj) => newToDoObj.text === e.target.innerText
    );
    itemObject.isDone = !itemObject.isDone;
    localStorage.setItem("toDos", JSON.stringify(toDos));
    paintToDO();
};


// todo와 done의 수 세기
const countItem = () => {
    const todoCount = document.getElementById("todo-count");
    todoCount.innerText = ` (${toDos.filter((item) => !item.isDone).length})`;
  
    const doneCount = document.getElementById("done-count");
    doneCount.innerText = ` (${toDos.filter((item) => item.isDone).length})`;
};

window.onload = paintToDO();