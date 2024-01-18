import { useState ,useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Task from './Task'
import AddTask from './AddTask'
import './App.css'



function reducer(state,action) {
    const newState = {...state};


    //console.log(action);
    if (action.type == "click_rem") {
      
      
      newState.showAddTask = false;
      
    }
    
    if (action.type == "click_add") {

      newState.showAddTask = true;
      
      
    }


    return newState;

  
}

function App() {
  //const [count, setCount] = useState(0)



  const [listTask,setlistTask] = useState([])
  const [state,dispatch] = useReducer(reducer,{showAddTask:false})




  const handleClick = (e) =>{
    setshowAddTask(true)
  }
  return (
  <>
  <div className='Container'>
    <nav>
      <button id='Login'><p>Login</p></button>
    </nav>
    <div className='Main Center' onClick={()=> dispatch({type:"click_rem"})}>
        <h1>
          TASKS
        </h1>
        <div className='Tasklist'>
          {/* <div >
            <p>D1</p>
          </div>
          <div >
            <p>D2</p>
          </div> */}

          {listTask.map((v,id)=>{
            <Task/>
          })}

          { state.showAddTask ? <AddTask dispatch={dispatch} /> : <></>}
          <div id='Utils'>
            <button onClick={(e)=>{e.stopPropagation(); dispatch({type:"click_add"})}} className='AddButton Center'>
              <p>+</p>
            </button>
          </div>
        </div>
      </div>
  </div>
  </>
  )
}

export default App
