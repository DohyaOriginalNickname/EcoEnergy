import { useState } from 'react';
import './App.css';
import Header from './header/Header.jsx';
import FirstPage from './firstPage/firstPage';
import SecondPage from './secondPage/secondPage';
import ResultPage from './resultPage/resultPage';
import Footer from './footer/Footer';

function App() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([])

  const changeComponent = (param) => setPage(param);
  const getDat = (param) => setData(param)

  return (
    <>
      <Header changeComponent={changeComponent} />
      <main className='main'>
        { page === 0 ? <FirstPage changeComponent={changeComponent}/> : page === 1 ? <SecondPage changeComponent={changeComponent} getDat={getDat}/> : <ResultPage data={data}/> }
      </main>
      <Footer/>
    </>
  )
}

export default App
