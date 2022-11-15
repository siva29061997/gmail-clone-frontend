import Emaillist from "./components/Emaillist/Emaillist";
import Login from "./components/Login/Login";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Emaildetails from "./components/Emaildetails/Emaildetails";
import Portal from "./components/Portal/Portal";
import Emailbody from "./components/Emailbody/Emailbody";
import Singup from "./components/singup/Singup";
import Compose from "./components/Compose/Compose";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Singup />} />
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route exact path="list" element={<Emaillist />} />
          <Route path="mail/:id" element={<Emaildetails />} />
          <Route path='list/:id' element={<Compose />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
