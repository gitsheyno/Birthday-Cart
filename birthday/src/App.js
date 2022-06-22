import Data from './Data';
import List from './List';
import './App.css';
import { useState } from 'react'
function App() {
  const [person, setPerson] = useState(Data)
  const handleDelete = (e) => {
    e.preventDefault()
    setPerson([])
  }
  return (
    <div className="App">
      <List
        person={person}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
