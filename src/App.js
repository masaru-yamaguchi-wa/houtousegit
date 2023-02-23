import './App.css'
import { Route, Routes, useLocation } from "react-router-dom"
import { Intro } from "./page/Intro"
import { MainWin } from './page/MainWin';

function App() {
  let location = useLocation();
  return (
    <div className="App">
      <Routes location={location}>
        <Route path="/" element={<Intro></Intro>}></Route>
        <Route path="/main" element={<MainWin></MainWin>}></Route>
      </Routes>
    </div>
  );
}

export default App;
