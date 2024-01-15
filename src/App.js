import './App.css';
import { Route, Routes } from 'react-router-dom';
import  Login  from './component/Login';
import MailBox from './component/MailBox';
import Test from './component/Test';
import History from './component/History';
import Navbar from './component/Navbar';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MailBox />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/history" element={<History />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
      <div class="px-6 sm:px-0 max-w-sm">
      </div>
    </div>
  );
}

export default App;
