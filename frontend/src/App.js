import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PostList from './pages/PostList';
import PostDetail from './components/PostDetail';
import Footer from './components/Footer';
import MainHeader from './components/MainHeader';
import CategoryPost from './pages/CategoryPost';





function App() {
  return (
    <div className="App">
    
      <Router>
      <MainHeader/>
        <Routes>
          <Route path='/' element= {<PostList/>}></Route>
          <Route path='/posts/:id' element= {<PostDetail/>}></Route>
          <Route path='posts/category/:id' element= {<CategoryPost/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    
      
    </div>
  );
}

export default App;
