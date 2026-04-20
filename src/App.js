import React, { useState } from 'react';
import './App.css';

function App() {
  const [passcode, setPasscode] = useState('');
  const [showNextPage, setShowNextPage] = useState(false);
  const [showThirdPage, setShowThirdPage] = useState(false);
  const [showCakePage, setShowCakePage] = useState(false);
  const [showLettersPage, setShowLettersPage] = useState(false);
  const [showPhotosPage, setShowPhotosPage] = useState(false);

  const handleKeyClick = (key) => {
    if (key === '*') {
      setPasscode(''); // Clear
      return;
    }
    if (key === '#') {
      setPasscode(passcode.slice(0, -1)); // Backspace
      return;
    }
    if (passcode.length < 4) {
      setPasscode(passcode + key);
    }
  };

  if (showCakePage) {
    return (
      <div className="cake-page-container">
        <h1 className="cake-title">Aru's Birthday Cake</h1>

        <div className="cake-main-content">
          <div className="side-puzzles left">
            <img src="/2h.png" alt="Hearts" className="puzzle-icon" style={{ width: "400px", height: "auto" }} />
            <div className="message-bubble bubble-1">
              <p>I will always love you no matter what</p>
            </div>
            <div className="message-bubble bubble-2">
              <p>You are the best part of my life</p>
            </div>
          </div>

          <div className="cake-frame">
            <div className="wavy-border" >
              <video src="/cake5.webm" className="main-cake" autoPlay loop muted controls style={{ width: "250px", height: "auto" }} />
            </div>
          </div>

          <div className="side-puzzles right">
            <div className="dangling-hearts-container">
              <img src="/face.png" alt="Dangling Hearts" className="puzzle-icon dangling" style={{ width: "200px", height: "200px" }} />
            </div>
            <div className="message-bubble bubble-3">
              <p>You will forever be my only option.</p>
            </div>
            <div className="message-bubble bubble-4">
              <p>I can't imagine a life without you!!!</p>
            </div>
          </div>
        </div>

        <button className="cake-click-me" onClick={() => setShowCakePage(false)}>Click me!</button>
      </div>
    );
  }

  if (showLettersPage) {
    return (
      <div className="letters-page-container">
        <h1 className="letters-title">Words from my <span className="underline">Heart</span></h1>

        <div className="notebook-container">
          <div className="notebook-paper">
            <div className="paper-content">
              <p>Happiest birthday baby,</p>
              <p>you make my life so meaningful</p>
              <p>and I am so lucky to have you</p>
              <p>as my valentine this year. I love</p>
              <p>you wholeheartedly and I can't</p>
              <p>wait to continue loving you for</p>
              <p>the rest of my life. I know I tell</p>
              <p>you this everyday but you are</p>
              <p>literally the most beautiful girl</p>
              <p>I know. Anyways, I love you.</p>
              <p>wait to continue loving you for</p>
              <p>the rest of my life. I know I tell</p>
              

              <p className="signature">Always, Forever</p>
            </div>
          </div>
        </div>

        <img src="/cat1.png" alt="Cute Cat" className="letter-cat" style={{ position: 'absolute', bottom: '20px', right: '-40px', width: '500px', height: 'auto', zIndex: 15, animation: 'floatCard 6s ease-in-out infinite' }} />
        <div className="right-decorations">
          <img src="/flow5.png" alt="Flowers" className="decor-flower" style={{ position: 'absolute', bottom: '20px', right: '-40px', width: '500px', height: 'auto', zIndex: 15, animation: 'floatCard 6s ease-in-out infinite' }} />
        </div>
        <img src="/pic14.png" alt="Decorative Pic" style={{ position: 'absolute', bottom: '50px', right: '5%', width: '350px', zIndex: 16, animation: 'floatCard 5s ease-in-out infinite' }} />

        <button className="cake-click-me" onClick={() => setShowLettersPage(false)}>Click me!</button>
      </div>
    );
  }

  if (showPhotosPage) {
    return (
      <div className="photos-page-container">
        {/* Cartoon decorations */}
        <img src="/cat1.png" alt="Cute Cat" style={{ position: 'absolute', bottom: '20px', left: '5%', width: '250px', zIndex: 1, animation: 'floatCard 6s ease-in-out infinite' }} />
        <img src="/2h.png" alt="Hearts" style={{ position: 'absolute', top: '30px', right: '5%', width: '150px', zIndex: 1, animation: 'floatFlower 4s ease-in-out infinite' }} />
        <img src="/back2.png" alt="Cute Decoration" style={{ position: 'absolute', bottom: '50px', right: '0', width: '350px', zIndex: 1, animation: 'floatCard 5s ease-in-out infinite' }} />

        <div className="photos-content" style={{ zIndex: 10, position: 'relative' }}>
          <div className="vertical-photo-strip">
            <div className="photo-frame">
              <img src="/diw5.jpeg" alt="Sunset" />
            </div>
            <div className="photo-frame">
              <img src="/diw2.jpeg" alt="Couple" />
            </div>
            <div className="photo-frame">
              <img src="/pink2.jpeg" alt="Flowers" />
            </div>
            <div className="strip-footer">
              <p>LOVE ❤️</p>
            </div>
          </div>

          <div className="letter-envelope-container">
            <div className="floating-icons">
              <span className="floating-love"></span>
              <span className="floating-hearts"></span>
            </div>
            <div className="envelope">
              <div className="envelope-top"></div>
              <div className="envelope-body"></div>
              <div className="envelope-paper">
                <p>You are closer than I thought and that appeals I always love you. I just want you to know that I'm really happy with you and I want to keep choosing you every single day. I love you more than you can ever know.</p>
              </div>
              <div className="envelope-seal">❤️</div>
            </div>
          </div>

          {/* Second vertical photo strip */}
          <div className="vertical-photo-strip" style={{ transform: 'rotate(3deg)' }}>
            <div className="photo-frame">
              <img src="/pic19.jpeg" alt="Sunset" />
            </div>
            <div className="photo-frame">
              <img src="/pic20.jpeg" alt="Couple" />
            </div>
            <div className="photo-frame">
              <img src="/pic18.jpeg" alt="Flowers" />
            </div>
            <div className="strip-footer">
              <p>LOVE ❤️</p>
            </div>
          </div>

        </div>

        <button className="back-button" onClick={() => setShowPhotosPage(false)}>BACK</button>
      </div>
    );
  }

  if (showThirdPage) {
    return (
      <div className="third-page-container">
        <h1 className="presents-title">Click to open your presents!</h1>
        <p className="presents-subtitle">Hope you like them hehe</p>

        <div className="gifts-row">
          <img src="/gift5.webp" alt="Gift 1" className="gift-icon" style={{ width: "400px", height: "auto" }} onClick={() => setShowCakePage(true)} />
          <img src="/gift4.webp" alt="Gift 2" className="gift-icon" style={{ width: "400px", height: "auto" }} onClick={() => setShowLettersPage(true)} />
          <img src="/gift3.webp" alt="Gift 3" className="gift-icon" onClick={() => setShowPhotosPage(true)} />
        </div>
      </div>
    );
  }

  if (showNextPage) {
    return (
      <div className="next-page-container">
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img src="/Gemini_Generated_Image_z015v1z015v1z015.png" alt="Happy Birthday Card" className="full-birthday-card" style={{ width: "1200px", height: "auto" }} />
          <img src="/pic1.png" alt="Girl in Black Dress" style={{ position: 'absolute', bottom: '6px', right: '-10px', width: '500px', height: 'auto', zIndex: 15, animation: 'floatCard 6s ease-in-out infinite' }} />
          <img src="/pin16.png" alt="Cute Anime Girl" style={{ position: 'absolute', top: '-250px', right: '-350px', width: '400px', zIndex: 10, animation: 'floatCard 5s ease-in-out infinite' }} />
          <img src="/pin17.png" alt="Cute Anime Girl" style={{ position: 'absolute', top: '550px', right: '1200px', width: '400px', zIndex: 10, animation: 'floatCard 5s ease-in-out infinite' }} />
          <img src="/pin21.png" alt="Cute Anime Girl" style={{ position: 'absolute', top: '-350px', right: '1000px', width: '500px', zIndex: 10, animation: 'floatCard 5s ease-in-out infinite' }} />
          <button className="proceed-button" onClick={() => setShowThirdPage(true)} style={{ position: 'absolute', bottom: '6px', right: '-10px', width: '400px', height: 'auto', zIndex: 15, animation: 'floatCard 6s ease-in-out infinite' }}>Click me ➔ </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container" style={{ position: 'relative' }}>
      {/* Cartoon decoration for home page bottom right */}
      <img src="/pin1.png" alt="Cute Anime Girl" style={{ position: 'absolute', bottom: '-20px', left: '400px', width: '200px', zIndex: 10, animation: 'floatCard 5s ease-in-out infinite' }} />
      <img src="/pin2.png" alt="Cute Anime Girl" style={{ position: 'absolute', bottom: '-20px', left: '-10px', width: '200px', zIndex: 10, animation: 'floatCard 5s ease-in-out infinite' }} />
      <img src="/pin3.png" alt="Cute Anime Girl" style={{ position: 'absolute', top: '-20px', left: '-10px', width: '200px', zIndex: 10, animation: 'floatCard 5s ease-in-out infinite' }} />
      <img src="/pin4.png" alt="Cute Anime Girl" style={{ position: 'absolute', top: '-20px', right: '-10px', width: '200px', zIndex: 10, animation: 'floatCard 5s ease-in-out infinite' }} />
      <div className="content-wrapper">
        <div className="left-section">
          <div className="polaroid">
            <img src="https://png.png tree.com/png-clipart/20231004/original/pngtree-light-blue-ribbon-png-image_13117816.png" alt="Bow" className="floating-bow" style={{ width: "250px", height: "auto" }} />
            <img src="/frontpic.jpeg" alt="Couple" className="polaroid-image" style={{ width: "300px", height: "auto" }} />
            <img src="https://imgs.search.brave.com/QYcFjKQBV7PAdfc7cPmX1zZEEY1aWhjDkCzuHzXvLGA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTYv/NjEzLzMzNy9zbWFs/bC92YWxlbnRpbmUt/ZGF5LXdoaXRlLXRl/ZGR5LWJlYXItaXMt/c2V0dGluZy13aXRo/LXJlZC1yb3NlLWlz/LWlzb2xhdGVkLW9u/LXRyYW5zcGFyZW50/LWJhY2tncm91bmQt/ZnJlZS1wbmcucG5n" alt="Teddy Bear" className="floating-teddy" style={{ width: "350px", height: "auto" }} />
          </div>
        </div>

        <div className="right-section">
          <h2 className="passcode-title">Entre a passcode</h2>
          <div className="passcode-boxes">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="passcode-box">
                {passcode[i] ? '*' : ''}
              </div>
            ))}
          </div>

          <div className="keypad">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((key) => (
              <button key={key} className="key-button" onClick={() => handleKeyClick(key)}>
                {key}
              </button>
            ))}
          </div>

          {passcode === '0507' ? (
            <button className="next-button" onClick={() => setShowNextPage(true)}>
              Next ➔
            </button>
          ) : (
            <p className="hint-text">hint- its our anniversary</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
