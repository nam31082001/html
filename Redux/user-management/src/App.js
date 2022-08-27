import logo from './logo.svg';
import './App.css';
import Get from './components';
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Get />
      </div>
    </Provider>

  );
}

export default App;
