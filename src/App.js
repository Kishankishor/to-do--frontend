import { useEffect, useState } from "react";
import { Todo } from "./components/Todo";
import { addTodo, getAllToDo, updatetodo,deleteTodo } from "./utilis/HandleApi";

function App() {
  const [todo, settodo] = useState([]);
  const [text, settext] = useState("");
  const [isupdating, setisupdating] = useState(false);
  const [todoId, settodoID] = useState();

  useEffect(() => {
    getAllToDo(settodo);
  }, []);

  const updateMode=(_id , text)=>{
    setisupdating(true)
    settext(text)
    settodoID(_id)

  }
  return (
    <div className="App">
      <div className="container">
        <h1>To-Do App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="ADD TODOS"
            value={text}
            onChange={(e) =>
               settext(e.target.value)
            }
          />
          <div className="add" onClick={() =>isupdating ? updatetodo(todoId, text,settext,settodo,setisupdating) : addTodo(text, settext, settodo)} >
            {isupdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {todo.map((item) => {
            return <Todo
             key={item._id}
              text={item.text}
               updateMode={()=> updateMode(item._id, item.text)}
                deleteTodo={()=>deleteTodo(item._id, settodo )}
                 />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
