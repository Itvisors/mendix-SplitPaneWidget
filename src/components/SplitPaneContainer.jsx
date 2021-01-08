import { Component, createElement } from "react";
import SplitPane from "react-split-pane";

export class SplitPaneContainer extends Component {
    render() {
        // const { minSize, size } = this.props;
        // if (size && size.status !== "available") {
        //     return null;
        // }
        // if (size && size.status === "available" && size.readOnly) {
        //     console.warn("SplitPaneWidget: Property size is readonly");
        //     return null;
        // }
        // const sizeValue = size?.value ? Number(size.value) : undefined;
        /**
                    defaultSize={this.props.defaultSize}
                    size={sizeValue}
                    minSize={minSize > 0 ? minSize : undefined}
                    maxSize={this.props.maxSize}

        */

        const className = "splitpane-container " + this.props.class;
        return (
            <div className={className}>
                <SplitPane
                    split={this.props.splitType}
                    defaultSize={this.props.defaultSize + "px"}
                    maxSize={this.props.maxSize + "px"}
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
                    <div className="splitpane-content" />
                </ContentRenderer>
            );
        } else {
            return <div className="splitpane-content">{content}</div>;
        }
    }
}
