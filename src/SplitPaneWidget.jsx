import { SplitPaneContainer } from "./components/SplitPaneContainer";

// eslint-disable-next-line sort-imports
import "./ui/SplitPaneWidget.css";

export default function SplitPaneWidget(props) {
    return (
        <SplitPaneContainer
            isPreview={false}
            class={props.class}
            splitType={props.splitType}
            height={props.height}
            defaultSize={props.defaultSize}
            sizeAttr={props.sizeAttr}
            minSizePrimary={props.minSizePrimary}
            minSizeSecondary={props.minSizeSecondary}
            primaryContent={props.primaryContent}
            secondaryContent={props.secondaryContent}
            onChangeAction={props.onChangeAction}
        />
    );
}
