
import './App.css'
import Body from './Body';
import Navbar from './Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {

  return (
    <> 
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>}>
          <Route path="/login" element={<h1>Login</h1>} />
      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App
