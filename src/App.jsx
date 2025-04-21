
import './App.css'
import Body from './components/Body';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Feed from './components/Feed';
import Profiles from './components/Profiles';


function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/profile" element={< Profiles/>} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App
