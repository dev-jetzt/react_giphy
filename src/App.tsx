import React from 'react';
import './App.css';

interface IState {
  input: string;
  content: string;
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
    };
  }
  
  public componentDidMount() {
    this.setState({
      input: '',
      content: ''
    });
  }

  private get url() {
    const { content } = this.state;

    if (content !== '') {
      const words = content.split(' ').join(',');
      return 'https://source.unsplash.com/800x600/?' + words;
    }

    return null;
  }

  public render() {
    return <div className="App">
      <header className="App-header">
        <p>
          <input type="text" value={this.state.input}
            onChange={(e) => this.setState({...this.state, input: e.target.value}) }
            onKeyDown={(e) => { if (e.keyCode === 13) this.setState({...this.state, content: this.state.input}) }}
          ></input>
          <input type="button" value="Search" onClick={() => this.setState({...this.state, content: this.state.input})}></input>
        </p>
        <div>
          {this.url && <img alt={this.state.content} src={this.url} />}
        </div>
      </header>
    </div>;
  }
};
