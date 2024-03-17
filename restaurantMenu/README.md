# Working with Array Iteration for Restaurant Menu List

## Learning objectives
After completing this lab, you will be able to:

- Understanding DOM manipulation: Gain proficiency in accessing HTML elements and dynamically updating their content using JavaScript. Focus on the getElementById method to precisely alter specific elements within a webpage.

- Array iteration methods: Differentiate between various array iteration methods like map, forEach, and for loops. Observe their distinct functionalities in iterating through arrays and generating structured HTML content.

- Dynamic web content creation: Learn the process of dynamically generating and rendering content on a webpage by using JavaScript to create structured menus based on predefined arrays, emphasizing the dynamic nature of web development.

- Menu section organization: Grasp the concept of organizing webpage content into sections (e.g., breakfast, main course, dessert) by populating HTML elements with data from corresponding JavaScript arrays, facilitating structured and readable webpage layouts.

-cApplication of JavaScript methods: Apply JavaScript methods (map, forEach, getElementById, innerHTML) to manipulate HTML file effectively, showcasing the practical usage of these methods in generating and updating webpage content dynamically based on predefined data.


## Step 01: Setting up the environment


1. Create folder name `restaurantMenu`. Then navigate to the `restaurantMenu` folder, and create a new HTML-file `restaurant_menu.html` and JavaScript-File `restaurant_menu.js`

```bash
mkdir restaurantMenu && cd restaurantMenu
touch restaurant_menu.html
touch restaurant_menu.js
```

2. Create a basic template structure of HTML file by adding the content provided below.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Restaurant Menu</title>
</head>
<body>
 <h1>Restaurant Menu Iteration</h1>
    <h2>Breakfast Menu</h2>
    <div id="breakfastTotalItems"></div>
    <div id="breakfastMenuItems"></div>

    <h2>Main Course Menu</h2>
    <div id="maincourseTotalItems"></div>
    <div id="maincourseMenuItems"></div>

    <h2>Dessert Menu</h2>
    <div id="dessertTotalItems"></div>
    <div id="dessertMenuItems"></div>
    <script src="./restaurant_menu.js"></script>
</body>
</html>
```

- This HTML code provides the structural foundation for displaying a restaurant menu across three sections: breakfast, main course, and dessert. It contains elements such as `<h1>` for the overall title, `<h2>` tags for each menu section, and `<div>` elements with unique IDs (breakfastTotalItems, breakfastMenuItems, maincourseTotalItems, maincourseMenuItems, dessertTotalItems, dessertMenuItems) meant for dynamically displaying menu content.

- However, as of now, there's no actual menu content being populated or displayed dynamically. JavaScript code is needed to generate and insert menu items into the respective `<div>` elements identified by their unique IDs.


## Step 02: Defining variables and map array method

1. In restaurant_menu.js, initialize three arrays named as breakfastMenu, mainCourseMenu, and dessertMenu. Initialize these arrays with the menu items as given in the code below. Include this code in the restaurant_menu.js file.

```js
const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
```

2. Now, we will use for loop and two array methods: map method and forEach method to traverse through these arrays and display the menu items on the HTML page.

3. Firstly, we are going to iterate through the breakfastMenu array using map method. Include the following code in restaurant_menu.js file.

```js
 const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
 document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
 ```

- The provided code converts breakfast menu array items into HTML strings using `map()` and an arrow function to structure each item's HTML format.

- Subsequently, a string concatenation method has been used to join the generated HTML strings into one cohesive string using join ('') to prepare for insertion.

- Finally, this concatenated HTML is dynamically updated within the specific HTML element identified by breakfastMenuItems ID with the concatenated HTML string, dynamically populating the webpage with the breakfast menu items in formatted paragraphs `<p>` tags.


## Step 03: Defining forEach array method and for loop iteration

1. We are going to traverse mainCourseMenu array using forEach array method. For this, include the below code in the restaurant_menu.js file after the previous JavaScript code.

```js
 let mainCourseItem = '';
 mainCourseMenu.forEach((item, index) => {
 mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
 document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;
```

- The variable mainCourseItem is initialized as an empty string (''). This variable will be used to accumulate HTML strings generated for each main course menu item.

- The forEach method loops through each element in the mainCourseMenu array. For each item in the array, the arrow function (item, index) => {…} is executed. Inside the arrow function, an HTML string is composed for each menu item, incorporating the item's content and its corresponding index.

- Then HTML content is updated dynamically by setting the innerHTML property of the HTML element with the ID maincourseMenuItems to the accumulated mainCourseItem string which will insert main course menu items into the specific element within the webpage.

2. Lastly, we will iterate dessertMenu array using for loop iteration. For this include the below code in restaurant_menu.js file after the previous javaScript code.

```js
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
```

- The variable dessertItem is initialized as an empty string (''). This variable serves as a container to accumulate HTML strings generated for each dessert menu item.

- The for loop iterates through the dessertMenu array, starting from index 0 and continuing until reaching the length of the array. For each iteration, an HTML string is created using the current item in the dessertMenu array, including the item's content and its index (i + 1).

- The generated HTML content, composed of individual paragraphs `<p>` containing dessert menu items with their respective indices, is assigned to the inner HTML of the HTML element identified by the ID dessertMenuItems which will insert the dessert menu items into the specific element within the webpage.