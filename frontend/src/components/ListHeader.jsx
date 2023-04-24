import { useState } from 'react';
import Modal from './Modal';

function ListHeader({listName}) {
    const [showModal,setShowModal] = useState(true);
  
    function signout(){
      console.log('sign out');
    }

    return (
     <div className="list__header">
      <h1> {listName} </h1>
      <div className="button__container">
        <button className="create" onClick={()=>setShowModal(true)}>ADD NEW</button>
        <button className="signout" onClick={signout}>SIGN OUT</button>
      </div> 
      {showModal && <Modal
        mode='create'
        setShowModal={setShowModal}
      />}
     </div>
    );
  }
  
  export default ListHeader;