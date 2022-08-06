import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // from react-router-dom

import './App.css'; // from App.css for styling

//NavBar component
import { NavBar } from './components/NavBar';

// Component for pages
import { WelcomePage } from './components/WelcomePage';
import { Playground } from './components/Playground/Playground';
import { Registration } from './components/Registration';
import { ErrorPage } from './components/ErrorPage';
import { GuestLanding } from './components/Guest/GuestLanding';
import { MemberLanding } from './components/Member/MemberLanding';
import { Templates } from './components/Member/Templates';
import { SingleTemplate } from './components/Member/SingleTemplate';
import { Profile } from './components/Member/Profile';
import { Test } from './components/Test';

function App() {
  return (
   <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/guest" element={<GuestLanding />} />
        {/* <Route path="/templates-test" element={<Test />} /> */}
        <Route path="/members/:memberId" element={<MemberLanding />} />
        <Route path="/members/:memberId/profile" element={<Profile />} />
        <Route path="/members/:memberId/templates" element={<Templates />} />
        <Route path="/members/:memberId/templates/:templateId" element={<SingleTemplate />} />
        <Route path="/members/:memberId/drafts" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
