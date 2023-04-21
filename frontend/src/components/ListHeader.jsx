

function ListHeader({listName}) {
  
    function signout(){
      console.log('sign out');
    }

    return (
     <div className="list__header">
      <h1> {listName} </h1>
      <div className="button__container">
        <button className="create">ADD NEW</button>
        <button className="signout" onClick={signout}>SIGN OUT</button>
      </div> 
     </div>
    );
  }
  
  export default ListHeader;