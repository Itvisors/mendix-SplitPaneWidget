import { Component, createElement } from "react";
import { SplitPaneContainer } from "./components/SplitPaneContainer";

export class preview extends Component {
    render() {
        const { defaultSize, minSize, maxSize, primaryContent, secondaryContent } = this.props;
        return (
            <SplitPaneContainer
                isPreview
                class={this.props.class}
                splitType={this.props.splitType}
                defaultSize={defaultSize ? defaultSize : 400}
                minSize={minSize ? minSize : 0}
                maxSize={maxSize ? maxSize : 0}
                primaryContentPreview={primaryContent}
                secondaryContentPreview={secondaryContent}
            />
        );
    }
}

export function getPreviewCss() {
    return require("./ui/SplitPaneWidget.css");
}
