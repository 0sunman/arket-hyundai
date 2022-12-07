import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store';
import { HashRouter, BrowserRouter, Routes } from 'react-router-dom';
import RouteList from './Route';



const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <RouteList/>
      </HashRouter>
    </Provider>    
  );
}

export default App;
