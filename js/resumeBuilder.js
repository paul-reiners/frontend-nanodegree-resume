var work = {
    "jobs": [
        {
            "employer": "Pearson",
            "title": "Software Developer",
            "location": "Bloomington, Minnesota",
            "dates": "2009&mdash;2014",
            "description": "Develop new features for and maintain a certification and testing Web application that is used by GMAT and many other testing/certification/licensing organizations.",
            "url": "http://www.pearsonvue.com/"
        },
        {
            "employer": "IBM",
            "title": "Staff Software Engineer",
            "location": "Rochester, Minnesota",
            "dates": "2002&mdash;2009",
            "description": "J2EE programmer on WebSphere.",
            "url": "http://www.ibm.com/us/en/"
        },
        {
            "employer": "Siebel Systems",
            "title": "Senior Software Engineer",
            "location": "San Mateo, California",
            "dates": "1996&mdash;2002",
            "description": "C++ and Java development.",
            "url": "http://en.wikipedia.org/wiki/Siebel_Systems"
        },
        {
            "employer": "Iowa State University Math Department",
            "title": "Temporary Mathematics Instructor",
            "location": "Ames, Iowa",
            "dates": "1992&mdash;1993",
            "description": "Taught calculus and trigonometry, four classes per semester.",
            "url": "http://www.math.iastate.edu/"
        }
    ]
};

work.display = function () {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer =
            HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        formattedEmployer =
            formattedEmployer.replace("%url%", work.jobs[job].url);
        var formattedJobTitle =
            HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerJobTitle =
            formattedEmployer + formattedJobTitle;
        $(".work-entry:last").append(formattedEmployerJobTitle);

        var formattedLocation =
            HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDates =
            HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription =
            HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

var projects = {
	"projects": [
	{
		"title": "udacity-intro-hadoop-mapreduce",
		"dates": "2014",
		"description": "Final project for Udacity Introduction to Hadoop and MapReduce course.  This project analyzes a large set of discussion forum data.  Analysis includes students and posting time on forums, among other things.",
		"images": ["images/popular-tags.png",
		           "images/student-times.png"],
        "url": "https://github.com/paul-reiners/udacity-intro-hadoop-mapreduce"
	},
	{
		"title": "kaggle-the-analytics-edge",
		"dates": "2014",
		"description": "Code for private Kaggle competition held as part of MITx : 15.071x The Analytics Edge course.  Illustrates my knowledge of data analytics techniques including random forests and logistic regression.  Written in R.",
		"images": ["images/15.071x_CourseImage.png"],
        "url": "https://github.com/paul-reiners/kaggle-the-analytics-edge"
	},
	{
		"title": "quadrillionth-decimal-place",
		"dates": "2013",
		"description": "This project is an implementation in C of the Bailey–Borwein–Plouffe (BBP) formula. The BBP formula allows you to compute efficiently an arbitrary digit of irrational constants that can be expressed in a particular form.  In particular, this program allows you to compute arbitrary hexadecimal digits of pi and arbitrary binary digits of log(2). It is accurate out to the 100 millionth hex digit of pi. It can compute the millionth digit in about 10 seconds, the 10 millionth digit in about 2 minutes and the 100 millionth digit in about 20 minutes (the BBP algorithm is linear in d where d is the digit place). I used the GNU MP Bignum Library to achieve this level of precision.",
		"images": ["images/pi.jpg"],
        "url": "https://github.com/paul-reiners/quadrillionth-decimal-place"
	},
	{
		"title": "twisted-life",
		"dates": "2013",
		"description": "Retro-style video game, written in CoffeeScript, based on J.H. Conway's Game of Life.  I've always liked cellular automata.  Don't let the twisted Life forms get you.",
		"images": ["images/twisted-life.jpg"],
        "url": "https://github.com/paul-reiners/twisted-life"
	}
	]
};

projects.display = function () {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle =
            HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        formattedTitle =
            formattedTitle.replace("%url%", projects.projects[project].url);
        var formattedDates =
            HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription =
            HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);
        for (var image in projects.projects[project].images) {
            var formattedImage =
                HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImage);
        }
   }
};

var bio = {
	"name": "Paul Reiners",
	"role": "Software Developer",
	"welcomeMessage": "I have many years of software development experience programming in C, C++, Java, Lisp, Python, R, and miscellaneous other languages. I have an M.S. in computer science and an M.S. in math. I am particularly knowledgeable in algorithms, data science, functional programming, and computational math.  I am looking for a job as a data scientist or a data analyst.",
	"contacts" : {
		"mobile": "952-846-7749",
		"email": "paul.reiners@gmail.com",
		"github": "paul-reiners",
		"twitter": "@paulreiners",
		"location": "Chaska, Minnesota"
	},
	"skills": [
		"Algorithms", "Math", "Haskell", "Lisp (Common Lisp, Scheme, and Clojure)", "Scala", "Python", "C", "R"
		],
	"biopic": "images/binary.png"
};

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedWelcomeMsg);
    $("#header").prepend(formattedbioPic);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        };
    }

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);

    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGitHub);
    $("#footerContacts").append(formattedGitHub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);
}

var education = {
    "schools": [
        {
            "name": "Iowa State University",
            "location": "Ames, Iowa",
            "degree": "M.S.",
            "majors": [
                "Computer Science"
            ],
            "dates": 1996,
            "url": "http://www.cs.iastate.edu/"
        },
        {
            "name": "University of Illinois",
            "location": "Urbana-Champaign, Illinois",
            "degree": "M.S.",
            "majors": [
                "Applied Mathematics (Theory of Computation)"
            ],
            "dates": 1991,
            "url": "http://www.math.uiuc.edu/"
        },
        {
            "name": "University of Northern Iowa",
            "location": "Cedar Falls, Iowa",
            "degree": "B.A.",
            "majors": [
                "Mathematics"
            ],
            "dates": 1984,
            "url": "http://www.uni.edu/math/welcome-uni-department-mathematics"
        }
    ],
    "onlineCourses": [
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
            "title": "SABR101x: Sabermetrics 101: Introduction to Baseball Analytics",
            "school": "edX BUx",
            "dates": 2014,
            "url": "https://verify.edx.org/cert/183eb375232e4149bbc1ecb225bc7bee"
        },
        {
            "title": "Intro to Hadoop and MapReduce",
            "school": "Udacity",
            "dates": 2014,
            "url": "https://www.udacity.com/verified-certificate/ud617"
        }
    ]
};

education.display = function () {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName =
            HTMLschoolName.replace("%data%", education.schools[school].name);
        formattedName =
            formattedName.replace("%url%", education.schools[school].url);
        var formattedDegree =
            HTMLschoolDegree.replace(
                "%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedName + formattedDegree);
        var formattedDate =
            HTMLschoolDates.replace(
                "%data%", education.schools[school].dates);
        var formattedLocation =
            HTMLschoolLocation.replace(
                "%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedDate + formattedLocation);
        for (var major in education.schools[school].majors) {
            var formattedMajor =
                HTMLschoolMajor.replace(
                    "%data%", education.schools[school].majors[major]);
            $(".education-entry:last").append(formattedMajor);
        }
    }
    $("#education").append(HTMLonlineClasses);
    for (var onlineCourse in education.onlineCourses) {
        $("#education").append(HTMLonlineStart);
        var formattedTitle =
            HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        formattedTitle =
            formattedTitle.replace("%url%", education.onlineCourses[onlineCourse].url)
        var formattedSchool =
            HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        $(".online-entry:last").append(formattedTitle + formattedSchool);
        var formattedDates =
            HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        $(".online-entry:last").append(formattedDates);
     }
}

bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

$("#mapDiv").append(googleMap);
