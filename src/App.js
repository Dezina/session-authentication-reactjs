import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer></ToastContainer>
    
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route exact path="/Page2" component={Page2} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
