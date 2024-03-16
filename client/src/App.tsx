import "./App.css";
import UserInfo from "./components/UserInfo";
import Login from "./components/Login";
import NavbarComponent from "./components/NavbarComponent";

const App = () => {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <Login />
      <UserInfo />
    </>
  );
};

export default App;
