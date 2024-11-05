let navbar = `
<div class="navbar">
    <a href="index.html">Home</a>
    <a href="Mirage.html">Mirage</a>
    <a href="Inferno.html">Inferno</a>
    <a href="Vertigo.html">Vertigo</a>
    <a href="Ancient.html">Ancient</a>
</div>
`

window.onload = function(e) {
    document.querySelector(".navbar").outerHTML = navbar;
}