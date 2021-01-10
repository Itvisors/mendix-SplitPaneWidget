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
                height={this.props.height}
                defaultSize={this.props.defaultSize}
                sizeAttr={this.props.sizeAttr}
                minSizePrimary={this.props.minSizePrimary}
                minSizeSecondary={this.props.minSizeSecondary}
                primaryContent={this.props.primaryContent}
                secondaryContent={this.props.secondaryContent}
                onChangeAction={this.props.onChangeAction}
            />
        );
    }
}
