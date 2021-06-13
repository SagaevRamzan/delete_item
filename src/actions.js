import './App'



export const loadTodos=()=>{

    return function (dispatch){
        dispatch({
            type:"start"
        })
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response=>response.json())
            .then(json=>{
                dispatch({
                    type:'load',
                    payload:json
                })
            })
    }
}
export const todoDelete=(id)=>{
    return function (dispatch){
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(response=>response.json())
            .then((json)=>{
                dispatch({
                    type:"delete",
                    payload:id,


                })
            })
    }
}
export const todoChange=(id,x)=>{

    return function (dispatch){
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(response=>response.json())
            .then((json)=>{
                dispatch({
                    type:"change",
                    id:id,

                    payload:x
                    })
            })
    }
}