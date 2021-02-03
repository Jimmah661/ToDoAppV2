// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBDhGvWZs8ziH0sQogNaXFf-fX5IjdVE90",
  authDomain: "todolistv2-a6e94.firebaseapp.com",
  projectId: "todolistv2-a6e94",
  storageBucket: "todolistv2-a6e94.appspot.com",
  messagingSenderId: "691500239005",
  appId: "1:691500239005:web:6ea739701830d32bd56c74"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();


function setAttributes(element, attributes) {
  for(var key in attributes) {
    element.setAttribute(key, attributes[key])
  }
}

const container = document.querySelector("#todoList");

var submitButton = document.getElementById("submitButton");
var inputField = document.getElementById("todoInput");


const addTodo = () => {
  var currentToDos = [...document.querySelectorAll(".todo")]
  let newTodo = {
    todoContent: inputField.value,
    isCompleted: false,
    dateSubmitted: new Date(),
    position: currentToDos.length
  };
  database.collection('todo').add(newTodo);
  console.log('Todo Added');
  inputField.value = "";
}