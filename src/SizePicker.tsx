import React from 'react';

interface IProps {
    size: string;
    onSizeChanged: (size: string) => void;
}

export default class SizePicker extends React.Component<IProps> {
    private sizes: string[];

    constructor(props: IProps) {
        super(props);
        this.sizes = ['800x600', '1600x900'];
    }

    public render() {
        return <select onChange={e => this.props.onSizeChanged(e.target.value)}>
            {this.sizes.map(size => {
                return <option key={size} value={size}>{size}</option>;
            })}
        </select>;
    }
}