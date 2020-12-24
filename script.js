const links = document.querySelectorAll(".link");

window.addEventListener("scroll", checkLinks);

checkLinks();

function checkLinks() {
    const triggerBottom = window.innerHeight - 150;

    links.forEach(link => {
        const linkTop = link.getBoundingClientRect().top;

        if (linkTop < triggerBottom) {
            link.classList.add("show");
        } else {
            link.classList.remove("show");
        }
    })
}
