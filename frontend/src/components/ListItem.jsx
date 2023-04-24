import ProgressBar from './ProgressBar';
import { TickIcon } from './TickIcon';
import Modal from './Modal';
import { useState } from 'react';

function ListItem({task}) {
    const [showModal,setShowModal] = useState(false);

    return (
     <li className="list__item">

      <div className="info__container">

        <TickIcon/>
        <p className="task__title">{task.title}</p>
        <ProgressBar/>
      </div>

      <div className='button__container'>
        <button className='edit' onClick={()=>setShowModal(true)}>EDIT</button>
        <button className='delete'>DELETE</button>
      </div>
      {showModal && <Modal
                    task={task}
                    mode = 'edit'
                    setShowModal={setShowModal}/>}
     </li>
    )
  }
  
  export default ListItem;