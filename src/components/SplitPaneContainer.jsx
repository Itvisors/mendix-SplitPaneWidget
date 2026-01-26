import { Pane, SplitPane } from "react-split-pane";
import { createElement, useCallback } from "react";

export function SplitPaneContainer(props) {
    const { minSizePrimary, minSizeSecondary, sizeAttr, onChangeAction } = props;

    const handleDragFinished = useCallback(
        newSizes => {
            // console.info("SplitPaneContainer handleDragFinished new sizes: " + newSizes[0] + " / " + newSizes[1]);
            if (sizeAttr) {
                sizeAttr.setTextValue("" + newSizes[0]);
                if (onChangeAction && onChangeAction.canExecute && !onChangeAction.isExecuting) {
                    onChangeAction.execute();
                }
            }
        },
        [sizeAttr, onChangeAction]
    );

    const getPaneContent = useCallback(
        (content, direction, contentPreview) => {
            const className = "splitpane-content " + direction + "-pane";
            if (props.isPreview) {
                const ContentRenderer = contentPreview.renderer;
                return (
                    <ContentRenderer>
                        <div className={className} />
                    </ContentRenderer>
                );
            }
            return <div className={className}>{content}</div>;
        },
        [props.isPreview]
    );

    // The default divider has element style width: 10px that prevented the divider from showing unless hovered over.
    // This custom divider may be removed if that issue is fixed in a newer release of the library.
    function getCustomDivider(dividerProps) {
        const { direction, isDragging, disabled, onMouseDown, onTouchStart, onTouchEnd, onKeyDown } = dividerProps;

        return (
            <div
                role="separator"
                aria-orientation={direction === "horizontal" ? "vertical" : "horizontal"}
                tabIndex={disabled ? -1 : 0}
                className={`split-pane-divider ${direction}${isDragging ? " dragging" : ""}`}
                onMouseDown={disabled ? undefined : onMouseDown}
                onTouchStart={disabled ? undefined : onTouchStart}
                onTouchEnd={disabled ? undefined : onTouchEnd}
                onKeyDown={disabled ? undefined : onKeyDown}
            />
        );
    }

    if (sizeAttr && sizeAttr.status !== "available") {
        return null;
    }
    if (sizeAttr && sizeAttr.status === "available" && sizeAttr.readOnly) {
        console.warn("SplitPaneWidget: Property sizeAttr is readonly");
        return null;
    }

    const minSizePrimaryValue = minSizePrimary > 0 ? minSizePrimary : 0;
    const minSizeSecondaryValue = minSizeSecondary > 20 ? minSizeSecondary : 20;

    let sizeValue = sizeAttr?.value ? Number(sizeAttr.value) : 0;
    if (sizeValue === 0) {
        sizeValue = props.defaultSize;
    }
    if (sizeValue < minSizePrimaryValue) {
        sizeValue = minSizePrimaryValue;
    }

    // After the rewrite for v3 the new direction property is opposite of the old split type.
    // To avoid rework we reverse the value here
    const direction = props.splitType === "vertical" ? "horizontal" : "vertical";

    const className = "splitpane-container " + props.class;

    return (
        <div className={className} style={{ height: props.height }}>
            <SplitPane direction={direction} divider={getCustomDivider} onResizeEnd={handleDragFinished}>
                <Pane defaultSize={sizeValue + "px"} minSize={minSizePrimaryValue} size={sizeValue}>
                    {getPaneContent(props.primaryContent, direction, props.primaryContentPreview)}
                </Pane>
                <Pane minSize={minSizeSecondaryValue}>
                    {getPaneContent(props.secondaryContent, direction, props.secondaryContentPreview)}
                </Pane>
            </SplitPane>
        </div>
    );
}
