import React from 'react';

interface IProps {
    url: string;
    onUrlRemove: (url: string) => void;
}

export default class HistoryItem extends React.Component<IProps> {
    public render() {
        return <>
            <img width="128" height="128" alt={this.props.url} src={this.props.url}></img>
            <button onClick={() => this.props.onUrlRemove(this.props.url)}>x</button>
        </>;
    }
}