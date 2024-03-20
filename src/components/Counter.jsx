import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {

  const [range,setRange] = useState("")

    /* hook - useDispatch() */
    const dispatch = useDispatch()
    /* useSelector - to access state in store */
    const count = useSelector((state)=>state.counter.value)

  return (
    <div className='d-flex justify-content-center align-items-center w-100' style={{height:'100vh'}}>
        <div  className='shadow border rounded border-dark p-4'>
            <h2 className='text-center text-success '>Counter Application</h2>
            <h1 className='text-center mt-4' style={{fontSize:'100px'}}>{count}</h1>
            <div className='d-flex  mt-5'>
                <button className='btn btn-success' onClick={()=>dispatch(increment(Number(range)))}>Increment</button>
                <button className='btn btn-danger ms-3' onClick={()=>dispatch(reset())}>Reset</button>
                <button className='btn btn-warning ms-3' onClick={()=>dispatch(decrement(Number(range)))}>Decrement</button>
            </div>
            <div>
              <input type="text" placeholder='range' className='form-control mt-5' onChange={(e)=>setRange(e.target.value)} />
            </div>
        </div>
    </div>
  )
}

export default Counter