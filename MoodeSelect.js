console.log('........FILE-2..MoodeSelector Script Enable.........')


let dark = document.querySelector('.dark');
let light = document.querySelector('.light');

dark.addEventListener('click', () => {
    toggleMode()
})
light.addEventListener('click', () => {
    toggleMode()
})


function toggleMode() {
    const body = document.body;

    // ..............THIS IS TOP NAVBR MOOD CHANGE CODE....................
    let myNavbar = document.querySelector('.myNavbar');
    let light = document.querySelector('.light');
    let dark = document.querySelector('.dark');
    let divider = document.querySelector('.divider ');
    let cvCheckBtn = document.querySelector('.cvCheckBtn  ');

    let anchorTags = document.querySelectorAll('.navitem li a');
    let footeranchorTags = document.querySelectorAll('.footernavitem li a');

    // ..............THIS IS BOTTOM NAVBR MOOD CHANGE CODE....................
    let footer = document.querySelector('.footer');
    let footersectionRight = document.querySelector('.footersectionRight');
    let navLogoItems = document.querySelectorAll('.navLogo a');

    // Check if the body has the 'dark-mode' class (isDarkMode)
    const isDarkMode = body.classList.contains('dark-mode');

    // Toggle the 'dark-mode' class
    body.classList.toggle('dark-mode');
    // Toggle the 'dark-mode' class
    myNavbar.classList.toggle('dark-mode');

    navLogoItems.forEach(navLogo => {
        navLogo.style.cssText = isDarkMode ? 'background-color:transparent;' : 'background-color:black;color:white;';
        navLogo.addEventListener('mouseover', function () {
            if (!isDarkMode) {
                this.style.cssText = 'color: white;font-weight:800;'
            }
        });

        navLogo.addEventListener('mouseout', function () {
            if (!isDarkMode) {
                this.style.cssText = 'background-color:transparent;color:white;';
            }
        });
    })
    // .............This is for top navbar...................
    anchorTags.forEach(anchor => {
        anchor.style.cssText = isDarkMode ? '' : 'background-color: black; color: white;border-bottom: 2px solid transparent;';

        // Add hover styles
        anchor.addEventListener('mouseover', function () {
            if (!isDarkMode) {
                this.style.cssText += 'border-bottom: 2px solid white;';
            }
        });
        anchor.addEventListener('mouseout', function () {
            if (!isDarkMode) {
                this.style.cssText += 'border-bottom: 2px solid transparent;';
            }
        });


    });
    // .............This is for top navbar...................
    footeranchorTags.forEach(footeranchor => {
        footeranchor.style.cssText = isDarkMode ? '' : 'background-color: black; color: white;border-bottom: 2px solid transparent;';

        // Add hover styles
        footeranchor.addEventListener('mouseover', function () {
            if (!isDarkMode) {
                this.style.cssText += 'border-bottom: 2px solid white;';
            }
        });
        footeranchor.addEventListener('mouseout', function () {
            if (!isDarkMode) {
                this.style.cssText += 'border-bottom: 2px solid transparent;';
            }
        });


    });

    // Display appropriate alerts and set styles based on the toggle
    setTimeout(() => {
        // alert(isDarkMode ? "Light Mode Enabled!" : "Dark Mode Enabled!");
    }, 100);

    dark.style.cssText = isDarkMode ? 'display:none' : 'display:block';
    light.style.cssText = isDarkMode ? 'display:block' : 'display:none';
    myNavbar.style.cssText = isDarkMode ? '' : 'background-color: black; color: white;';
    divider.style.cssText = isDarkMode ? '' : 'border-left: 2px solid white;';
    cvCheckBtn.style.cssText = isDarkMode ? '' : 'border: 2px solid white';
    //    ...................
    footer.style.cssText = isDarkMode ? '' : 'background-color: black; color: white;';
    footersectionRight.style.cssText = isDarkMode ? '' : 'background: white; border-radius: 4px;';


    // ..............THIS IS HEADER SECTUION MOOD CHANGE CODE....................

    let headerContentItems = document.querySelectorAll('.content-part p')
    let locationTextItems = document.querySelectorAll('.locationText')

    headerContentItems.forEach(headerContent => {
        headerContent.style.cssText = isDarkMode ? '' : 'color:white;';
    })

    locationTextItems.forEach(locationText => {
        locationText.style.cssText = isDarkMode ? '' : 'color:white;';
    })

    // ..............THIS IS REWARD HEADING SECTUION MOOD CHANGE CODE....................

    let rewardsHeadingItems = document.querySelectorAll('.rewardsHeading')

    rewardsHeadingItems.forEach(rewardsHeading => {

        rewardsHeading.style.cssText = isDarkMode ? '' : 'color:white;';

    });


    // ..............THIS IS ABOUT SECTUION MOOD CHANGE CODE....................

    let aboutContentItems = document.querySelectorAll('.aboutContent')
    let aboutSection1 = document.querySelector('.aboutSection1')
    let aboutSection2 = document.querySelector('.aboutSection2')

    aboutContentItems.forEach(aboutContent => {

        aboutContent.style.cssText = isDarkMode ? '' : 'color:white;'

    });

    aboutSection1.style.cssText = isDarkMode ? '' : 'background-color:black;'
    aboutSection2.style.cssText = isDarkMode ? '' : 'color:white;'



    // ..............THIS IS ABOUT MY SKILLS MOOD CHANGE CODE....................

    let title1Items = document.querySelectorAll('.title1')
    let title2Items = document.querySelectorAll('.title2')
    let contentItems = document.querySelectorAll('.content')
    let skillItems = document.querySelectorAll('.skill-Content-Section')

    title1Items.forEach(titletag => {
        titletag.style.cssText = isDarkMode ? '' : 'background-color:black;'

    });
    title2Items.forEach(titleHeading => {

        titleHeading.style.cssText = isDarkMode ? '' : 'color:white;'

    });

    contentItems.forEach(Content => {
        Content.style.cssText = isDarkMode ? '' : 'background-color: #d2e3fc;';

    });

    skillItems.forEach(skillContent => {
        skillContent.style.cssText = isDarkMode ? '' : 'background-color: #d2e3fc;';

    });





    // ..............THIS IS PROJECT MOOD CHANGE CODE....................

    let projectsItems = document.querySelectorAll('.projectColmumn-Left');

    let projectRow = document.querySelectorAll('.projectsRow');


    projectsItems.forEach(projectContent => {
        projectContent.style.cssText = isDarkMode ? '' : 'background-color: #d2e3fc;';

    });
    projectRow.forEach(projectRowContent => {
        projectRowContent.style.cssText = isDarkMode ? '' : 'background-color: #d2e3fc;';

    });




    // ..............THIS IS TESTIMONIAL MOOD CHANGE CODE....................

    let testimonial = document.querySelector('.testimonial');
    let cardItems = document.querySelectorAll('.card');

    testimonial.style.cssText = isDarkMode ? '' : 'background-color: #d2e3fc;';

    cardItems.forEach(cardcontent => {
        cardcontent.style.cssText = isDarkMode ? '' : 'background-color: #adceff73';

    });

    // ..............THIS IS CONTACT MOOD CHANGE CODE....................

    let contactSection2 = document.querySelector('.contactSection2');
    let labelItems1 = document.querySelectorAll('.row label');
    let labelItems2 = document.querySelectorAll('.col label');



    contactSection2.style.cssText = isDarkMode ? '' : 'color:white;';

    labelItems1.forEach(labelContent1 => {
        labelContent1.style.cssText = isDarkMode ? '' : 'color:white;';

    });
    labelItems2.forEach(labelContent2 => {
        labelContent2.style.cssText = isDarkMode ? '' : 'color:white;';

    });

    // ..............THIS IS GET IN TOUCH MOOD CHANGE CODE....................


    let hading1 = document.querySelector('.hading1');
    let getintouchItems = document.querySelector('.touch');
    let socialTouch = document.querySelector('.socialTouch');

    hading1.style.cssText = isDarkMode ? '' : 'background-color: black;';
    getintouchItems.style.cssText = isDarkMode ? '' : 'background-color: #d2e3fc;';
    socialTouch.style.cssText = isDarkMode ? '' : 'color:black;';



    // #d2e3fc
}
