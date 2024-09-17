
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Single from "./component/Single";
import Category from "./component/Category"
// import Singel from "./component/singel";
function App() {
  return (
<>
<BrowserRouter>
<Header/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Single/:id" element={<Single/>}/>
<Route path="/Category:id" element={<Category/>} />
</Routes>
<Footer/>
</BrowserRouter>
</>
  );
}

export default App;
