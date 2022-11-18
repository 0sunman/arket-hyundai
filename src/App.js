import logo from './logo.svg';
import './App.css';
import Head from "./components/Head";
import Header from './components/Header';
import PageContent from './components/PageContent';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head/>
        <Header/>
        <PageContent/>
      </div>
    </Provider>
  );
}

export default App;
