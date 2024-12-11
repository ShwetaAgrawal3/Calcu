// import React from 'react';
// import { Link } from 'react-router-dom';
// import LandingPage from './LandingPage';
// import './HomeScreen.css';

// const HomeScreen = () => {
//   return (
//     <div className="home-screen">
//       <Link to="/calculator">
//         <button className="start-button">Go to Calculator</button>
//       </Link>
//     </div>
//   );
// };

// export default HomeScreen;


import React from 'react';
import { Route, Routes } from 'react-router-dom'; // No need to import Router here
import LandingPage from './LandingPage/LandingPage'; // Ensure the path is correct
import Calculator from './Calculator';
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <Routes>  {/* Only Routes here */}
      <Route exact path="/" element={<LandingPage />} />  {/* Updated to use element */}
      <Route path="/calculator" element={<Calculator />} />  {/* Updated to use element */}
    </Routes>
  );
};

export default HomeScreen;
