import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const initialState={
    todos:[],
    loading:false
};

const reducer=(state=initialState,action)=>{
    switch (action.type){
        case 'start':
            return {
                ...state,
                loading:true
            }
        case 'load':
            return {
                ...state,
                todos: action.payload,
                loading: false
            }
        case 'delete':
            return  {
                ...state,
                todos: state.todos.filter((todo)=>{
                    if(todo.id===action.payload){
                        return false
                    }

                    return true
                    }
                    )
            }
        case 'deleting':
            return  {
                ...state,
                todos: state.todos.map((todo)=>{
                        if(todo.id===action.payload){

                            return {
                                ...todo,

                                deleting:true

                            }
                        }
                        return todo
                    }

                )
            }
        case 'change':
            return  {
                ...state,
                todos: state.todos.map((todo)=>{
                        if(todo.id===action.id){

                            return {
                                ...todo,

                               title:action.payload,

                            }
                        }
                        return todo
                    }

                )
            }
        default:
            return state
    }

};
const store=createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

