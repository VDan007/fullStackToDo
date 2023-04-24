import { useState } from 'react';

function Modal({mode,setShowModal,task}) {
    
    const editMode = mode === 'edit' ? true : false;
    const [data,setData] = useState({
      user_email: editMode ?  task.user_email : '',
      title: editMode ? task.title : '',
      progress: editMode ? task.progress : '',
      data: editMode ? '' : new Date()
    });
   

    function postData(){
      try{
        fetch()
      }catch(err){
        console.log(err);
      }
    }

    function handleChange(e){ 
        console.log('changing');
        const {name,value} = e.target;
        
        setData(data=>{
          return {...data,
                [name] : value  }
        });
        console.log(data);
    }
  

    return (
     <div className="overlay">

        <div className="modal">
          <div className="form__title__container">
            <h3>Let's {mode} your task </h3>
            <button onClick={()=>setShowModal(false)}>X</button>
          </div>
          <form action="">
            <input 
              type="text"
              required
              maxLength={30}
              placeholder='Your task goes here'
              name='title'
              value={data.title}
              onChange={handleChange}
            />
            <label htmlFor="progress">Drag to select your current progress</label>
            <input 
              type="range"
              required
              min='0'
              ma='100'
              name='progress'
              value={data.progress}
              onChange={handleChange}
            />
            <input 
              type="submit"
              className={mode}
            />
          </form>
        </div>

     </div>
    )
  }
  
  export default Modal;