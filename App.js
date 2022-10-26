import './App.css';

import Navbar from './Navbar';

import Home from './Home';

import Companies from './Companies';
import CompanyCartPrint from './CompanyCartPrint';
import WhyGetamover from './WhyGetamover';
import WhyGetamoverPrint from './WhyGetamoverPrint';
import AboutUsCard from './AboutUsCard';
import Services from './Services';
import ServicesCardPrint from './ServicesCardPrint';
import MoveHouse from './MoveHouse';
import Footer from './Footer';
import Header from './Header';
import HowItWork from './HowItWork';
import About from './About';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <MoveHouse/> */}
      <Header/>
      <HowItWork/>
      <Home/>
      <Companies/>
      <CompanyCartPrint/>
      <WhyGetamover/>
      <WhyGetamoverPrint/>
      {/* <AboutUsCard/> */}
      <About/>
      <div className="container pt-3"> <hr/></div>
      <Services/>
      <ServicesCardPrint/>
      <Footer/>
    </div>
  );
}

export default App;
