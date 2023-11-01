import axios from "axios";

const baseurl = "https://todo-backend-app-5uhp.onrender.com";

const getAllToDo = (setTodo) => {
  axios.get(baseurl).then((data) => {
    console.log(data.data);
    setTodo(data.data);
  });
};
const addTodo = (text, settext, setTodo) => {
  axios.post(`${baseurl}/save`, { text }).then((data) => {
    console.log(data);
    settext("");
    getAllToDo(setTodo);
  });
};

const updatetodo = (todoId, text, settext, setTodo,setIsupdateing) => {
  axios.put(`${baseurl}/update`, { _id:todoId , text }).then((data) => {
    console.log(data);
    settext("");
    setIsupdateing(false)
    getAllToDo(setTodo);
  }).catch((err)=>console.log(err))
};
const deleteTodo = (_id,setTodo) => {
    console.log(_id)
    axios.post(`${baseurl}/delete`,{_id}).then((data) => {
      console.log(data);
      
      
      getAllToDo(setTodo);
    }).catch((err)=>console.log(err))
}


export { getAllToDo, addTodo,updatetodo , deleteTodo};
