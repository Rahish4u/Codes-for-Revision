/*
Problem-2
Create a Map to store contact information (name, age, email, location) and implement a function to retrieve contact details by name.
*/

// Solution Code:

// creating a map to store contact information
const contactMap = new Map();

// Function to add contact information
function addContact(name, age, email, location){
    contactMap.set(name, {age, email, location});
}

// function to retrieve contact details by name
function getContactDetails(name){
    return contactMap.get(name)
}

// Add some sample contacts
addContact("Rohit", "25", "rsvp@gmail.com", "Varanasi" )
addContact("Mohit", "30", "mskp@gmail.com", "Ramnagar" )

// Retrieve and print  contact details
const rohitDetails = getContactDetails("Rohit");
console.log(rohitDetails);
