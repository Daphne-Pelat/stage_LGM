// Sélectionner toutes les sections
const sections = document.querySelectorAll("section");

// Observer les sections pour la mise en évidence du lien actif
sections.forEach(section => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav a[href="#${id}"]`).classList.add("active");
            } else {
                document.querySelector(`nav a[href="#${id}"]`).classList.remove("active");
            }
        });
    });

    observer.observe(section);
});
