const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section");

navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const sectionId = event.target.getAttribute("href");
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

window.addEventListener("scroll", event => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const bottom = section.getBoundingClientRect().bottom;
        if (top < 150 && bottom > 150) {
            const id = section.getAttribute("id");
            const navLink = document.querySelector(`nav a[href="#${id}"]`);
            navLinks.forEach(link => link.classList.remove("active"));
            navLink.classList.add("active");
        }
    });
});

const skillItems = document.querySelectorAll("#skills li");
let isVisible = false;

const toggleSkills = () => {
    if (isVisible) {
        skillItems.forEach((skill, index) => {
            setTimeout(() => {
                skill.classList.remove("visible");
            }, 200 * index);
        });
    } else {
        skillItems.forEach((skill, index) => {
            setTimeout(() => {
                skill.classList.add("visible");
            }, 200 * index);
        });
    }
    isVisible = !isVisible;
};

const skillsButton = document.querySelector("#skills button");
skillsButton.addEventListener("click", toggleSkills);

