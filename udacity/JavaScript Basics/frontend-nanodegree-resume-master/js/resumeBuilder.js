// var firstName = "james";

// var age = 32;

// console.log(firstName);

// var email ="cameron@udacity.com";

// var newEmail = email.replace("udacity", "gmail");

// console.log(email);
// console.log(newEmail);
// ---------------------------------------------------------
// var awesomeThoughts = "My name is Alin and I am AWESOME";

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// $("#main").append(funThoughts);

// ---------------------------------------------------------

// var formattedName = HTMLheaderName.replace("%data%", "Alin");
// var role = "Web Developer";
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// ---------------------------------------------------------

var skills = ["awesomeness", "programming", "JS"];

//$("#main").append(skills[0]);

var bio = {
  "name" : "James",
  "age" : 32,
  "skills" : skills
};


$("#main").append(bio.name);