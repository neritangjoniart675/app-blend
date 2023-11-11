/* filename: sophisticated_code.js */

// This code is an example of a sophisticated and elaborate JavaScript program,
// designed to showcase advanced programming techniques and creative problem-solving.
// It simulates a virtual art gallery, where users can browse through different
// galleries, view artwork details, and even purchase artwork using a virtual currency.

// Constants
const GALLERY_NAMES = ['Modern Art', 'Classic Paintings', 'Digital Exhibition'];
const ARTWORK_TYPES = ['Painting', 'Sculpture', 'Photography'];

// Classes
class Artwork {
    constructor(name, artist, type, price) {
        this.name = name;
        this.artist = artist;
        this.type = type;
        this.price = price;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Artist: ${this.artist}`);
        console.log(`Type: ${this.type}`);
        console.log(`Price: $${this.price}`);
    }
}

class Gallery {
    constructor(name) {
        this.name = name;
        this.artworks = [];
    }

    addArtwork(artwork) {
        this.artworks.push(artwork);
    }

    displayGallery() {
        console.log(`Gallery: ${this.name}`);
        console.log('--------------------------------------');
        this.artworks.forEach((artwork, index) => {
            console.log(`Artwork ${index + 1}:`);
            artwork.displayDetails();
            console.log('--------------------------------------');
        });
    }
}

class User {
    constructor(name) {
        this.name = name;
        this.balance = 1000;
        this.cart = [];
    }

    addToCart(artwork) {
        if (this.cart.includes(artwork)) {
            console.log('This artwork is already in your cart!');
        } else {
            this.cart.push(artwork);
            console.log('Artwork added to your cart!');
        }
    }

    removeFromCart(artwork) {
        const index = this.cart.indexOf(artwork);
        if (index !== -1) {
            this.cart.splice(index, 1);
            console.log('Artwork removed from your cart!');
        } else {
            console.log('This artwork is not in your cart!');
        }
    }

    purchaseCart() {
        const total = this.cart.reduce((acc, artwork) => acc + artwork.price, 0);
        if (total > this.balance) {
            console.log('Insufficient balance to purchase the artwork(s)!');
        } else {
            this.balance -= total;
            this.cart = [];
            console.log('Artworks purchased successfully!');
        }
    }
}

// Create galleries and artworks
const galleries = GALLERY_NAMES.map((name) => new Gallery(name));

for (let i = 0; i < galleries.length; i++) {
    for (let j = 1; j <= 5; j++) {
        const artwork = new Artwork(
            `Artwork ${j}`,
            `Artist ${j}`,
            ARTWORK_TYPES[Math.floor(Math.random() * ARTWORK_TYPES.length)],
            Math.floor(Math.random() * 500) + 100
        );
        galleries[i].addArtwork(artwork);
    }
}

// Simulation
console.log('Welcome to the Virtual Art Gallery!');
console.log('----------------------------------');
const user = new User('John Doe');

galleries.forEach((gallery) => {
    console.log(`\nBrowsing ${gallery.name}:`);
    gallery.displayGallery();
    const randomArtwork = gallery.artworks[Math.floor(Math.random() * gallery.artworks.length)];
    console.log(`\nAdding ${randomArtwork.name} to cart...`);
    user.addToCart(randomArtwork);
    console.log('\nCurrent cart:');
    user.cart.forEach((artwork) => artwork.displayDetails());
});

console.log(`\n${user.name}'s cart before purchase:`);
user.cart.forEach((artwork) => artwork.displayDetails());
console.log(`Balance: $${user.balance}`);
console.log('\nPurchasing artworks...');
user.purchaseCart();
console.log(`\n${user.name}'s cart after purchase:`);
user.cart.forEach((artwork) => artwork.displayDetails());
console.log(`Balance: $${user.balance}`);

// End of code