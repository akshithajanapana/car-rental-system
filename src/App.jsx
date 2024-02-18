import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Signin';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <section>                              
            <Routes>                                                                        
              <Route path="/home" element={<Home/>}/>
               <Route path="/signup" element={<Signup/>}/>
               <Route path="/login" element={<Login/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  )
}

export default App
