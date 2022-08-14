import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // from react-router-dom

import './App.css'; // from App.css for styling

//NavBar component
import { NavBar } from './components/NavBar';

// react framer motion
import {AnimatePresence} from 'framer-motion';

// Component for pages
import { WelcomePage } from './components/WelcomePage';
import { Playground } from './components/Playground/Playground';
import { Plans } from './components/Plans';
import {Registration} from './components/Registration';
import { ErrorPage } from './components/ErrorPage';
import { GuestLanding } from './components/Guest/GuestLanding';
import { MemberForm } from './components/Member/MemberForm';
import { MemberLanding } from './components/Member/MemberLanding';
import { Templates } from './components/Member/Templates';
import { SingleTemplate } from './components/Member/SingleTemplate';
import { Profile } from './components/Member/Profile';
// import { Test } from './components/Test';
import { Drafts } from './components/Member/Drafts';
import { SingleDraft } from './components/Member/SingleDraft';
import { CodingClasses } from './components/Member/CodingClasses';
import { Resources } from './components/Member/Resources';
import { EditProfile } from './components/Member/EditProfile';
import { MemberPlayground } from './components/Member/MemberPlaygrond';
import {useAuth0, withAuthenticationRequired} from '@auth0/auth0-react';
import GlobalStyles from './helpers/GlobalStyles';

// protected routes
const ProtectedProfile = withAuthenticationRequired(Profile)
const ProtectedTemplates = withAuthenticationRequired(Templates)
const ProtectedSingleTemplate = withAuthenticationRequired(SingleTemplate)
const ProtectedDrafts = withAuthenticationRequired(Drafts)
const ProtectedSingleDraft = withAuthenticationRequired(SingleDraft)
const ProtectedCodingClasses = withAuthenticationRequired(CodingClasses)
const ProtectedResource = withAuthenticationRequired(Resources)
const ProtectedMemberLanding = withAuthenticationRequired(MemberLanding)
const ProtectedMemberForm = withAuthenticationRequired(MemberForm)
const ProtectedMemberPlayground = withAuthenticationRequired(MemberPlayground)
const ProtectedProfileEdit = withAuthenticationRequired(EditProfile)

function App() {
  const {isLoading, error} = useAuth0();

  if (isLoading) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Loading...</h1>
        </header>
      </div>
    );
  } else if (error) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Error...</h1>
        </header>
      </div>
    );
  } else {
  return (
    <>
      <NavBar />
      <GlobalStyles />
      <AnimatePresence>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/guest" element={<GuestLanding />} />
        <Route path="/member" element={<ProtectedMemberForm />} />
        <Route path="/members/landing" element={<ProtectedMemberLanding />} />
        <Route path="/members/playground" element={<ProtectedMemberPlayground />} />
        <Route path="/members/profile" element={<ProtectedProfile />} />
        <Route path="/members/profile/profile-edit" element={<ProtectedProfileEdit />} />
        <Route path="/members/templates" element={<ProtectedTemplates />} />
        <Route path="/members/templates/:templateType" element={<ProtectedSingleTemplate />} />
        <Route path="/members/drafts" element={<ProtectedDrafts />} />
        <Route path="/members/drafts/:draftId" element={<ProtectedSingleDraft />} />
        <Route path="/members/coding-classes" element={<ProtectedCodingClasses />} />
        <Route path="/members/resources" element={<ProtectedResource />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </AnimatePresence>
    </>
  );
  }

  
}

export default App;
