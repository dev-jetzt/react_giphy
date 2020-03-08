import React, { useState } from 'react';
import './App.css';


function App() {

  const [input, setInput] = useState('');
  const [content, setContent] = useState('');
  let url = null;

  if (content !== '') {
    const words = content.split(' ').join(',');
    url = 'https://source.unsplash.com/800x600/?' + words;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <input type="text" value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.keyCode === 13) setContent(input) }}
          ></input>
          <input type="button" value="Search" onClick={() => setContent(input)}></input>
        </p>
        <div>
          {url && <img alt={content} src={url} />}
        </div>
      </header>
    </div>
  );
}

export default App;
