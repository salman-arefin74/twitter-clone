import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import { Routes, Route } from 'react-router-dom'
import Explore from './Explore';

function App() {
  return (
    <div className="app">
      <Sidebar />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/explore" element={<Explore />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>

      <Widgets />
    </div>
  );
}

export default App;
