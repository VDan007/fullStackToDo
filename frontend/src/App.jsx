import { useEffect, useState } from 'react';
import ListHeader from './components/ListHeader';
import ListItem from './components/ListItem';






function App() {
  const userEmail = 'ania@test.com';
  const [tasks,setTasks] = useState(null);
  console.log(tasks);

  async function getData(){
    try {
      const response = await fetch(`/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json);
    } catch (err) {
      console.error(err);
    }
  }

  

  useEffect(
    ()=>{
      getData();
    },[]
  );

  console.log(tasks);

   const sortedTasks = tasks?.sort((a,b) => new Date(a.date) - new Date(b.date));
  

  return (
   <div className='app'>
    <ListHeader listName='🏝️ Holidya Tick List'/>
    {sortedTasks?.map(task=>{
       return <ListItem
        key={task.id}
        task={task}
      />
    })}

   </div>
  )
}

export default App;
