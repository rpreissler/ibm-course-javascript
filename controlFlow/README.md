# Implementing Control Flow and Conditional Statements

## Step 01: Defining variables and if else statement for userRole and accessLevel

1. Declare variable named userRole and initialize it with the string value "admin" in control_flow.js file. Also, declare one more variable named accessLevel but do not assign a value to it yet.

```javascript
let userRole = "admin";
let accessLevel;
```

2. Now, execute the if…else block by assigning different roles in the if…else condition to check if userRole is equal to "admin"or not. Include the following code in the control_flow.js file after the previous code:

```javascript 
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
```

3. Now, the above code will check if userRole is "admin" or something else.

- If userRole is "admin", the code with assign accessLevel as "Full access granted".
- If not, it will proceed to check if userRole is "manager".
- If userRole is "manager", it will assign accessLevel as "Limited access granted".
- If userRole is neither "admin" nor "manager", the code will assign accessLevel as "No access granted".

4. Based on the value of userRole, the accessLevel variable will be set to one of the following:

- "Full access granted" if userRole === "admin"
- "Limited access granted" if userRole === "manager"
- "No access granted" for any other value of userRole

You will be able to see the output using this code:

```javascript
console.log("Access Level:", accessLevel);
```

## Step 02: Defining variables and nested if…else statementd for isLoggedIn and userMessage

1. Declare a variable named isLoggedIn and initialize it with the boolean value "true" in control_flow.js file. Declare one more variable named userMessage but do not assign a value to it yet. Insert the provided code after the previous code.

```javascript
let isLoggedIn = true;
let userMessage;
```

2. Now, implement and execute the Nested if…else statement to check if user is logged in or not:

```javascript 
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
```

3. If user is logged in `isLoggedIn === true`, the code checks the user's role (userRole).

- If userRole is "admin", it sets userMessage to "Welcome, Admin!".
- If userRole is not "admin", it sets userMessage to "Welcome, User!".

4. If User is not logged in `isLoggedIn === false`, then:

- The message is set to "Please log in to access the system."

5. You can use the following console method to view the output:

```javascript
console.log("User Message:", userMessage);
```
6. You will see the output as User Message: Welcome, Admin! because the default value of isLoggedIn is true.

## Step 03: Defining variables and switch statement for userType and userCategory

1. Declare a variable named userType and initialize it with the string value "subscriber" in control_flow.js file. Declare one more variable named userCategory but do not assign a value to it yet. Insert the provided code after the previous code.

```javascript 
let userType = "subscriber";
let userCategory;
```

2. Now, you need to implement and execute the switch statement to evaluate the value of userType by providing different case values:

```javascript
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
```

3. The output for cases depend upon its value, such as:

- Case "admin":
    - If userType is "admin", userCategory is assigned as "Administrator".
    - break; exits the switch statement after the assignment.
- Case "manager":
    - If userType is "manager", userCategory is assigned as "Manager".
    - break; exits the switch statement after the assignment.
- Case "subscriber":
    - If userType is "subscriber", userCategory is assigned as "Subscriber".
    - break; exits the switch statement after the assignment.
- Default Case:
    - If userType doesn't match any defined cases ("admin", "manager", or "subscriber"), userCategory is assigned as "Unknown".

4. You can use the following console method to view the output:
```javascript
console.log("User Category:", userCategory);
```

5. You will see the output as User Category: Subscriber because the default value of userType is subscriber.

```bash
Access Level: Full access granted
User Message: Welcome, Admin!
User Category: Subscriber
```

## Step 04: Use ternary operator for isAuthenticated and authenticationStatus

1. Declare a variable named isAuthenticated and initialize it with the boolean value true in control_flow.js file.
```javascript
let isAuthenticated = true;
```

2. Declare one more variable named authenticationStatus and use a ternary operator (? :) to see if the user is authenticated or not.

```javascript 
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
```

3. Now the condition will be checked.

- If isAuthenticated is true, the expression before : (in this case, "Authenticated") is assigned to authenticationStatus.
- If isAuthenticated is false, the expression after : (in this case, "Not authenticated") is assigned to authenticationStatus.

4. You can use the following console method to view the output:

```javascript
console.log("Authentication Status:", authenticationStatus);
```
