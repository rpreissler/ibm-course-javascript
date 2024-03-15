# Develop Followers Count Milestone Alerts Using Functions

## Step 01: Setting up environment

1. Create project folder called `followersCount` and navigate into it.

```bash
mkdir followersCount && cd followersCount
```


2. Create HTML-File with the name `followers_count` and Javascript with the same name.

``` bash
touch followers_count.html
touch followers_count.js
```


3. Create basic template structure for followers_count.html file by adding the content given below.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Interactive Counter</title>
</head>
<body>
  <h1>Interactive Counter</h1>
  <h2>Account Holder Name: Peter Parker</h2>
  <p>Followers: <span id="countDisplay">0</span></p>
  <hr>
  <h2>Click one button to follow</h2>
  <button onclick="increaseCount()">Follow</button>
  <script src="./followers_count.js"></script>
</body>
</html>
```


4. Above code includes a basic setup for a follow button that updates the follower count in real-time when clicked. The code has:-

- "Interactive Counter" as heading for Peter Parker’s account using `<h1>`. The code has `<h2>` tag shows his name and the number of followers, initially set to 0 using `<p> `tag.

- There’s a button labeled “Follow” that, when clicked, triggers a function called “`increaseCount()`”. This function increments the follower count displayed on the page.

-It has one `<script>` tag to include js file in followers_count.html file using src attribute.


## Step 02: Defining variables and functions

1. In followers_count.js, initialize the count variable. This code sets up a variable count and initializes it to 0, serving as the starting point for the follower count.

```js
let count = 0; // Initialize count to 0
```


2. Create functions to increase count of followers and display the count on the web page using the following steps:

- Create `increaseCount()` function to increment the count variable by 1 in `followers_count.js` file.

```js
function increaseCount() {
  count++; // Increment the count by 1
}
```

- Create` displayCount()` function in followers_count.js file after `increaseCount()` function to display count in the HTML element with the ID countDisplay and updates its content to reflect the current count value.

```js
function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}
```

- Now, call `displayCount()` function inside the `increaseCount()` function to increase and display count value simultaneously. Write given codw after `displayCount()` in f`ollowers_count.js` file.

```js
function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); // Display the count
}
```


## Step 03: Defining variables and functions to show

1. Create the `checkCountValue() `function to check the value of count and trigger alerts when specific follower milestones (10 or 20) are reached using following code. Write provided code after the `increaseCount()` in the `followers_count.js` file.

```js
function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}
```

- The `checkCountValue()` function examines the value of the count variable. If the count reaches 10, it triggers an alert saying "Your Instagram post gained 10 followers! Congratulations!".

- Similarly, if the count hits 20, it prompts an alert saying "Your Instagram post gained 20 followers! Keep it up!". This function is designed to provide celebratory messages when specific follower milestones are achieved.


2. Next, you need to call this function inside the `increaseCount()` function to show the milestones as well.

```js
function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); // Display the count
  checkCountValue(); // Check count value and display messages
}
```

# Practice task

1. In this task you need to create a reset button which will reset the followers count code. For this you need to include:

- One button to represent Reset Count in followers_count.html file.

- Then create one function in followers_count.js file to reset count to 0.

- Also use alert popup box method to show alert message which will say that the Followers count has been reset.


---

# Summary

- Setting Up the Environment: HTML structure with a header displaying the account holder's name (Peter Parker) and a follower count displayed as "0" within a span element.

- Defining Variables and Functions: A button triggers the "increaseCount()" function, incrementing the follower count when clicked, updating the displayed count dynamically, and triggering alerts at 10 and 20 follower milestones.

- Displaying Incremental Result: JavaScript functions manage the count incrementation, display of follower count on the HTML page, and the conditional display of congratulatory messages for specific follower milestones (10 and 20 followers).