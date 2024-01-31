import './reset.css'
import './vars.css'
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';

function App() {
  return (
    <body>
      <Sidebar/>
      <div class="main-container">
        <Header/> 
        <Main/>
      </div>
    </body>
  );
}

export default App;
