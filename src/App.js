import logo from './logo.svg';
import './App.css';
import Head from "./components/common/Head";
import Header from './components/common/Header';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteList from './Route';
import HomeButton from "./components/homebutton"




const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Head/>
        <Header/>
        <RouteList/>
        <HomeButton/>
      </HashRouter>
    </Provider>    
  );
}

export default App;
