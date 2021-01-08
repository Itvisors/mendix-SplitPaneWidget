import { Component, createElement } from "react";

import { SplitPaneContainer } from "./components/SplitPaneContainer";

// eslint-disable-next-line sort-imports
import "./ui/SplitPaneWidget.css";

export default class SplitPaneWidget extends Component {
    render() {
        return (
            <SplitPaneContainer
                isPreview={false}
                class={this.props.class}
                splitType={this.props.splitType}
                defaultSize={this.props.defaultSize}
                size={this.props.size}
                minSize={this.props.minSize}
                maxSize={this.props.maxSize}
                primaryContent={this.props.primaryContent}
                secondaryContent={this.props.secondaryContent}
            />
        );
    }
}
