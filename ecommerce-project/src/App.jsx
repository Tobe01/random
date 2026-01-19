import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { Checkout } from './pages/checkout/CheckoutPage';
import { Orders } from './pages/OrdersPage';
import { Tracking } from './pages/TrackingPage';
import { ErrorPage } from './pages/ErrorPage';

function App() {
  return (
    <>
     <Routes>
      {/* Pages */}
      <Route index element={<HomePage />} />
      <Route path="Checkout" element={<Checkout />} />
      <Route path="Orders" element={<Orders />} />
      <Route path="Tracking" element={<Tracking />} />

      {/* route path to 404 error page */}
      <Route path="*" element={<ErrorPage />} />
     </Routes>
    </>
  )
}

export default App;
