import Splash from "./Pages/splash";
import BaseUrl from "./JSX/BaseUrl";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Onboarding02 from "./Pages/onboarding02";
import Onboarding01 from "./Pages/onboarding01";
import Login from "./Pages/login";
import CreateAcount from "./Pages/create_account";
import EmailVerify from "./Pages/email_verify";
import TheLocation from "./Pages/location";
import Location02 from "./Pages/location02";

function App() {
  return (
    <main>
      <Routes>
        <Route path={BaseUrl} element={<Splash />} />
        <Route path={`${BaseUrl}/onboarding1`} element={<Onboarding01 />} />
        <Route path={`${BaseUrl}/onboarding2`} element={<Onboarding02 />} />
        <Route path={`${BaseUrl}/login`} element={<Login />} />
        <Route path={`${BaseUrl}/create-account`} element={<CreateAcount />} />
        <Route path={`${BaseUrl}/verify-email`} element={<EmailVerify />} />
        <Route path={`${BaseUrl}/location`} element={<TheLocation />} />
        <Route path={`${BaseUrl}/location2`} element={<Location02 />} />
      </Routes>
    </main>
  );
}

export default App;
