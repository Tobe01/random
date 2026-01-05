import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { Checkout } from './pages/Checkout';
import { Orders } from './pages/Orders';
import { Tracking } from './pages/Tracking';

function App() {
  return (
    <>
     <Routes>
      <Route index element={<HomePage />} />
      <Route path="Checkout" element={<Checkout />} />
      <Route path="Orders" element={<Orders />} />
      <Route path="Tracking" element={<Tracking />} />
     </Routes>
    </>
  )
}

export default App
