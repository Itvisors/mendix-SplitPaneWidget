## SplitPaneWidget
Split pane widget. The platform used to have one but it got removed in Mendix 7, without a proper replacement.

## Features
- Draggable divider to change the splitter position
- Horizontal and vertical
- Works without context object
- To allow saving the preferred divider position, place widget in a dataview and configure an attribute to hold the splitter position
- Call an action after the divider has been moved
- Each pane can be scrolled separately, vertical scrollbar will appear automatically if content is higher than pane size 
- Configure minimum sizes for each pane.

## Limitations
- Mendix does not allow just any widget to be placed in the container of a pluggable widget. Unfortunately this also includes datagrid and listview.

## Usage
- Place the widget on the page
- Put content in each panel
- Configure the default divider position.
- Set minimum sizes! Without these, the contents can be squeezed beyond breaking point, so a sensible minimum, depending on your content, is crucial.

## Save the divider position
- Place the widget in a dataview
- The default size is the starting point.
- Configure a size attribute that will hold the divider position
- Configure the on change action. Note that a commit usually is sufficient

The on change action is optional, but if you don't configure it, commit the context object somewhere in your logic or use a save button on the page.

## Issues, suggestions and feature requests
[link to GitHub issues](https://github.com/Itvisors/mendix-SplitPaneWidget/issues)

