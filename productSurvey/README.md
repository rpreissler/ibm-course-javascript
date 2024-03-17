# Develop Product Feedback Survey Form Using Events

## Learning objectives
After completing this lab, you will be able to:

- Form handling and user input capture: Explore the process of creating an interactive form using HTML elements, such as text inputs, select options, and text areas, to collect diverse user information, including name, age, email, job, product feedback, and more.

- DOM manipulation with JavaScript: Learn how JavaScript interacts with the Document Object Model (DOM) to retrieve input values from form elements and dynamically update the webpage content. This includes modifying the display style of an HTML element and populating its content based on user input.

- Event handling and user interactions: Explore event handling mechanisms in JavaScript, specifically the implementation of event listeners for button clicks and Enter key presses to trigger actions, such as submitting the form data and displaying feedback dynamically, providing a seamless user experience.

- User interface interaction design: Analyse the importance of presenting collected user information in a readable format on the webpage. Learners will gain insights into dynamically displaying user-provided feedback in a structured manner within the webpage, enhancing the overall user interface and experience.

## Step 01: Setting up the environment

1. Create folder name `productSurvey`. Then navigate to the `productSurvey` folder, and create a new HTML-file `product_survey.html` and JavaScript-File `product_survey.js`

```bash
mkdir productSurvey && cd productSurvey
touch product_survey.html
touch product_survey.js
```

2. Create a basic template structure of HTML file by adding the content provided below.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Luxury Brand Feedback</title>
</head>
<body>
  <h1>Welcome to Luxury Brand Products Feedback</h1>
  <h2>Provide Your Feedback</h2>
  <label for="name">Name:</label><br>
  <input type="text" id="name" placeholder="Your Name" required><br>
  <label for="age">Age:</label><br>
  <input type="number" id="age" placeholder="Your Age" required><br>
  <label for="email">Email:</label><br>
  <input type="email" id="email" placeholder="Your Email" required><br>
  <label for="job">Job:</label><br>
  <input type="text" id="job" placeholder="Your Job" required><br>
  <label for="designation">Designation:</label><br>
  <input type="text" id="designation" placeholder="Your Designation" required><br>
  <label for="productType">Product Type:</label><br>
  <select id="productType" required>
    <option value="perfume">Perfume</option>
    <option value="cream">Cream</option>
    <option value="oils">Oils</option>
  </select><br>
  <label for="feedbackText">Feedback:</label><br>
  <textarea id="feedbackText" rows="5" cols="30" placeholder="Enter your feedback here" required></textarea><br>
<button id="submitBtn">Submit Feedback</button>
<hr>
<div id="userInfo" style="display: none;">
  <h2>User Information:</h2>
  <p>Name: <span id="userName"></span></p>
  <p>Age: <span id="userAge"></span></p>
  <p>Email: <span id="userEmail"></span></p>
  <p>Job: <span id="userJob"></span></p>
  <p>Designation: <span id="userDesignation"></span></p>
  <p>Feedback for  <span id="userProductChoice"></span>: <span id="userFeedback"></span></p>
</div>
<script src="./product_survey.js"></script>
</body>
</html>
```

- User feedback form: The HTML structure comprises of input fields for the user's name, age, email, job, designation, a dropdown to select a product type (perfume, cream, oils), and a text area for feedback.

- Submission button: The "Submit Feedback" button triggers the processing of user-entered details using JavaScript when clicked.

- Dynamic display: Upon submission, JavaScript processes the entered information and dynamically displays the user's provided details, including name, age, email, job, designation, and feedback for the chosen product type.

- Hidden section display: Initially hidden, a section beneath the form becomes visible after submission, showing the user's information and feedback and providing a streamlined view of the entered details.

- To include js file in product_survey.html script tag is used in HTML file above the `</body>` tag to inlcude the script file.


## Step 02: Defining variables and function

1. Create a function named submitFeedback inside product_survey.js to take the feedback from the user survey form created in product_survey.html file.

```js
function submitFeedback() {
}
```

2. Variables like username, age, email, job, designation, productType, and feedback are declared and assigned values from the respective HTML input elements using getElementById. For example:

```js
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
```

The above code retrieves the values using HTML input elements with the specified IDs and stores them in variables.

3. Next, declare a variable named submitButton and initialize it with `document.getElementById ('submitBtn');`. This line of code fetches the HTML element with the ID 'submitBtn' using its unique identifier (`'getElementById'`) and assigns it to the variable 'submitButton' for further interaction or manipulation in JavaScript.

```js
 const submitButton=document.getElementById('submitBtn');
```

4. Now, assigns the function submitFeedback to execute when the onclick event occurs on the HTML element referenced by the variable submitButton. Include given code outside the function in product_survey.js file.

```js
  submitButton.onclick = submitFeedback;
```

5. Include the given code in the submitFeedback function after the declaration of the feedback variable to display thank you message when the user submits the form.

```js
alert('Thank you for your valuable feedback')
```

## Step 03: Display user feedback on webpage

1. As the submitFeedback function will fetch the user feedback information in the second point of step 2, the details should also be displayed on the web page to inform the user about the information entered.

2. To achieve this, include the following code inside submitFeedback function to put information.


``` js
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
```

3. For example, the line of code `document.getElementById('userName').innerHTML = username;`, finds the HTML element with the ID userName and replaces its inner HTML content with the value stored in the variable username. It dynamically updates the displayed content within that specific HTML element.

4. In the HTML code at line 29, the entire div element, which will be used to display information, is styled with the 'display: none' property to be visible only after the user clicks on the submit button. To make this part visible after the button click, include the following code inside the submitFeedback function.


```js
document.getElementById('userInfo').style.display = 'block';
```
5. Above line of code uses JavaScript to access an HTML element identified by the ID 'userInfo'. It then modifies the CSS style property 'display' of that element, setting it to 'block', which alters its visibility on the webpage to be displayed as a block-level element.

## Step 04: Implement key press to submit feedback

1. Include the following code at the end of the product_survey.js file to ensure that if the user presses the 'Enter' key, the feedback form should submit, similar to clicking the submit button:

```js
document.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
     submitFeedback();
   }
 });
 ```

 2. This code snippet adds an event listener to the entire document, listening for any keydown event. When the event occurs, it checks if the pressed key is 'Enter'. If it is, it calls the function submitFeedback(), executing the feedback submission functionality.