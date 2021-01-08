import { Component, createElement } from "react";
import { SplitPaneContainer } from "./components/SplitPaneContainer";

export class preview extends Component {
    render() {
        const { defaultSize, minSizePrimary, minSizeSecondary, primaryContent, secondaryContent } = this.props;
        return (
            <SplitPaneContainer
                isPreview
                class={this.props.class}
                splitType={this.props.splitType}
                defaultSize={defaultSize ? defaultSize : 400}
                minSizePrimary={minSizePrimary ? minSizePrimary : 0}
                minSizeSecondary={minSizeSecondary ? minSizeSecondary : 20}
                primaryContentPreview={primaryContent}
                secondaryContentPreview={secondaryContent}
            />
        );
    }
}

export function getPreviewCss() {
    return require("./ui/SplitPaneWidget.css");
}
