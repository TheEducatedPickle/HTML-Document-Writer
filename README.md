# HTML Builder
HTML Builder is a tool designed to introduce aspiring web developers to HTML by providing a user friendly method for building HTML documents.
It features a complete GUI built with React.js and Material UI.

# Structure
User input is stored as a tree of HTMLElements, which contain data for a single element, such as block type, attributes, text, etc. The output HTML file is rendered by util/InputTreeToHTML.js, which traverses the tree by depth first. When it reaches a new element in a tree, it generates formatting for that element based on block type, assigned attributes, tree depth, content, and children. For example, the depth of a tree element corresponds to the amount of tabs that need to be applied to the left of the element. This generated string is then fed to components/Output.js via TextToHTML.js.