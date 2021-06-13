import './actions'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {loadTodos, todoDelete, todoChange} from "./actions";
import ReactLoading from 'react-loading';
function App() {

    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();
    const [inp_chenge_title, setInp_chenge_title] = useState("")

    const chenge_title = (e) => {

       setInp_chenge_title(e.target.value)
    }
    useEffect(() => {
        dispatch(loadTodos())
    }, []);
    const handleDelete = (id) => {
        dispatch(todoDelete(id))
    }
    const handleChange = (id) => {
    let x=inp_chenge_title;
    if (inp_chenge_title==""){
        return alert("Строка пустая!!! Введите текст.")
    }
        setInp_chenge_title("");

        dispatch(todoChange(id,x));



    }
    return (
        <div className="app">
            <div className="main_title">Список дел</div>
            <div className="title_cont ">
                <input  className="inp_chenge_title" value={inp_chenge_title} onChange={chenge_title}/>
                <div className="text_change_zag"> Введите текст для изменения <b>title</b> и нажмите <b>change</b></div>
            </div>
            <div className="title_cont zagolovok">
                <div className="todo_id">id</div>
                <div className="todo_title">title</div>
                <div className="todo_body">lable</div>
            </div>
            {
                (loading ? 'идет загрузка...' : todos.map(todo => {
                    return (
                        <div className="title_cont">
                            <div className="todo_id">{todo.id}</div>
                            <div className="todo_title">{todo.title}</div>
                            <button className="chenge_title" onClick={() => handleChange(todo.id)}>chenge</button>
                            <img src={todo.url} className="pict"/>
                            <>
                                {todo.deleting?
                                    <ReactLoading type="spin" color="#001faf"  height={60} width={60} />:
                                    <button className="but" onClick={
                                        () => handleDelete(todo.id)}>
                                        delete
                                    </button>
                                }

                            </>
                        </div>
                    )
                }))

            }

        </div>
    )

}
export default App;