
import './App.css';
import BehenceList from './components/BehenceList';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
   <>
   <div className='main relative overflow-hidden'>

   <Header/>
   
    <BehenceList/>
    <Footer/>
    
   </div>
    
   </>
  );
}

export default App;
