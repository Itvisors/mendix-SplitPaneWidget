import { Component, createElement } from "react";
import { Pane, SplitPane } from "react-split-pane";

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
        const minSizePrimaryValue = minSizePrimary > 0 ? minSizePrimary : 0;

        // Negative value sets minimum size for the right or bottom pane. Don't bother the Mendix developer with that,
        // they can just set a minimum value for the right/bottom container.
        const minSizeSecondaryValue = minSizeSecondary > 20 ? minSizeSecondary : 20;

        let sizeValue = sizeAttr?.value ? Number(sizeAttr.value) : 0;
        if (sizeValue === 0) {
            sizeValue = this.props.defaultSize;
        }
        if (sizeValue < minSizePrimaryValue) {
            sizeValue = minSizePrimaryValue;
        }

        // After the rewrite for v3 the new direction property is opposite of the old split type.
        // To avoid rework we reverse the value here
        const direction = this.props.splitType === "vertical" ? "horizontal" : "vertical";

        const className = "splitpane-container " + this.props.class;
        return (
            <div className={className} style={{ height: this.props.height }}>
                <SplitPane direction={direction} onResizeEnd={this.handleDragFinished}>
                    <Pane defaultSize={sizeValue + "px"} minSize={minSizePrimaryValue} size={sizeValue}>
                        {this.getPaneContent(this.props.primaryContent, this.props.primaryContentPreview)}
                    </Pane>
                    <Pane minSize={minSizeSecondaryValue}>
                        {this.getPaneContent(this.props.secondaryContent, this.props.secondaryContentPreview)}
                    </Pane>
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
