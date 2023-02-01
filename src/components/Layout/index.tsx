import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <p>ProjectUkraine test</p>
    </header>
    <main className="App-main">
      <Outlet />
    </main>
    <footer className="App-footer">
      <img
        alt="User Avatar"
        src="https://avatars.githubusercontent.com/u/9919?v=4"
        className="git-img"
      />
      <a href="https://github.com/arybary">Medvid Rostislav</a>
    </footer>
  </div>
);

export default Layout;
