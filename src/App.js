import FooterComponent from './components/Footer/FooterComponent.js';
import HeaderComponent from './components/Header/HeaderComponent.js';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <Outlet />
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
