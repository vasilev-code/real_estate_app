import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Listings from './components/Listings'
import ChangePage from './components/Pages'
import DetailItem from './components/Itemid'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import {CommonCSS} from './styles/CommonCSS'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
    ${CommonCSS}
`;

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/listings' element={<Listings/>} />
      <Route path='/pages' element={<ChangePage/>} />
      <Route path='/itemid' element={<DetailItem/>} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
