let navbar = `
<div class="navbar">
    <a href="index.html">Home</a>
    <a href="Mirage.html">Mirage</a>
    <a href="Inferno.html">Inferno</a>
    <a href="Vertigo.html">Vertigo</a>
    <a href="Ancient.html">Ancient</a>
    <a href="DustII.html">Dust II</a>
    <a href="Nuke.html">Nuke</a>
</div>
`

window.onload = function(e) {
    document.querySelector(".navbar").outerHTML = navbar;
}