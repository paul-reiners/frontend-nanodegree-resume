var name = "Paul Reiners";
var role = "Software Developer";

var bio = {
	"name": name,
	"role": role,
	"contacts" : {
		"mobile": "952-846-7749",
		"email": "paul.reiners@gmail.com",
		"github": "paul-reiners",
		"twitter": "@paulreiners",
		"location": "Chaska, Minnesota"
	},
	"welcomeMessage": "Welcome to my résumé page.",
	"skills": [
		"programming", "math"
		],
	"biopic": "images/lambda.png"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContactInfo = HTMLcontactGeneric.replace("%data%", bio.contactInfo);
var formattedPictureURL = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#header").prepend(formattedSkills);
$("#header").prepend(formattedWelcomeMessage);
$("#header").prepend(formattedPictureURL);
$("#footerContacts").prepend(formattedContactInfo);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var work = {};
work.position = "Software Developer";
work.employer = "Pearson";
work.years = 5;
work.city = "Bloomington, Minnesota";

var education = {
	"schools": [
	{
		"name": "Iowa State University",
		"city": "Ames, IA, US",
		"degree": "M.S.",
		"major": ["CompSci"]
	},
	{
		"name": "University of Illinois",
		"city": "Urbana-Champaign, IL, US",
		"degree": "M.S.",
		"major": ["Applied Math (Theory of Computation"]
	},
	{
		"name": "University of Northern Iowa",
		"city": "Cedar Falls, IA, US",
		"degree": "B.A.",
		"major": ["Math"]
	}
	]
};

$("#main").append(work["position"]);
$("#main").append(education.name);
