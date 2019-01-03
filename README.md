![Screenshot](https://github.com/TheEducatedPickle/HTML-Generator-React/blob/master/screenshots/sample1.PNG?raw=true)
# HTML Builder
HTML Builder is a tool designed to introduce aspiring web developers to HTML by providing a user friendly interface for building HTML documents.
It features a complete GUI built with React.js and Material UI.

# Structure
The user interface can be split into two sections: Input and Output. Internally, HTMLGenerator stores data as a tree of HTMLElements, each of which contain data for a single element, such as block type, attributes, text, etc. This tree is modified by App.js, which receives events from the Input partition.

The output HTML file is rendered by util/InputTreeToHTML.js, which traverses the tree by depth first. When it reaches a new element in a tree, it generates formatting for that element based on its attributes. For example, the depth of a tree element corresponds to the amount of tabs that need to be applied to the left of the element. This generated string is then fed to components/Output.js via TextToHTML.js.

The input component is rendered in a similar fashion, because it mimics a HTML document by design. It is essentially a HTML list of InputElements that pulls styling attributes from tree properties. It traverses the tree by depth first, and maps each HTMLElement to an InputElement. Each InputElement contains subcomponents, such as text fields and selectors, that are responsible for sending data to App.js to modify the HTMLElement it is mapped to.