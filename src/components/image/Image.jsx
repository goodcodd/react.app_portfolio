import {Component} from "react";


export default class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: props.src,
            alt: props.alt,
            className: props.className
        }
    }

    render() {
        const {src, alt, className} = this.state;
        return (
            <img alt={alt} className={className} src={src}/>
        );
    }
}