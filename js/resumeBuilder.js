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

var work = {
    "jobs": [
        {
            "employer": "Pearson",
            "title": "Software Developer",
            "location": "Bloomington, Minnesota",
            "dates": "2009&mdash;2014",
            "description": "Develop new features for and maintain a certification and testing Web application that is used by GMAT and many other testing/certification/licensing organizations."
        },
        {
            "employer": "IBM",
            "title": "Staff Software Engineer",
            "location": "Rochester, MN and Burlingame, CA",
            "dates": "2002&mdash;2009",
            "description": "J2EE programmer on WebSphere."
        },
        {
            "employer": "Siebel Systems",
            "title": "Senior Software Engineer",
            "location": "San Mateo, CA",
            "dates": "1996&mdash;2002",
            "description": "C++ and Java development."
        },
        {
            "employer": "Iowa State University Math Department",
            "title": "Temporary Mathematics Instructor",
            "location": "Ames, IA ",
            "dates": "1992&mdash;1993",
            "description": "Taught calculus and trigonometry, four classes per semester."
        }
    ]
};

var projects = {
	"projects": [
	{
		"title": "udacity-intro-hadoop-mapreduce",
		"dates": "2014",
		"description": "Final project for Udacity Introduction to Hadoop and MapReduce course.",
		"images": ["images/average-length.png",
		           "images/popular-tags.png",
		           "images/response-time.png",
		           "images/student-times.png"]
	},
	{
		"title": "kaggle-the-analytics-edge",
		"dates": "2014",
		"description": "Code for private Kaggle competition held as part of MITx : 15.071x The Analytics Edge course.  Illustrates my knowledge of data analytics techniques including random forests and logistic regression.  Written in R.",
		"images": ["images/15.071x_CourseImage.png"]
	},
	{
		"title": "quadrillionth-decimal-place",
		"dates": "2013",
		"description": "Implementation (in C) of a Method of Bailey, Borwein, and Plouffe.",
		"images": ["images/1024px-Matheon2.jpg"]
	},
	{
		"title": "twisted-life",
		"dates": "2013",
		"description": "Video game (written in CoffeeScript) based on J.H. Conway's Game of Life.",
		"images": ["images/twisted-life.tiff"]
	}
	]
}

var bio = {
	"name": "Paul Reiners",
	"role": "Software Developer",
	"welcomeMessage": "I have many years of software development experience programming in C, C++, Java, Lisp, Python, R, and miscellaneous other languages. I have an M.S. in computer science and an M.S. in math. I am particularly knowledgeable in algorithms, data science, functional programming, and computational math.",
	"contacts" : {
		"mobile": "952-846-7749",
		"email": "paul.reiners@gmail.com",
		"github": "paul-reiners",
		"twitter": "@paulreiners",
		"location": "Chaska, Minnesota"
	},
	"skills": [
		"programming", "math", "C", "C++", "Lisp (Common Lisp, Scheme, and Clojure)", "Haskell", "Scala", "Perl", "Java"
		],
	"biopic": "images/lambda.png"
};

var education = {
    "schools": [
        {
            "name": "Iowa State University",
            "city": "Ames, IA, US",
            "degree": "M.S.",
            "major": [
                "Comp Sci"
            ],
            "dates": 1996,
            "url": "http://www.iastate.edu/"
        },
        {
            "name": "University of Illinois",
            "city": "Urbana-Champaign, IL, US",
            "degree": "M.S.",
            "major": [
                "Applied Math (Theory of Computation"
            ],
            "dates": 1991,
            "url": "http://illinois.edu/"
        },
        {
            "name": "University of Northern Iowa",
            "city": "Cedar Falls, IA, US",
            "degree": "B.A.",
            "major": [
                "Math"
            ],
            "dates": 1984,
            "url": "http://www.uni.edu/"
        }
    ],
    "onlineCourses": [
        {
            "title": "SABR101x: Sabermetrics 101: Introduction to Baseball Analytics",
            "school": "edX BUx",
            "dates": 2014,
            "url": "https://verify.edx.org/cert/183eb375232e4149bbc1ecb225bc7bee"
        },
        {
            "title": "15.071x: The Analytics Edge",
            "school": "edX: MITx",
            "dates": 2014,
            "url": "https://verify.edx.org/cert/60fb6ce3477a4778bdb6a80e6fa2e078"
        },
        {
            "title": "The Data Scientist’s Toolbox",
            "school": "Coursera: Johns Hopkins University",
            "dates": 2014,
            "url": "https://www.coursera.org/records/J9hC6nbrfNaEa3cD"
        },
        {
            "title": "R Programming",
            "school": "Coursera: Johns Hopkins University",
            "dates": 2014,
            "url": "https://www.coursera.org/records/QjTuqpB3vZageEsy"
        },
        {
            "title": "Getting and Cleaning Data",
            "school": "Coursera: Johns Hopkins University",
            "dates": 2014,
            "url": "https://www.coursera.org/records/pFPtcyH5BSQ5p2Kp"
        },
        {
            "title": "Exploratory Data Analysis",
            "school": "Coursera: Johns Hopkins University",
            "dates": 2014,
            "url": "https://www.coursera.org/records/w4Jg4GFkguBVQd5Q"
        },
        {
            "title": "Reproducible Research",
            "school": "Coursera: Johns Hopkins University",
            "dates": 2014,
            "url": "https://www.coursera.org/records/hEmyst95cKdWbHY6"
        },
        {
            "title": "Intro to Hadoop and MapReduce",
            "school": "Udacity",
            "dates": 2014,
            "url": "https://www.udacity.com/verified-certificate/ud617"
        }
    ]
};

$("#main").append(work["position"]);
$("#main").append(education.name);
