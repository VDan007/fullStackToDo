import { useState } from 'react';
import Modal from './Modal';

function ListHeader({listName}) {
    const [showModal,setShowmodal] = useState(true);
  
    function signout(){
      console.log('sign out');
    }

    return (
     <div className="list__header">
      <h1> {listName} </h1>
      <div className="button__container">
        <button className="create" onClick={()=>setShowmodal(true)}>ADD NEW</button>
        <button className="signout" onClick={signout}>SIGN OUT</button>
      </div> 
      {showModal && <Modal
        mode='create'
        setShowmodal={setShowmodal}
      />}
     </div>
    );
  }
  
  export default ListHeader;