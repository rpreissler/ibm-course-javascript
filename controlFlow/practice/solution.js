// Step 01: Defining variables and if else statement for userRole and accessLevel

// TODO:
// [] If the person is an Employee, they are authorized to have access to "Dietary Services".
// [] If the person is an Enrolled Member, they are authorized to have access to "Dietary Services" and one-on-one interaction with a dietician.
// [] If the person is a Subscriber, they are authorized to have partial access to facilitate "Dietary Services" only.
// [] If the person is a Non-Subscriber, they need to enroll or at least subscribe first to avail this facility.

// You need to communicate with the user by printing a message indicating whether that person is eligible to avail which type of services.
let userRole = "employee";
let accessLevel;

if (userRole === "employee") {
    accessLevel = "Authorized to Dietary Services.";
} else if (userRole === "member") {
    accessLevel = "Access to Dietary Services and One-on-One Interaction with a Dietician."; 
} else if (userRole === "subscriber") {
    accessLevel = "Acceess to facilitate Dietary Services only."
} else {
    accessLevel = "No access granted.";
}

console.log("Access Level:", accessLevel)


// Step 02: Definining variables and nested if...else statement for 
// isLoggedIn and userMessage

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "employee") {
        userMessage = "Welcome, Employee! You are authorized to Dietary Services.";
    }
    else if (userRole === "member") {
        userMessage = "Welcome, Member! You are authorized to Dietary Services and One-on-One Interaction with a Dietician."
    }
    else if (userRole === "subscriber") {
        userMessage = "Welcome, Subscriber! You are authorized to have partial access to facilitate 'Dietary Services' only."
    }
} else {
    userMessage = "You need to enroll or at least subscribe first to avail this facility.";
}

console.log("User Message:", userMessage);


// Step 03: Defining variables and switch statement for userType and userCategory
let userType = "employee";
let userCategory;

switch (userType) {
    case "employee":
        userCategory = "Employee";
        break;
    case "member":
        userCategory = "Member";
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