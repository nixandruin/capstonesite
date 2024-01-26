import './App.css';
import Header from '../Header/Header';
import PortfolioItem from '../PortfolioItem/PortfolioItem'; 
import Footer from '../Footer/Footer';
import About from '../About/About';

import september from '../PortfolioItemSpecifications/sept';
import october from '../PortfolioItemSpecifications/oct'; 
import november from '../PortfolioItemSpecifications/nov';
import january from '../PortfolioItemSpecifications/jan';

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
            <li>
              <a href = "#january">January</a>
            </li>
          </ul>
          <PortfolioItem id = 'september' title = "September: Learn C++" content = {september} />
          <PortfolioItem id = 'october' title = "October: Learn Web Development" content = {october} />
          <PortfolioItem id = 'november' title = "November: Learn Unity" content = {november} />
          <PortfolioItem id = 'january' title = "January: Learn Network Device Configuration" content = {january} />
        </section>
        <section id = "writeups">
          <h2>WriteUps</h2>
          <p>CyberStart writeups</p>
        </section>
        <section id = "in-progress">
          <h2>What I'm Working On</h2>
          <p>The Legend on Calculus 2D RPG in Unity and Prudentor Language-Flashcards mobile app! Details to be added soon!</p>
          <p>SANS 401 GSEC Certification - Exam Friday December 29 </p>
          <p>Building a solar panel generator.</p>
        </section>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
