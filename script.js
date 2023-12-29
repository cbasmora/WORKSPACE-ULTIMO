const searchInput = document.getElementById("search");
const documentList = document.getElementById("document-list");

searchInput.addEventListener("input", filterDocuments);

function filterDocuments() {
    const searchTerm = searchInput.value.toLowerCase();
    const items = documentList.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const documentName = item.textContent.toLowerCase();
        if (documentName.includes(searchTerm)) {
            item.style.display = "list-item";
        } else {
            item.style.display = "none";
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const documentLinks = document.querySelectorAll("#document-list a");
    const descriptionBox = document.getElementById("description-box");

    documentLinks.forEach((link) => {
        link.addEventListener("mouseover", (event) => {
            const description = event.target.getAttribute("data-description");
            descriptionBox.innerHTML = description;
            descriptionBox.classList.remove("hidden");
        });

        link.addEventListener("mouseout", () => {
            descriptionBox.innerHTML = "";
            descriptionBox.classList.add("hidden");
        });
    });
});
