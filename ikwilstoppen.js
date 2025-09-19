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

function toggleFact(el) {
  const fact = el.querySelector('.facttext');
  if (fact.style.display === 'block') {
    fact.style.display = 'none';
  } else {
    fact.style.display = 'block';
  }
}

// Klik ergens anders sluit alle factboxen
document.addEventListener('click', function(e) {
  const facts = document.querySelectorAll('.facttext');
  facts.forEach(f => {
    if (!f.parentElement.contains(e.target)) {
      f.style.display = 'none';
    }
  });
});

