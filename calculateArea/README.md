# Writing Your First JavaScript Function

## What will you learn
In this lab, you will delve into foundational JavaScript concepts vital for web development. You will learn how to use functions to create an interactive web application that calculates the area of a rectangle based on user-provided values.

## Step 01: Setting up the environment

1. Firstly, you need to clone your main repository. Follow the given steps to clone this repository:

- Perform `git clone` command by writing the given command in the terminal.

```bash
git clone <github-repository-url>
```
> Note: Put your own GitHub repository link instead of `<github-repository-url>`.


- Above step will clone the folder for your GitHub repository under project folder in explorer. You will also have multiple folders inside the cloned folder.

- Now you need to navigate inside the cloned folder. For this write given command in the terminal:

```bash
cd <repository-folder-name>
```
> Note: Write your cloned folder name instead of `<repository-folder-name>`.

2. Now create a new folder called `calculateArea` and navigate inside the new folder to create a new HTML-File called `calculate_Area.html`.

```bash
mkdir calculateArea && cd calculateArea 
touch calculate_Area.html
```

3. Now, create the Javascript file called `calculate_Area.js`.
```bash
touch calculate_Area.js
```

4. Create the basic template structure for calculate_Area.html file by adding the provided content.

Inside the HTML file, create an input form to collect the length and width of the rectangle along with a button to trigger the calculation.

To achive this, include the provided code into the calculate_Area.html file.
```html
<html>
<head>
  <title>Rectangle Area Calculator</title>
</head>
<body>
  <h1>Rectangle Area Calculator</h1>
  <label for="length">Enter the length: </label>
  <input type="number" id="length"><br><br>
  <label for="width">Enter the width: </label>
  <input type="number" id="width"><br><br>
  <button onclick="calculateArea()">Calculate Area</button><br><br>
  <p id="result"></p>
<script src="./calculate_Area.js"></script>
</body>
</html>
```

5. The provided HTML code includes:

- Page title and heading: Sets up a webpage titled "Rectangle Area Calculator" and presents a primary heading `<h1>` displaying the same title, ensuring clarity about the page's purpose.

- Input fields for user data: Provides input fields labeled for length and width `<input type="number" id="length">` and `<input type="number" id="width">` to allow users to input numerical values for the rectangle's dimensions.

- Calculation trigger and display: Includes a button `<button onclick="calculateArea()">Calculate Area</button>` to execute a JavaScript function named calculateArea() upon clicking. The calculated result of the rectangle's area will be displayed within the `<p>` element with the ID 'result'.

- Dynamic result display: Prepares a placeholder `<p id="result"></p>` to dynamically display the calculated area, creating a user-friendly interface for real-time feedback after the calculation is performed.

- One `<script>` tag is added to include the js file in the calculate_Area.html file using the src attribute.


## Step 02: Defining variables and function to calculate area

1. Declare two variables named length and width in calculate_Area.js file but do not assign any values to them yet. These variables will be used to store the length and width of the rectangle provided by the user through a form in HTML file.

```js

let length;
let width;

```

2. Now create a function named as calculateArea in calculate_Area.js file as follows:

```js

function calculateArea() {

}

```

3. Inside the above function, fetch values from user as input. For this you need to get values using `document.getElementById` from user input within calculateArea function as follows:

```js

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);
}

```

4. Above code includes:

- `document.getElementById('length')`: This part of the code retrieves an HTML element by its ID, specifically searching for an element with the ID 'length'.

- `.value:` After accessing the HTML element, .value is used to retrieve the value entered into the input field associated with that element. For instance, if a user enters '5' into the input field for length, .value retrieves the string '5'.

- p`arseFloat(…)`: The `parseFloat()` function converts the string value retrieved from the input field to a floating-point number. This conversion ensures that the input, typically text entered by the user, is treated as a number and can be used in mathematical operations.

- `length` and `width`: Finally, the obtained floating-point numbers (representing the length and width values entered by the user) are stored in the variables length and width, respectively. These variables will be utilized for further calculations, such as determining the area of a rectangle in this context.

5. Next, declare a variable named area and initialize it with length * width in calculate_Area.js file as following:

```js

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

let area = length * width;
}

```

6. After the calculation of the rectangle's area is completed and stored within the variable named area, the given code involves presenting or displaying this result to the user interface. Include given code within the function after calculation of area.

```js

 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
 
```

7. Above code includes:

- `document.getElementById ('result')`: This part of the code retrieves an HTML element by its ID. Specifically, it targets an element with the ID 'result'.

- `.innerText` = The area of the rectangle is: `${area}`;: Once the element is accessed, `.innerText` is used to modify the text content within that HTML element.

- The backticks and `${}` notation allow for the inclusion of JavaScript variables within a string (using template literals). In this case, it sets the text content to display a message along with the calculated area stored in the variable area. For example, if area holds a value of 25, the text displayed will be "The area of the rectangle is: 25".