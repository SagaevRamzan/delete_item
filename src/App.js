import './actions'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadTodos, todoDelete} from "./actions";

function App() {
  const  todos=useSelector(state=>state.todos);
  const  loading=useSelector(state=>state.loading);
  const dispatch=useDispatch();


  useEffect(()=>{
    dispatch(loadTodos())
  },[]);
    const handleDelete=(id)=>{
        dispatch(todoDelete(id))
    }
  return (
      <div className="app">
        <div className="main_title">Список дел</div>
        <div className="title_cont zagolovok">
              <div className="todo_id">id</div>
              <div className="todo_title">title</div>
              <div className="todo_body">lable</div>
        </div>
        {
          (loading?'идет загрузка...':todos.map(todo=>{
            return (
                <div className="title_cont">
                      <div className="todo_id">{todo.id}</div>
                      <div className="todo_title">{todo.title}</div>
                      <img src={todo.url} className="pict"/>
                      <button className="but" onClick={()=>handleDelete(todo.id)}>delete</button>
                </div>
            )
          }))

        }

      </div>
  )
}

export default App;
