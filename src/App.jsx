import { useState } from 'react';
import './App.css';
import Header from './header/Header.jsx';
import FirstPage from './firstPage/firstPage';
import SecondPage from './secondPage/secondPage';

function App() {
  const [page, setPage] = useState(true);

  const changeComponent = (param) => setPage(param);

  return (
    <>
      <Header changeComponent={changeComponent} />
      
      <main className='main'>
        { page ? <FirstPage changeComponent={changeComponent}/> : <SecondPage/> }
      </main>
    </>
  )
}

export default App
