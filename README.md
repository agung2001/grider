# Image Gallery

![Image Gallery Screenshot](screenshot.png)

This project is a simple, responsive image gallery that dynamically loads images from a specified directory. The gallery is built with HTML, CSS, and JavaScript, and it features an automated script to update the image list.

## Features

- **Responsive Grid Layout:** The gallery uses a CSS Grid to create a responsive layout that adjusts the number of columns based on the viewport width and zoom level.
- **Dynamic Image Loading:** Images are loaded dynamically from a `gallery.json` file, which is generated automatically.
- **Automated Image List:** A Node.js script is included to automatically generate the `gallery.json` file by reading the contents of the `gallery` directory.

## Project Structure

```
.
├── gallery/
│   ├── (image files)
├── gallery.json
├── generate-gallery-json.js
├── index.html
├── script.js
└── style.css
```

- **`index.html`:** The main HTML file that contains the structure of the gallery.
- **`style.css`:** The stylesheet that defines the responsive grid layout and other visual styles.
- **`script.js`:** The JavaScript file that fetches the image list from `gallery.json`, dynamically creates the image elements, and adjusts the number of columns based on the zoom level.
- **`generate-gallery-json.js`:** A Node.js script that generates the `gallery.json` file.
- **`gallery.json`:** A JSON file containing a list of image paths.
- **`gallery/`:** The directory where the image files are stored.

## Setup and Usage

1.  **Prerequisites:** Make sure you have [Node.js](https://nodejs.org/) installed on your system.

2.  **Add Images:** Place your image files in the `gallery/` directory.

3.  **Generate Image List:** Run the following command in your terminal to generate the `gallery.json` file:

    ```bash
    node generate-gallery-json.js
    ```

4.  **View Gallery:** Open the `index.html` file in your web browser to view the gallery.

## How to Add New Images

1.  Add the new image files to the `gallery/` directory.
2.  Run the `generate-gallery-json.js` script again to update the `gallery.json` file:

    ```bash
    node generate-gallery-json.js
    ```

3.  Refresh the `index.html` page in your browser to see the updated gallery.
