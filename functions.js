document.getElementById("printButton").addEventListener("click", function() {
    window.print();
});
const toggleButton = document.getElementById("toggleTheme");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
}

toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
        theme = "dark";
    }
    localStorage.setItem("theme", theme);
});

