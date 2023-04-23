import ProgressBar from './ProgressBar';
import { TickIcon } from './TickIcon';

function ListItem({task}) {
  

    return (
     <li className="list__item">

      <div className="info__container">

        <TickIcon/>
        <p className="task__title">{task.title}</p>
        <ProgressBar/>
      </div>

      <div className='button__container'>
        <button className='edit'>EDIT</button>
        <button className='delete'>DELETE</button>
      </div>
      
     </li>
    )
  }
  
  export default ListItem;