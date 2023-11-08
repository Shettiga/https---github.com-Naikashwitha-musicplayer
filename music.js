// JavaScript code to handle the search functionality
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

searchButton.addEventListener("click", function () {
    const searchText = searchInput.value.trim(); // Remove leading and trailing whitespace

    if (searchText === "") {
        alert("Please enter a search query.");
    } else {
        // Replace this condition with your own search logic
        if (searchText === "music1") {
            alert("Music 1 found!");
        } else if (searchText === "music2") {
            alert("Music 2 found!");
        } else {
            alert("Music not found.");
        }
    }
});
