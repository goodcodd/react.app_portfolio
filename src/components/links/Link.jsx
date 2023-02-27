import {Component} from "react";
export default class Link extends Component {
    render() {
        const {href, text, className, rel, target} = this.props;
        return (
            <a href={href} target={target} rel={rel}  className={className}>
                {text}
            </a>
        );
    }
}
