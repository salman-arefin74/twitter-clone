import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import { Routes, Route } from 'react-router-dom'
import Explore from './Explore';
import { Helmet } from 'react-helmet';
import Notifications from './Notifications';

function App() {
    return (
        <div className="app">
            <Helmet>
                <title>Twitter</title>
            </Helmet>
            <Sidebar />

            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/notifications" element={<Notifications />} />
            </Routes>

            <Widgets />
        </div>
    );
}

export default App;
