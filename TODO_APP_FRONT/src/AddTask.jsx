import { useState,useRef } from 'react'
import Task from './Task'


function AddTask({dispatch}) {

    //console.log(dispatch);
    

    
    return (
    <div id='DivAdd'>
        <div className='MainDivAdd'>

            

        </div>
        <div className='UtilDivAdd'>
            <button id='Cancel' onClick={(e)=>{
                e.stopPropagation();
                dispatch({type:"click_rem"});
            }}>Cancel</button>
        </div>
    </div>)

    }

export default AddTask