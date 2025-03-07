/*

DOM (Document Object Model) is like a blueprint of a webpage that the browser creates when it loads a website.
It turns the HTML code into a tree-like structure, where each element (like headings, paragraphs, buttons)
becomes a node.

------------DOM SELECTORS-----------:
1. Selecting Elements by ID
document.getElementById(id)
Returns a single element with the specified id.
IDs must be unique in an HTML document, so this method always returns one element (or null if not found).
It is the fastest way to find an element.


2. Selecting Elements by Class Name
document.getElementsByClassName(className)
Returns a live collection (HTMLCollection) of elements with the given class name.
If no elements match, it returns an empty collection.
It does not include elements added dynamically after the selection


3. Selecting Elements by Tag Name
document.getElementsByTagName(tagName)
Returns a live collection (HTMLCollection) of all elements with the specified tag name.
Works similarly to getElementsByClassName().
If no elements match, it returns an empty collection.


4. Selecting Elements Using Query Selectors (Modern Approach)
document.querySelector(selector)
Returns the first matching element based on a CSS selector.
Returns null if no match is found.
It can select elements by id, class, tag, or even nested elements.

5. Selecting static node list using querySelectorAll()
document.querySelectorAll(selector)
Returns a static NodeList (not live) of all elements matching the CSS selector.
Unlike getElementsByClassName(), it does not update dynamically when elements are added or removed.

Collection : set of elements
Live collecton : that updates it self automatically
Static Node list : it is static by nature that is cannot be changed

*/