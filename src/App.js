import React from 'react';
import './App.scss';
import Info from "./components/pages/Info/Info";
import Main from "./components/pages/Main/Main";
import Interior from "./components/pages/Interior/Interior";
import About from "./components/pages/About/About";
import NewsSlider from "./components/pages/News/NewsSlider";

function App() {
  return (
    <div className="App">
        <Main/>
        <About />
        <div className="Slider__wrapper">
            <NewsSlider />
        </div>
        <Interior />
     <Info />
    </div>
  );
}

export default App;
