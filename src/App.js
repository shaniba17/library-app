import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewBook from './components/ViewBook';
import DeleteBook from './components/DeleteBook';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddBook/>}/>
      <Route path='/search' element={<SearchBook/>}/>
      <Route path='/delete' element={<DeleteBook/>}/>
      <Route path='view' element={<ViewBook/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
