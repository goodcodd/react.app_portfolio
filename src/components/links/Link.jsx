import {Component} from "react";
import img2 from "../../assets/img/projects/02.jpg";

export default class Link extends Component {
    constructor(props) {
        super(props);
        this.state = {
            href: props.href,
            text: props.text,
            className: props.className,
            target: props.target,
            rel: props.rel
        }
    }

    render() {
        const {href, text, className, rel, target} = this.state;
        return (
            <a href={href} target={target} rel={rel}  className={className}>
                {text}
            </a>
        );
    }
}
