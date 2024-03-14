// Step 01: Defining variables and if else statement for userRole and accessLevel

let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full accress granted";
} else if (useRole === "manager") {
    accessLevel = "Limited access granted"; 
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel)


// Step 02: Definining variables and nested if...else statement for 
// isLoggedIn and userMessage

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!"
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);


// Step 03: Defining variables and switch statement for userType and userCategory
let userType = "subscriber";
let userCategory;

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
        userCategory = "Unkown";
}

console.log("User Category:", userCategory );

// Step 04: Use ternary operator for isAuthenticated and authenticationStatus
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);