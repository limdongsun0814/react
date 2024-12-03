import { lazy, Suspense, useEffect } from "react";
import Main from "./screens/Main";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

const Header = lazy(() => import("./components/Header"));


function App() {
  // 로그 제거 코드
  if (process.env.NODE_ENV === "production") {
    console = window.console || {};
    console.log = function no_console() {};
    console.warn = function no_console() {};
    console.error = function () {};
  }
  
 

  return (
    <Suspense
      fallback={
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
      }
    >
      <div className="container mx-auto my-10 bg-black App max-w-screen-1g">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/react" element={<Main />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
