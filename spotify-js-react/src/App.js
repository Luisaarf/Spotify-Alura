import './reset.css'
import './vars.css'
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  return (
    <body>
      <Sidebar/>
      <div className="main-container">
        <Header/> 
        <Main/>
      </div>
      <Footer/>
    </body>
  );
}

export default App;
