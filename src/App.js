import React from 'react';
import logo from './logo.svg';
import "./css/style.css";
function App() {
  return (
    <div className="App">
      <header className="showcase">
        <div className="container">
          <nav>
            <h1 className="logo"> My Website</h1>
            <ul>
              <li><a href="#"></a> Home</li>
              <li><a href="#"></a> About</li>
              <li><a href="#"></a> Services</li>
            </ul>
          </nav>
          <div className="showcase-content">
            <div>
              <h1>Make your Marketing Real</h1>
              <p class="my-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum
             </p>
              <a href="#" class="btn-primary" onClick={() => { alert("Working") }}> JOIN</a>
              <a href="#" class="btn-secondary" onClick={() => { alert("Playing") }}>PLAY</a>
            </div>
            <img
              src="https://www.gstatic.com/webp/gallery3/5_webp_ll.png"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
