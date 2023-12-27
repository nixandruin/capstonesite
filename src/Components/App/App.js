import './App.css';
import Header from '../Header/Header';
import PortfolioItem from '../PortfolioItem/PortfolioItem'; 
import Footer from '../Footer/Footer';
import About from '../About/About';

import september from '../PortfolioItemSpecifications/sept';
import october from '../PortfolioItemSpecifications/oct'; 
import november from '../PortfolioItemSpecifications/nov';

//wow I changed this file PLEASE commit 

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id = "portfolio" >
          <h2>Capstone Portfolio</h2>
          <ul>
            <li>
              <a href = '#september'>September</a>
            </li>
            <li>
              <a href = '#october'>October</a>
            </li>
            <li>
              <a href = "#november">November</a>
            </li>
          </ul>
          <PortfolioItem id = 'september' title = "September: Learn C++" content = {september} />
          <PortfolioItem id = 'october' title = "October: Learn Web Development" content = {october} />
          <PortfolioItem id = 'november' title = "November: Learn Unity" content = {november} />
        </section>
        <section id = "writeups">
          <h2>WriteUps</h2>
          <p>I did some CyberStart writeups! Don't think I'm supposed to share them while the competition is ongoing though so... come back later?</p>
        </section>
        <section id = "in-progress">
          <h2>What I'm Working On</h2>
          <p>The Legend on Calculus 2D RPG in Unity and Prudentor Language-Flashcards mobile app! Details to be added soon!</p>
          <p>SANS 401 GSEC Certification - Exam Friday December 29 </p>
          <p>Building a solar panel generator</p>
          <p>Surviving</p>
        </section>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
