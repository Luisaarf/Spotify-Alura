import './reset.css'
import './vars.css'
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  // const searchInput = document.getElementById('search-input');
  // const resultsArtist = document.getElementById('result-artist');
  // const resultsPlaylist = document.getElementById('result_playlists');
  // const artistName = document.getElementById('artist-name');
  // const artistImage = document.getElementById('artist-img');

  // function requestAPI(searchTerm){
  //   const url = `http://localhost:3000/artists?name_like=${searchTerm}`
  //   fetch(url)
  //       .then(response => response.json())
  //       .then(result => displayResults(result))
  // }

  // function displayResults(result){
  //   resultsPlaylist.classList.add('hidden');
  //   console.log('artistName', artistName);
  //   console.log('artistImage', artistImage);
  //   console.log('result', result);
  //   result.forEach(artist => {
  //       artistName.innerText = artist.name;
  //       artistImage.src = artist.urlImg;
  //   })
  //   resultsArtist.classList.remove('hidden');
  // }

  // document.addEventListener('input', () => {
  //   const searchTerm = searchInput.value.toLowerCase();
  //   if(searchTerm === ''){
  //       console.log('vazio')
  //       resultsPlaylist.classList.remove('hidden');
  //       resultsArtist.classList.add('hidden');
  //       return;
  //   }
  //   requestAPI(searchTerm)
  // })

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
