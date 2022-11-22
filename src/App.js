import logo from './logo.svg';
import './App.css';
import Home from './Home';

import Footer from './Footer';
import Cards from './Cards';
import Planning from './Planning';
import Calender from './Calender';




function App() {
  return (
    <div className="App">
      <Home />
      <Cards />
      <Calender/>
      
      <Footer />
    </div>
  );
}

export default App;
