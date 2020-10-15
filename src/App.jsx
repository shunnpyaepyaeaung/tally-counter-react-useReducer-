import React, { useReducer } from 'react';
import './styles.css'

function App() {
    function reducer(state, action){
        switch(action.type){
            case 'INCREASE':
                return state + action.payload
            case 'DECREASE':
                if(state - action.payload < 0){
                    return 0
                }else{
                    return state - action.payload
                }
            case 'RESET':
                return action.payload
            default:
                return state;
        }
    }
    const [count, dispatch] = useReducer(reducer,0)
    return (
        <div id="container">
            <h1 id="title">Tally Counter</h1>
            <h1 id="count">{count}</h1>
            <i 
            onClick={()=>{
                dispatch({
                    type: "RESET",
                    payload:0
                })
            }}
            class="fa fa-refresh" aria-hidden="true"></i>
            <div className="btn">
                <button
                onClick={()=>{
                    dispatch({
                        type: 'INCREASE',
                        payload: 1
                    })
                }}
                id="increase">+</button>
                <button 
                 onClick={()=>{
                    dispatch({
                        type: 'DECREASE',
                        payload: 1
                    })
                }}
                id="decrease">-</button>
            </div>

        </div>
    )
}
export default App
