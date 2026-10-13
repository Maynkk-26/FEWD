// Assignment 6: JavaScript String Methods


console.log("===== STUDENT RECORD: STRING OPERATIONS =====\n");

// 1. String declaration: single quotes, double quotes, template literals
console.log("--- 1. String Declaration ---");
let firstName = 'Aarav';                 
let lastName = "Sharma";                 
let course = "MCA";
let college = "KIET Group of Institutions";
let intro = `${firstName} ${lastName} is studying ${course} at ${college}.`; // template literal
console.log("Single quotes  :", firstName);
console.log("Double quotes  :", lastName);
console.log("Template literal:", intro);

// 2. String length and character access using index
console.log("\n--- 2. Length and Character Access ---");
let fullName = "Aarav Sharma";
console.log("Full name:", fullName);
console.log("Length:", fullName.length);
console.log("First character (index 0):", fullName[0]);
console.log("Character at index 6:", fullName.charAt(6));
console.log("Last character:", fullName[fullName.length - 1]);

// 3. Concatenation using concat() and + operator
console.log("\n--- 3. Concatenation ---");
let city = "Ghaziabad";
let withPlus = firstName + " " + lastName + " from " + city;
let withConcat = firstName.concat(" ", lastName, " from ", city);
console.log("Using + operator:", withPlus);
console.log("Using concat()  :", withConcat);

// 4. Searching a substring using indexOf()
console.log("\n--- 4. indexOf() ---");
let address = "Sector 62, Noida, Uttar Pradesh, India";
console.log("Address:", address);
console.log("Index of 'Noida':", address.indexOf("Noida"));
console.log("Index of 'India':", address.indexOf("India"));
console.log("Index of 'Delhi' (not found):", address.indexOf("Delhi"));

// 5. Extracting text using slice()
console.log("\n--- 5. slice() ---");
let email = "aarav.sharma@kiet.edu";
console.log("Email:", email);
console.log("Username (0 to 12):", email.slice(0, 12));
console.log("Domain (from index 13):", email.slice(13));
console.log("Last 3 characters:", email.slice(-3));

// 6. Replacing a word and all its occurrences using replace()
console.log("\n--- 6. replace() and replaceAll() ---");
let feedback = "The course is good. The faculty is good. The labs are good.";
console.log("Original:", feedback);
console.log("replace() (first only):", feedback.replace("good", "excellent"));
console.log("replace() with regex /g:", feedback.replace(/good/g, "excellent"));
console.log("replaceAll():", feedback.replaceAll("good", "excellent"));

// 7. Uppercase and lowercase
console.log("\n--- 7. toUpperCase() and toLowerCase() ---");
let studentName = "Aarav Sharma";
console.log("Original :", studentName);
console.log("Uppercase:", studentName.toUpperCase());
console.log("Lowercase:", studentName.toLowerCase());

// 8. Removing leading and trailing spaces using trim()
console.log("\n--- 8. trim() ---");
let rawInput = "   Aarav Sharma   ";
console.log("Before trim: '" + rawInput + "' (length " + rawInput.length + ")");
let cleaned = rawInput.trim();
console.log("After trim : '" + cleaned + "' (length " + cleaned.length + ")");

// 9. Converting comma-separated list into an array using split()
console.log("\n--- 9. split() ---");
let subjects = "Java,Python,DBMS,Operating System,Web Development";
let subjectArray = subjects.split(",");
console.log("Original string:", subjects);
console.log("Array:", subjectArray);
console.log("Total subjects:", subjectArray.length);
console.log("First subject:", subjectArray[0]);

console.log("\n===== END OF PROGRAM =====");
