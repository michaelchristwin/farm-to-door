import Splash from "./Pages/splash";
import BaseUrl from "./JSX/BaseUrl";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Onboarding02 from "./Pages/onboarding02";
import Onboarding01 from "./Pages/onboarding01";
import Login from "./Pages/login";

function App() {
  return (
    <main>
      <Routes>
        <Route path={BaseUrl} element={<Splash />} />
        <Route path={`${BaseUrl}/onboarding1`} element={<Onboarding01 />} />
        <Route path={`${BaseUrl}/onboarding2`} element={<Onboarding02 />} />
        <Route path={`${BaseUrl}/login`} element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
