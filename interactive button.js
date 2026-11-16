function togglegrids() {
    var grid = document.getElementById("show-grid");

    if (grid.style.display === "none") {
        grid.style.display = "grid";
    } else {
        grid.style.display = "none";
    }
}