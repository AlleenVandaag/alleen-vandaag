function toggleMenu() {
    document.getElementById("nav-list").classList.toggle("show");
}
const boldWords = document.querySelectorAll("footer b");

boldWords.forEach(word => {
  word.addEventListener("mouseover", () => {
    word.classList.add("bounce");
    setTimeout(() => word.classList.remove("bounce"), 600); 
  });
});

function toggleMenu() {
    document.getElementById("nav-list").classList.toggle("show");
}

const dropdownParents = document.querySelectorAll("nav ul li.has-dropdown > a");

dropdownParents.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); 
        const dropdown = link.nextElementSibling;
        dropdown.classList.toggle("show");
    });
});
