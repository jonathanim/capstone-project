import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';

import './App.css';

function App() {
  return (
    <div className='App-container'> 
      <Nav/>
      <Header/>
      <Main/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
