import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from "./pages/Admin";
import Login from './pages/Login'
import Blogs from './pages/Blogs'
import Add from './pages/Add'
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Login />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/blogs/:id' element={<BlogDetail />}></Route>
          <Route path='/addnew' element={<Add />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
