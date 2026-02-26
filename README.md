# JavaScript Questions


### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
1. **getElementById()**
- It is a DOM method used to select a single HTML element by its unique id.
- Selects only one element and the id must be unique.
- Returns a single element object.
2. **getElementByClassName()**
- It selects all elements that have a specific class name.
- Selects multiple elements.
- Returns an HTML Collection.
3. **querySelector()**
- It selects the first element that matches a css selector.
- Uses css selector syntax.
- Returns only the first matching element.
4. **querySelectorAll()**
- It selects all elements that match a css selector.
- Uses css selector syntax.
- Returns all matching elements(NodeList).

### 2.  How do you create and insert a new element into the DOM?
To create and insert a new element into the DOM, we follow a three-step process.
- We use document.createElement() to create the element.
- We modify its content or attributes.
- We insert it using methods like append(), appendChild(), or insertBefore().

### 3. What is Event Bubbling? And how does it work?
Event Bubbling is a process where an event starts from the target element and then moves upward to its parent elements.
Event Bubbling works by spreading an event from the target element upward through its parent elements in the DOM hierarchy. 

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a process where a parent element handles events for its child elements using event bubbling.
It is useful because it improves performance, increases memory efficiency, handles dynamic elements and keeps the code cleaner.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
1. **preventDefault()**
- Stops the browser's default behavior.
- It does not stop event bubbling.
2. **stopPropagation()**
- Stops the event from bubbling(moving up to parent elements).
- It stops event bubbling.