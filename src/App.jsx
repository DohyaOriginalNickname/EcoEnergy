import { useState } from 'react';
import './App.css';
import Header from './header/Header.jsx';

function App() {
  const [page, setPage] = useState(true);

  const changeComponent = (param) => setPage(param);

  return (
    <>
      <Header changeComponent={changeComponent} />
      { page ? <div>First page</div> : <div>Second Page</div> }
    </>
  )
}

export default App
