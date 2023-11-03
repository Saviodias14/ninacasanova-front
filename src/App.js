import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { useState } from "react";
import SideBarContext from "./context/sidebar";
import GiftList from "./Pages/GiftListPage";

function App() {
  const [showSideBar, setShowSideBar] = useState(false)
  return (
    <SideBarContext.Provider value = {{showSideBar, setShowSideBar}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/list" element={<GiftList/>} />
        </Routes>
      </BrowserRouter>
    </SideBarContext.Provider>
  );
}

export default App;
