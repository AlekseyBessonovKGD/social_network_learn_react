import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Friends from "./components/Friends/Friends";
import News from "./components/News/News";
import Settings_list from "./components/Settings_list/Settings_list";
import Games from "./components/Games/Games";
import Music from "./components/Music/Music";

function App() {
  return (
    <BrowserRouter>
      <div className="my-app">
        <Header />;
        <NavBar />;
        <div className="color-them">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings_list />} />
            <Route path="/games" element={<Games />} />
            <Route path="/music" element={<Music />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
