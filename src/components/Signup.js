
import React,{useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validate } from './validate';
import Notify from "./Notify"
const Signup=()=>{
    // const notify = (text,type) => toast("Wow so easy!");
    const notify=(text,type)=>{
        if ( type==="success"){
            toast.success(text)
        } 
        else{
            toast.error(text)
        }
    }
    const [touched,setTouched]=useState({})
    const focushandler=(event)=>{
        setTouched({...touched , [event.target.name]:true})
    }
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:"",
        isAccepted:false
    })
    const [errors,setErrors]=useState({});
    useEffect(()=>{
setErrors(validate(data))
console.log(errors)
    },[data , touched])
    const changehandler=(event)=>{
        // console.log(event.target)
        //  console.log(event.target.value)
        //  console.log(event.target.checked)
        if(event.target.name==="isaacepted")
        {
            setData({...data,[event.target.name]:event.target.checked})
        }
        else{
            setData({...data,[event.target.name]:event.target.value})
        }
        console.log(data)
      }
   

      const handlersubmit=(event)=>{
        event.preventDefault()
        //  notify()
        if(!Object.keys(errors).length){
// console.log(data)
notify("you signed in successfuly","success")
        }
        else{
            notify("invalid data","error")
         setTouched({
            name:true,
            email:true,
            password:true,
            confirmpassword:true,
            isAccepted:true
         })   
        }
    }
  return (
    <div>
      <form onSubmit={handlersubmit}>
        <h2>
            Signup
        </h2>
        <div>
            <label>
                name
            </label>
           
            <input type="text" name='name' value={data.name}  onChange={changehandler} onFocus={focushandler}/>
        </div>
        {errors.name  && touched.name && <span>{errors.name}</span>}
        <div>
            <label>
                email
            </label>
            <input type="text" name='email' value={data.email} onChange={changehandler} onFocus={focushandler}/>
        </div>
        {errors.email  && touched.email && <span>{errors.email}</span>}
        <div>
            <label>
                password
            </label>
            <input type="password" name='password' value={data.password} onChange={changehandler} onFocus={focushandler}/>
        </div>
        {errors.password  && touched.password && <span>{errors.password}</span>}
        <div>
            <label>
                confirmpassword
            </label>
            <input type="password" name='confirmpassword' value={data.confirmpassword} onChange={changehandler} onFocus={focushandler}/>
        </div>
        {errors.confirmpassword  && touched.confirmpassword && <span>{errors.confirmpassword}</span>}
        <div>
            <label>
                I accept terms of privacy polatics.
            </label>
            <input type="checkbox" name='isaacepted' value={data.isAccepted} onChange={changehandler} onFocus={focushandler}/>
        </div>
        {errors.isAccepted  && touched.isAccepted && <span>{errors.isAccepted}</span>}
        <div>
            <a href='#'> login</a>
            <button type='submit'>
                Signup
            </button>
        </div>
        </form> 
      
        <ToastContainer />
    </div>
  );
}

export default Signup;
