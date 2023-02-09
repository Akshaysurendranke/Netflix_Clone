
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Rowpost from './Components/Rowpost/Rowpost';
import {originals,Action,comedy,horror} from './Components/urls/urls'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <Rowpost url ={originals} title="Netflix Originals"/>
     <Rowpost url = {horror} title="Horror" isSmall/>
     <Rowpost url = {Action} title="Action" isSmall/>
     <Rowpost url = {comedy} title="Comedy" isSmall/>

    
    </div>
  );
}

export default App;
