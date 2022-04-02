## Web Browser

---

The main functionality of a browser is to get the desired result from the web of your choice and request the server to provide the information and display it on the browser window.

## High-level components of a browser

---

1. user interface
2. browser engine
3. rendering engine
4. networking
5. UI backend
6. javascript interpretor
7. data storage

   ![alt text](./layers.png)

## Rendering engine

---

The main use of the rendering engine is to display the requesting data on the browser window.

The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree

The render tree contains rectangles with visual attributes like colour and dimensions. The rectangles are in the right order to be displayed on the screen.

After the construction of the render tree, it goes through a "layout]process. This means giving each node the exact coordinates where it should appear on the screen. The next stage is painting–the render tree will be traversed and each node will be painted using the UI backend layer.

It's important to understand that this is a gradual process. For a better user experience, the rendering engine will try to display contents on the screen as soon as possible. It will not wait until all HTML is parsed before starting to build and layout the render tree. Parts of the content will be parsed and displayed, while the process continues with the rest of the content that keeps coming from the network.

![alt text](./image013.png)

## HTML Parser

---

The job of the HTML parser is to parse the HTML markup into a parse tree.
The output tree (the "parse tree") is a tree of DOM element and attribute nodes. DOM is short for Document Object Model. It is the object presentation of the HTML document and the interface of HTML elements to the outside world like JavaScript.
The root of the tree is the "Document" object.

The DOM has an almost one-to-one relation to the markup. For example:
This markup would be translated to the following DOM tree:

![alt text](./image015.png)

## CSS Parser

---

![alt text](./image023.png)

## Layout

---

When the renderer is created and added to the tree, it does not have a position and size. Calculating these values is called layout or reflow.

HTML uses a flow-based layout model, meaning that most of the time it is possible to compute the geometry in a single pass. Elements later `in the flow'' typically do not affect the geometry of elements that are earlier `in the flow'', so the layout can proceed left-to-right, top-to-bottom through the document. There are exceptions: for example, HTML tables may require more than one pass .

The coordinate system is relative to the root frame. The top and left coordinates are used.

The layout is a recursive process. It begins at the root renderer, which corresponds to the `<html>` element of the HTML document. The layout continues recursively through some or all of the frame hierarchy, computing geometric information for each renderer that requires it.

The position of the root renderer is 0,0 and its dimensions are the viewport–the visible part of the browser window.

All renderers have a "layout" or "reflow" method, each renderer invokes the layout method of its children that need a layout.

## Painting

---

In the painting stage, the render tree is traversed and the renderer's "paint()" method is called to display content on the screen. The painting uses the UI infrastructure component.
This order affects painting since the stacks are painted from back to front. The stacking order of a block renderer is:

1. background-colour
2. background-image
3. border
4. children
5. outline

![alt text](./flow.png)
