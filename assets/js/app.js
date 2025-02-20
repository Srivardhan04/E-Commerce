// app.js (or inside the <script> tag of index.html)

// Search function to filter products
function searchProducts() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        const title = item.querySelector('h3').innerText.toLowerCase();
        const description = item.querySelector('p').innerText.toLowerCase(); // Optional, if you want to include description in search
        if (title.includes(searchQuery) || description.includes(searchQuery)) {
            item.style.display = ''; // Show product
        } else {
            item.style.display = 'none'; // Hide product
        }
    });
}

// Reset search when Home button is clicked
document.getElementById('home-button').addEventListener('click', function() {
    // Reset search bar and show all products
    document.getElementById('search-bar').value = ''; // Clear the search input field
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        item.style.display = ''; // Show all products
    });
});
