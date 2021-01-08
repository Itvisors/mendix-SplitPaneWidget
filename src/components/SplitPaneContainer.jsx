import { Component, createElement } from "react";
import SplitPane from "react-split-pane";

export class SplitPaneContainer extends Component {
    render() {
        const { minSizePrimary, minSizeSecondary, size } = this.props;
        if (size && size.status !== "available") {
            return null;
        }
        if (size && size.status === "available" && size.readOnly) {
            console.warn("SplitPaneWidget: Property size is readonly");
            return null;
        }
        const sizeValue = size?.value ? Number(size.value) : this.props.defaultSize;

        const minSize = minSizePrimary > 0 ? minSizePrimary : 0;
        // Negative value sets minimum size for the right or bottom pane. Don't bother the Mendix developer with that,
        // they can just set a minimum value for the right/bottom container.
        const maxSize = minSizeSecondary > 20 ? -minSizeSecondary : -20;

        const className = "splitpane-container " + this.props.class;
        return (
            <div className={className}>
                <SplitPane
                    split={this.props.splitType}
                    defaultSize={sizeValue + "px"}
                    minSize={minSize}
                    maxSize={maxSize}
                >
                    {this.getPaneContent(this.props.primaryContent, this.props.primaryContentPreview)}
                    {this.getPaneContent(this.props.secondaryContent, this.props.secondaryContentPreview)}
                </SplitPane>
            </div>
        );
    }

    getPaneContent(content, contentPreview) {
        if (this.props.isPreview) {
            const ContentRenderer = contentPreview.renderer;
            return (
                <ContentRenderer>
                    <pane className="splitpane-content" />
                </ContentRenderer>
            );
        } else {
            return <pane className="splitpane-content">{content}</pane>;
        }
    }
}
