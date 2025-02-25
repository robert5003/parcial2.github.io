document.addEventListener("DOMContentLoaded", () => {
    const verMasBtn = document.getElementById("ver-mas");
    const placesSection = document.getElementById("places");

    verMasBtn.addEventListener("click", () => {
        if (!placesSection.classList.contains("visible")) {
            placesSection.classList.add("visible");
            verMasBtn.classList.add("hidden");

            setTimeout(() => {
                placesSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 300); 
        }
    });

    const places = document.querySelectorAll(".place");
    places.forEach(place => {
        place.addEventListener("mouseover", () => {
            place.querySelector("h2").style.color = "#ffcc00";
        });

        place.addEventListener("mouseout", () => {
            place.querySelector("h2").style.color = "#ffffff";
        });

        place.addEventListener("click", () => {
            const description = place.querySelector(".description");
            description.style.display = description.style.display === "none" ? "block" : "none";
        });
    });
});
