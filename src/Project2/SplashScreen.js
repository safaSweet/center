// import React, { useState, useEffect } from 'react';
// import LoadingScreen from 'react-loading-screen';
// import { useNavigate } from 'react-router-dom';

// const SplashScreen = () => {
//   const [loading, setLoading] = useState(true);
//   const history = useHistory();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//       <Navigate to="/App" />;
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, [history]);

//   return (
//     <LoadingScreen
//       loading={loading}
//       bgColor='#f1f1f1'
//       spinnerColor='#9ee5f8'
//       textColor='#676767'
//       logoSrc='/path/to/logo.png'
//       text='Loading...'
//     >
//     </LoadingScreen>
//   );
// };

// export default SplashScreen;