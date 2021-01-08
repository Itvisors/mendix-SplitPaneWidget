import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/SplitPaneWidget.css";

export default class SplitPaneWidget extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
