function myFunction() {
    var siniflar = ["container", "kutu", "body"];
    for (let i = 0; i < siniflar.length; i++) {
        const element = siniflar[i];
        var x = document.getElementById(element);
        if (x.className == element) {
            x.className = "dark_" + element;
			document.getElementById("darkmode").textContent = "LİGHT MODE"
        }
        else if (x.className == "dark_" + element) {
            x.className = element;
			document.getElementById("darkmode").textContent = "DARK MODE"
        }
    }
}