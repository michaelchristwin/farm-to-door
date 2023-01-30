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
import ForgotPassword from "./Pages/forgot_password";
import ForgotPassword2 from "./Pages/forgot_password2";
import ForgotPassword3 from "./Pages/forgot_password3";
import Home from "./Pages/home";
import HomeS from "./Pages/home_s";
import Details from "./Pages/details";
import DList from "./JSX/detailList";
import Cart from "./Pages/cart";
import CartCheckout from "./Pages/cart-checkout";
import Payment from "./Pages/payment-details";
import Status from "./Pages/order-status";
import Tracking from "./Pages/tracking-map";

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
        <Route
          path={`${BaseUrl}/forgot-password`}
          element={<ForgotPassword />}
        />
        <Route
          path={`${BaseUrl}/forgot-password2`}
          element={<ForgotPassword2 />}
        />
        <Route
          path={`${BaseUrl}/forgot-password3`}
          element={<ForgotPassword3 />}
        />
        <Route path={`${BaseUrl}/home`} element={<Home />} />
        <Route path={`${BaseUrl}/search`} element={<HomeS />} />
        <Route
          path={`${BaseUrl}/details-orange`}
          element={
            <Details
              img={DList[0].img}
              key={DList[0].name}
              name={DList[0].name}
              type={DList[0].type}
            />
          }
        />
        <Route
          path={`${BaseUrl}/details-brocolli`}
          element={
            <Details
              img={DList[1].img}
              key={DList[1].name}
              name={DList[1].name}
              type={DList[1].type}
              bg="#faf0e6"
            />
          }
        />
        <Route path={`${BaseUrl}/cart`} element={<Cart />} />
        <Route path={`${BaseUrl}/cart-checkout`} element={<CartCheckout />} />
        <Route path={`${BaseUrl}/payment-details`} element={<Payment />} />
        <Route path={`${BaseUrl}/order-status`} element={<Status />} />
        <Route path={`${BaseUrl}/tracking-map`} element={<Tracking />} />
      </Routes>
    </main>
  );
}

export default App;
