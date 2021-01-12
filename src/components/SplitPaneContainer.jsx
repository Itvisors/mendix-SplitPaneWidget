import { Component, createElement } from "react";
import SplitPane from "react-split-pane";

export class SplitPaneContainer extends Component {
    constructor(props) {
        super(props);

        this.handleDragFinished = this.handleDragFinished.bind(this);
    }
    render() {
        const { minSizePrimary, minSizeSecondary, sizeAttr } = this.props;
        if (sizeAttr && sizeAttr.status !== "available") {
            return null;
        }
        if (sizeAttr && sizeAttr.status === "available" && sizeAttr.readOnly) {
            console.warn("SplitPaneWidget: Property sizeAttr is readonly");
            return null;
        }
        const minSize = minSizePrimary > 0 ? minSizePrimary : 0;

        // Negative value sets minimum size for the right or bottom pane. Don't bother the Mendix developer with that,
        // they can just set a minimum value for the right/bottom container.
        const maxSize = minSizeSecondary > 20 ? -minSizeSecondary : -20;

        let sizeValue = sizeAttr?.value ? Number(sizeAttr.value) : 0;
        if (sizeValue === 0) {
            sizeValue = this.props.defaultSize;
        }
        if (sizeValue < minSize) {
            sizeValue = minSize;
        }

        const className = "splitpane-container " + this.props.class;
        return (
            <div className={className} style={{ height: this.props.height }}>
                <SplitPane
                    split={this.props.splitType}
                    defaultSize={sizeValue + "px"}
                    minSize={minSize}
                    maxSize={maxSize}
                    onDragFinished={this.handleDragFinished}
                >
                    {this.getPaneContent(this.props.primaryContent, this.props.primaryContentPreview)}
                    {this.getPaneContent(this.props.secondaryContent, this.props.secondaryContentPreview)}
                </SplitPane>
            </div>
        );
    }

    handleDragFinished(newSize) {
        const { sizeAttr, onChangeAction } = this.props;
        // console.info("SplitPaneContainer handleDragFinished new size: " + newSize);
        if (sizeAttr) {
            sizeAttr.setTextValue("" + newSize);
            if (onChangeAction && onChangeAction.canExecute && !onChangeAction.isExecuting) {
                onChangeAction.execute();
            }
        }
    }

    getPaneContent(content, contentPreview) {
        const className = "splitpane-content " + this.props.splitType + "-pane";
        if (this.props.isPreview) {
            const ContentRenderer = contentPreview.renderer;
            return (
                <ContentRenderer>
                    <div className={className} />
                </ContentRenderer>
            );
        } else {
            return <div className={className}>{content}</div>;
        }
    }
}
