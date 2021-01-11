## SplitPaneWidget
Split pane widget. Split your page in panes, allowing the user to drag the splitter to resize the panes.

The platform used to have one but it got removed in Mendix 7, without a proper replacement.

## Features
- Draggable divider to change the splitter position
- Horizontal and vertical
- Works with and without context object
- To allow saving the preferred divider position, place widget in a dataview and configure an attribute to hold the splitter position
- Call an action after the divider has been moved
- Each pane can be scrolled separately, vertical scrollbar will appear automatically if content is higher than pane size 
- Configure minimum sizes for each pane.
- Multiple split panes can be nested to create an IDE style page

## Limitations
- Mendix does not allow just any widget to be placed in the container of a pluggable widget. Unfortunately this also includes datagrid and listview.

## Usage
- Place the widget on the page
- Put content in each panel
- Configure the default divider position.
- Set minimum sizes! Without these, the contents can be squeezed beyond breaking point, causing content to 'escape' the container or render incorrectly. So a sensible minimum, depending on your content, is crucial.

To simulate hiding a pane, place the contents in snippets and use conditional visibility to either show the split pane or just the contents of one of the split panes 

## Save the divider position
- Place the widget in a dataview
- The default size is the starting point.
- Configure a size attribute that will hold the divider position
- Configure the on change action. Note that a commit usually is sufficient

The on change action is optional, but if you don't configure it, commit the context object somewhere in your logic or use a save button on the page.

## Borders
The widget combines nicely with card classes to show a border around each pane. Put a small right spacing on the first (left) card container and a small left spacing on the second (right) card container to leave some space between the cards and the divider.

Use class `max-height` on the widget and `content-max-height` on each card container to make it use up all vertical space. This ensures that both cards extend to the full height of the split pane. 

## Layout grids
Place the widget on the page and put the layout grid inside the widget, not the other way around. If you place the widget in a layout grid and then nest another layout grid in the split planes, double scrollbars may occur. Placing the split pane as first element on the page prevents this.

## Issues, suggestions and feature requests
[link to GitHub issues](https://github.com/Itvisors/mendix-SplitPaneWidget/issues)

