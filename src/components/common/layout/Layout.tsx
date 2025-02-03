import { Outlet } from "react-router-dom";
import Header from "../header";
import Sidebar from "../sidebar";

const Layout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default Layout;
