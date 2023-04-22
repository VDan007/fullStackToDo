import { useEffect } from 'react';
import ListHeader from './components/ListHeader';




function App() {

  async function getData(){
    const userEmail = 'ania@test.com';
    try {
      const response = await fetch(`/todos`);
      const json = await response.json();
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(
    ()=>{
      getData();
    },[]
  );
  

  return (
   <div className='app'>
    <ListHeader 
      listName='🏝️ Holidya Tick List'/>
   </div>
  )
}

export default App;
