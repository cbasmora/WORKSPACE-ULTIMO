const searchInput = document.getElementById("search");
const content = document.getElementById("content");

searchInput.addEventListener("input", highlightSearch);

function highlightSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (!searchTerm) {
        removeHighlights(content);
        return;
    }

    const textNodes = getTextNodes(content);

    textNodes.forEach((node) => {
        const text = node.textContent.toLowerCase();
        const index = text.indexOf(searchTerm);
        if (index >= 0) {
            const before = document.createTextNode(text.substring(0, index));
            const match = document.createElement("span");
            match.textContent = text.substring(index, index + searchTerm.length);
            match.classList.add("highlight");
            const after = document.createTextNode(text.substring(index + searchTerm.length));

            const parent = node.parentNode;
            parent.replaceChild(after, node);
            parent.replaceChild(match, after);
            parent.replaceChild(before, match);
        }
    });
}

function getTextNodes(node) {
    const textNodes = [];
    if (node.nodeType === Node.TEXT_NODE) {
        textNodes.push(node);
    } else {
        const children = node.childNodes;
        for (let i = 0; i < children.length; i++) {
            textNodes.push(...getTextNodes(children[i]));
        }
    }
    return textNodes;
}

function removeHighlights(node) {
    const highlights = node.querySelectorAll(".highlight");
    highlights.forEach((highlight) => {
        const parent = highlight.parentNode;
        const text = document.createTextNode(highlight.textContent);
        parent.replaceChild(text, highlight);
    });
}
