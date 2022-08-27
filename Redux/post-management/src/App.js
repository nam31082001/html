import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Data from './components'
import Post from './components/Post';
import Edit from "./components/edit";
import store from './redux/store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Data/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/edit" element={<Edit/>} />
      </Routes>
    </BrowserRouter>
  </Provider>

  );
}

export default App;
