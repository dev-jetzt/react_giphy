import React from 'react';
import './App.css';

import SizePicker from './SizePicker';
import HistoryItem from './HistoryItem';

interface IState {
  input: string;
  content: string;
  history: string[];
  currentSize: string;
  currentUrl: string | null;
}

// Check https://source.unsplash.com/ for the documentation

// Create a component for a picture size picker (e.g. 800x600, 1600x900 ... WIDTHxHEIGHT)

// Keep and display the image the search history. Hint: use a list of urls

// Create a component that displays the image and has a button to remove it from the history.

export default class App extends React.Component<{}, IState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      input: '',
      content: '',
      history: [],
      currentSize: '800x600',
      currentUrl: null
    };
  }
  
  public componentDidMount() {
    this.setState({
      input: '',
      content: ''
    });
  }

  private onSizeChanged = (size: string) => {
    this.setState({
      currentSize: size
    });
  }

  private get url() {
    const { content, currentSize } = this.state;

    if (content !== '') {
      const words = content.split(' ').join(',');
      // es6 template literals
      return `https://source.unsplash.com/${currentSize}/?${words}`;
    }

    return null;
  }

  private search = () => {
    this.setState({...this.state, content: this.state.input}, () => {
      // this needs to be done, because this.url needs that content is finally set in the state
      const url = this.url;

      // check for duplicates
      if (url && !this.state.history.includes(url)) {
        // add url to the history
        this.state.history.push(url);

        this.setState({
          currentUrl: url!,
          history: this.state.history
        });
      }
    });
  }

  private onUrlRemove = (url: string) => {
    this.setState({
      history: this.state.history.filter(historyItem => historyItem !== url)
    });
  }

  public render() {
    return <div className="App">
      <header className="App-header">
        <p>
          {this.state.history.map((historyItem) => <HistoryItem key={historyItem} url={historyItem} onUrlRemove={this.onUrlRemove}></HistoryItem>)}
          <br/>
          <SizePicker size={this.state.currentSize} onSizeChanged={this.onSizeChanged} />
          <input type="text" value={this.state.input}
            onChange={(e) => this.setState({...this.state, input: e.target.value}) }
            onKeyDown={(e) => { if (e.keyCode === 13) this.search() }}
          ></input>
          <input type="button" value="Search" onClick={() => this.search()}></input>
        </p>
        <div>
          {this.state.currentUrl && <img alt={this.state.content} src={this.state.currentUrl} />}
        </div>
      </header>
    </div>;
  }
};
