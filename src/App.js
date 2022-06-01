import './App.css';
import MainInfo from './components/MainInfo';
import Footer from './components/Footer';
import AdditionalInfo from './components/AdditionalInfo';
import Photo from './components/Photo';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className="App">
      <Photo />
      <MainInfo />
      <Buttons />
      <AdditionalInfo />
      <Footer />
    </div>
  );
}

export default App;
