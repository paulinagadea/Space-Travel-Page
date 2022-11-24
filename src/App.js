import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home.jsx';
import Destination from './components/destination/Destination.jsx';
import Crew from './components/crew/Crew.jsx';
import Technology from './components/technology/Technology.jsx';

function App() {
  return (
    <BrowserRouter>
       <div> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />        
          <Route path="/crew" element={<Crew />} />        
          <Route path="/technology" element={<Technology />} />                
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
