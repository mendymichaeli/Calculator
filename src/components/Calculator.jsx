import React, { useState } from 'react'

export default function Calculator() {

    const [val, setVal] = useState('');
   
    // delete the last letter of the val (button of <=)
    const backspace=()=>{
        try{
            setVal(val.slice(0,-1))
        }catch(erorr){
            setTimeout(() => {
                setVal(' ')
            }, 2000);
            setVal('Error ')
        }
    }

    //calculate the value of the val (button of =)
    const calValue =()=>{
        try{
            setVal(eval(val))
        }catch(erorr){
            setTimeout(() => {
                setVal(' ')
            }, 2000);
            setVal('Error ')
        }
    }
    return (
        <div className='container'>
             <hr></hr>
            <div className="row justify-content-center">
                <div class="card border-dark mb-3 col-md-3 ">
                    {/* INPUT FIELD */}
                    <div class="card-header mt-2 bg-light p-2 shadow text-center">
                        <input type="text" className='form-control form-control-lg bg-light p-2 shadow text-center' value={val} />
                    </div>
                    {/* BUTTONS */}
                    <div class="card-body text-dark">
                        <div className='row mt-1'>
                            <button type="button" class="btn btn-outline-dark col m-1" value='1' onClick={(e)=>setVal(val + e.target.value)}>1</button>
                            <button type="button" class="btn btn-outline-dark col m-1" value='2' onClick={(e)=>setVal(val + e.target.value)}>2</button>
                            <button type="button" class="btn btn-outline-dark col m-1" value='3' onClick={(e)=>setVal(val + e.target.value)}>3</button>
                            <button type="button" class="btn btn-outline-dark col m-1" onClick={()=>backspace()}>C/AC</button>
                        </div>
                        <div className='row mt-1'>
                            <button type="button" class="btn btn-outline-dark col m-1" value='4' onClick={(e)=>setVal(val + e.target.value)}>4</button>
                            <button type="button" class="btn btn-outline-dark col m-1" value='5' onClick={(e)=>setVal(val + e.target.value)}>5</button>
                            <button type="button" class="btn btn-outline-dark col m-1" value='6' onClick={(e)=>setVal(val + e.target.value)}>6</button>
                            <button type="button" class="btn btn-outline-dark col m-1" value='+' onClick={(e)=>setVal(val + e.target.value)}>+</button>
                        </div>
                        <div className='row mt-1'>
                            <button type="button" class="btn btn-outline-dark col m-1" value='7' onClick={(e)=>setVal(val + e.target.value)}>7</button>
                            <button type="button" class="btn btn-outline-dark col m-1" value='8' onClick={(e)=>setVal(val + e.target.value)}>8</button>
                            <button type="button" class="btn btn-outline-dark col m-1" value='9' onClick={(e)=>setVal(val + e.target.value)}>9</button>
                            <button type="button" class="btn btn-outline-dark col m-1" value='-' onClick={(e)=>setVal(val + e.target.value)}>-</button>
                        </div>
                        <div className='row mt-1'>
                            <button type="button" class="btn btn-outline-dark col m-1" value='*' onClick={(e)=>setVal(val + e.target.value)}>X</button>
                            <button type="button" class="btn btn-outline-dark col m-1" value='0' onClick={(e)=>setVal(val + e.target.value)}>0</button>
                            <button type="button" class="btn btn-outline-dark col m-1" value='/' onClick={(e)=>setVal(val + e.target.value)}>/</button>
                            <button type="button" class="btn btn-outline-dark col m-1" onClick={()=>calValue()}>=</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
