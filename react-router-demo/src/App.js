import { Routes } from 'react-router-dom';
import {Route, Link} from "react-router-dom";
import { Home} from './pages/Home'
import { BookRoutes } from './BookRoutes';
import { NotFound } from './pages/NotFound';

function App() {
  return (
  <>
  <Routes location="/books">
    <Route path="/books" element={<h1>Extra content</h1>}/>
  </Routes>

  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/books">Books</Link></li>
    </ul>
  </nav>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/books/*" element={<BookRoutes/> }> 
    </Route>
    <Route path="*" element={<NotFound/>}></Route>
  </Routes>
  </>
  )
  
}

export default App;
