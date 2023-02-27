import {Component} from "react";
export default class Image extends Component {
    render() {
        const {src, alt, className} = this.props;
        return (
            <img alt={alt} className={className} src={src}/>
        );
    }
}