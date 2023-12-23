console.log("...FILE-1..Main Portfolio Page script Enabal......")

//   ...........SETUP RESETFORM FUNCTON FOR CONTACT SECTION! ............

function resetForm() {

    // Clear the values of the form fields
    document.getElementById('formFirstname').value = '';
    document.getElementById('Lastname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telephone').value = '';
    document.getElementById('formChouse').value = ''; // Adjust if needed
    document.getElementById('formMessage').value = '';
    document.getElementById('gridCheck').checked = false;
}

setTimeout(() => {
    resetForm()
}, 1000);



//....................SETUP AUTO TYPING ANIMATION FOR HEADER SECTION! ..........................................
//.................... MOdule -1 ..........................
let typed = new Typed('#element', {
    strings: [

        "Proficient in front-end technologies such as HTML, CSS, and JavaScript.",
        "Proficient in using popular front-end frameworks like React.",
        "Specialize in creating dynamic and interactive web applications.",
        "Specialize in optimizing website performance and speed.",
        "Proficient in responsive web design and cross-browser compatibility.",
        "Experience with version control systems such as Git.",
    ],
    typeSpeed: 50,
    backspeed: 150,
    loop: true
});


//.................... MOdule -2 ..........................
const messages = [
    "Contact us if you looking for a developer  or any type of queries.",
    "Know more about me, Explore our sites or services.",
];
const messageElement = document.getElementById("message");
let messageIndex = 0;
let charIndex = 0;

function typeMessage() {
    if (charIndex < messages[messageIndex].length) {
        messageElement.innerHTML += messages[messageIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeMessage, 0); // Adjust typing speed here (milliseconds)
    } else {
        setTimeout(eraseMessage, 7000); // Wait for 2 seconds after typing
    }
}

function eraseMessage() {
    if (charIndex > 0) {
        messageElement.innerHTML = messages[messageIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseMessage, 0); // Adjust erasing speed here (milliseconds)
    } else {
        messageIndex = (messageIndex + 1) % messages.length; // Cycle through messages
        setTimeout(typeMessage, 500); // Wait for 0.5 seconds before typing the next message
    }
}

// START THE TYPING ANIMATION
typeMessage();


// ..................THIS IS THE FUNCTION COPY CLIPBOARD FOR GET ME TOUCH SECTION.................
function copyText(elementId) {
    // Get the text content from the specified element
    let textToCopy = document.getElementById(elementId).innerText;

    // Create a temporary input element
    let tempInput = document.createElement("textarea");

    // Set the input value to the text content
    tempInput.value = textToCopy;

    // Append the input element to the document
    document.body.appendChild(tempInput);

    // Select the text in the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Provide feedback to the user that the text has been copied, for example:
    alert("Text has been copied to the clipboard!");
}


// ........FUNCTION TO START THE COUNTDOWN WHEN THE ELEMENT IS IN THE VIEWPORT............
function startCountdownIfVisible() {
    // THIS IS COUNTDOWN FUNCTION FORM REWARDS SECTION
    let valueDisplays = document.querySelectorAll(".count");

    let interval = 2000;

    valueDisplays.forEach((countdownDisplay) => {
        let startvalue = 0;
        let endvalue = parseInt(countdownDisplay.getAttribute('data-val'));

        let duration = Math.floor(interval / endvalue);
        let counter = setInterval(function () {
            startvalue += 1;
            countdownDisplay.textContent = `${startvalue}+`;
            if (startvalue == endvalue) {
                clearInterval(counter);
            }
        }, duration);
    });
}

// ..............USE INTERSECTION OBSERVER TO CHECK WHEN THE ELEMENT IS IN THE VIEWPORT.....................
const rewardsSection = document.querySelector('.rewards');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Start the countdown when the element enters the viewport
            startCountdownIfVisible();
            // Stop observing once it has been triggered
            observer.disconnect();
        }
    });
}, { threshold: 0.5 }); // Adjust the threshold as needed

// Start observing the rewards section
observer.observe(rewardsSection);



// ................THIS IS SKILL SECTION DYNAMIC LOOK FETUR.............
document.addEventListener("DOMContentLoaded", function () {
    var contentElements = document.querySelectorAll(".content");
    var index = 0;

    function toggleClasses() {
        // Toggle between "interface" and "dynamic-Content" classes
        contentElements.forEach(function (element) {
            element.classList.toggle("interface", false);
            element.classList.toggle("dynamic-Content", true);
        });

        // Add the "interface" class to the current element
        contentElements[index].classList.toggle("interface", true);
        contentElements[index].classList.toggle("dynamic-Content", false);

        // Move to the next element
        index = (index + 1) % contentElements.length;
    }

    // Apply the initial classes
    toggleClasses();

    // Set an interval to toggle classes every 32 seconds
    setInterval(toggleClasses, 5000);
});



// --------------------THIS IS  MORE SKILL CONTENT   SHOW MORE/SHOW LESS" FUNCTIONALITY-------------
const ShortsMoreBtn = document.querySelector('.showmoreShorts');
const ShortsLessBtn = document.querySelector('.showlessShorts');
const ShortshideContent = document.querySelector('.moreSkill-Content');

ShortsMoreBtn.addEventListener('click', function () {
    ShortshideContent.style.display = 'block';
    ShortsMoreBtn.style.display = 'none';
    ShortsLessBtn.style.display = 'flex';
});

ShortsLessBtn.addEventListener('click', function () {
    ShortshideContent.style.display = 'none';
    ShortsMoreBtn.style.display = 'flex';
    ShortsLessBtn.style.display = 'none';
});

//.................... THIS IS  MORE PROJECT CONTENT SHOW MORE/SHOW LESS" FUNCTIONALITY-----------------------------
const ProjectsMoreBtn = document.querySelector('.showmoreProjects');
const ProjectsLessBtn = document.querySelector('.showlessProjects');
const ProjectsContent = document.querySelector('.project-List');

ProjectsMoreBtn.addEventListener('click', function () {
    ProjectsContent.style.display = 'flex';
    ProjectsMoreBtn.style.display = 'none';
    ProjectsLessBtn.style.display = 'flex';
});

ProjectsLessBtn.addEventListener('click', function () {
    ProjectsContent.style.display = 'none';
    ProjectsMoreBtn.style.display = 'flex';
    ProjectsLessBtn.style.display = 'none';

});


// ............THIS IS RESPONSIVE FUNCTION...............
let burger = document.querySelector('.burger');
let myNavbar = document.querySelector('.myNavbar');

// let navbar = document.querySelector('.navbar');
let sectionMiddle = document.querySelector('.sectionMiddle');
let sectionRight = document.querySelector('.sectionRight');
let divider = document.querySelector('.divider');

burger.addEventListener('click', () => {

    myNavbar.classList.toggle("h-nav-resp")
    // navbar.classList.toggle("v-nav-resp")
    sectionMiddle.classList.toggle("v-nav-resp")
    sectionRight.classList.toggle("v-nav-resp")
    divider.classList.toggle("v-nav-resp")

})

// Add click event listeners to elements with class "list"
const listItems = document.querySelectorAll('.list, .moodebutn');

listItems.forEach(listItem => {
    listItem.addEventListener('click', () => {

        myNavbar.classList.toggle("h-nav-resp")
        sectionMiddle.classList.toggle("v-nav-resp")
        sectionRight.classList.toggle("v-nav-resp")
        divider.classList.toggle("v-nav-resp")

        // Remove the "active" class from all list items
        listItems.forEach(item => {
            item.classList.remove('targetactive');

        });

        // Add the "active" class to the clicked list item
        listItem.classList.add('targetactive');

        // Log the classList of the clicked list item
        // console.log(listItem.classList);
    });
});

// ...............THIS IS CODE FOR PDF  DOWNLOAD FEACHERS...............

document.getElementById('downloadBtn').addEventListener('click', () => {
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
    const pdfPath = 'My files/RITAM SARKAR CV 2022 (1).pdf';

    // Create an anchor element
    const link = document.createElement('a');

    // Set the href attribute to the path of the PDF file
    link.href = pdfPath;

    // Set the download attribute with the desired filename
    link.download = 'Ritam-Portfolio.pdf';

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click event on the link to start the download
    link.click();

    // Remove the link from the DOM after a timeout
    setTimeout(() => {
        document.body.removeChild(link);
        alert('Download complete!');

    }, 500); // Adjust the timeout value if needed

});



