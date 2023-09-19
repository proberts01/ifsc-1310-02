function toggleStyles() {
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach((stylesheet) => {
        stylesheet.disabled = !stylesheet.disabled;
    });
}