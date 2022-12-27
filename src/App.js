import React from 'react';
import './App.css';
import Welcome from './components/Welcome'
import SignInEmail from './components/SignInEmail'
import SignInNumber from './components/SignInNumber'
import Register from './components/Register'
import EmailVerification from './components/EmailVerification';
import WelcomeTemplate from './components/WelcomeTemplate'
import RegistrationForm from './components/RegistrationForm'
import PhoneVerification from './components/PhoneVerification';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import PasswordVerification from './components/PasswordVerification';
import ResetPasswordEmail from './components/ResetPasswordEmail';
import CreateNewPassword from './components/CreateNewPassword';
import ResetDashboard from './components/ResetDashboard';
import Dashboard1 from './Dashboard/Dashboard1';
import Dashboard2 from './Dashboard/Dashboard2';
import Sameday from './Dashboard/Sameday';
import RequestAsSender from './Dashboard/RequestAsSender';
import RequestAsSender2 from './Dashboard/RequestAsSender2';
import RequestAsSender3 from './Dashboard/RequestAsSender3';
import RequestAsSender4 from './Dashboard/RequestAsSender4';
import RequestAsReceiver from './Dashboard/RequestAsReceiver';
import Wallet from './Dashboared2/Wallet';
import History from './Dashboared2/History';
import History2 from './Dashboared2/History2';
import AfterFilling from './Dashboared2/AfterFilling';
import NewPassword from './Dashboared2/NewPassword';
import Help from './Dashboared2/Help';
import MyPackageWasNotDelivered from './Dashboared2/MyPackageWasNotDelivered';
import DeleteAccount from './Dashboared2/DeleteAccount';
import Guest from './Dashboard/Guest';
import Interstate from './Dashboard/Interstate'
import InterstateGuest from './Dashboard/InterstateGuest';
import Addcard from './Dashboared2/Addcard';
import International from './Dashboard/International';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
 
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element= { <Welcome /> } />
          <Route exact path="/loginEmail" element= { <SignInEmail /> } />
          <Route exact path="/loginNumber" element= { <SignInNumber/> } />
          <Route exact path="/register" element= { <Register/> } />
          <Route exact path="/EmailVerification" element= { <EmailVerification/> } />
          <Route exact path="/WelcomeTemplate" element= { <WelcomeTemplate/> } />
          <Route exact path="/RegistrationForm" element= { <RegistrationForm/> } />
          <Route exact path="/PhoneVerification" element= { <PhoneVerification/> } />
          <Route exact path="/Dashboard" element= { <Dashboard/> } />
          <Route exact path="/ForgotPassword" element= { <ForgotPassword/> } />
          <Route exact path="/PasswordVerification" element= { <PasswordVerification/> } />
          <Route exact path="/ResetPasswordEmail" element= { <ResetPasswordEmail/> } />
          <Route exact path="/CreateNewPassword" element= { <CreateNewPassword/> } />
          <Route exact path="/ResetDashboard" element= { <ResetDashboard/> } />
          <Route exact path="/Dashboard1" element= { <Dashboard1/> } />
          <Route exact path="/Dashboard2" element= { <Dashboard2/> } />
          <Route exact path="/Sameday" element= { <Sameday/> } />
          <Route exact path="/Interstate" element= { <Interstate/> } /> 
          <Route exact path="/InterstateGuest" element= { <InterstateGuest/> } /> 
          <Route exact path="/RequestAsSender" element= { <RequestAsSender/> } />
          <Route exact path="/RequestAsSender2" element= { <RequestAsSender2/> } />
          <Route exact path="/RequestAsSender3" element= { <RequestAsSender3/> } />
          <Route exact path="/RequestAsSender4" element= { <RequestAsSender4/> } />
          <Route exact path="/RequestAsReceiver" element= { <RequestAsReceiver/> } />
          <Route exact path="/Guest" element= { <Guest/> } /> 
          <Route exact path="/International" element= { <International/> } /> 
          <Route exact path="/Wallet" element= { <Wallet/> } />
          <Route exact path="/Addcard" element= { <Addcard/> } />
          <Route exact path="/History" element= { <History/> } />
          <Route exact path="/History2" element= { <History2/> } />
          <Route exact path="/AfterFilling" element= { <AfterFilling/> } />
          <Route exact path="/NewPassword" element= { <NewPassword/> } />
          <Route exact path="/Help" element= { <Help/> } />
          <Route exact path="/MyPackageWasNotDelivered" element= { <MyPackageWasNotDelivered/> } />
          <Route exact path="/DeleteAccount" element= { <DeleteAccount/> } /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
