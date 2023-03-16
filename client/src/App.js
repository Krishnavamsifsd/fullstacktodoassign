import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import CreateAccount from './components/Createaccount';
import Login from './components/Login';
import Todos from './components/Todos';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleShowLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <Router>
      <div style={{textAlign:"center",margin:"20px"}}>
      <button onClick={toggleShowLogin} className="update-item" style={{float:"left", marginBottom:"35px",marginRight:"65px"}}>
          {showLogin ? 'Create Account' : 'Login'}
        </button>
        <Routes>
          <Route path="/" element={showLogin ? <Login /> : <CreateAccount />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;