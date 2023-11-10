import React,{useEffect,useState} from "react";
import MainOne from "./Component/MainOne";
import Searchpokemon from "./Component/Searchpokemon";
// import Preloader from "./Component/Preloader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  // const [screenLoading, setScreenLoading] = useState(false);

  // useEffect(() => {
  //   setScreenLoading(true);
  //   setTimeout(() => {
  //     setScreenLoading(false);
  //   }, 7000);
  // }, []);
  return (
    <div>
   
        <Router>
          <Routes>
            <Route path="/search" element={<Searchpokemon />} />
            <Route path="/" element={<MainOne />} />
          </Routes>
        </Router>

    </div>
  );
};

export default App;
// const App = () => {
//   const [screenLoading, setScreenLoading] = useState(false);

//   useEffect(() => {
//     setScreenLoading(true);
//     setTimeout(() => {
//       setScreenLoading(false);
//     }, 7000);
//   }, []);
//   return (
//     <div>
//       {screenLoading ? (
//         <Preloader />
//       ) : (
//         <Router>
//           <Routes>
//             <Route path="/search" element={<Searchpokemon />} />
//             <Route path="/" element={<MainOne />} />
//           </Routes>
//         </Router>
//       )}
//     </div>
//   );
// };

// export default App;
