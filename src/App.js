import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutSite from "./layouts/LayoutSite";
import RouterPublic from "./router/RouterPublic";
import RouterPrivate from "./router/RouterPrivate";
import LayoutAdmin from "./layouts/LayoutAdmin";

//function component


function App() {
  return (
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutSite />}>
        {RouterPublic.map(function(route,index){
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page/>} />
        })}
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
        {RouterPrivate.map(function(route,index){
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page/>} />
        })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;