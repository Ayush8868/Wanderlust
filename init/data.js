const sampleListings = [
    {
        title: "My New Villa",
        description: "By the beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1200,
        location: "Calangute, Goa",
        country: "India",
    },
    {
        title: "Luxury Beach House",
        description: "Private beach access",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1440778303588-435521a205bc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1500,
        location: "Cancun, Mexico",
        country: "Mexico",
    },
    {
        title: "Seaside Paradise",
        description: "Stunning ocean views",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1530968033775-2c92736b131e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1800,
        location: "Maui, Hawaii",
        country: "United States",
    },
    {
        title: "Mountain Retreat",
        description: "Cozy cabin in the woods",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1708597670612-70bd08ab2850?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 900,
        location: "Aspen, Colorado",
        country: "United States",
    },
    {
        title: "Urban Loft",
        description: "Chic apartment in the city center",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1661964008982-787fe7785213?q=80&w=955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1100,
        location: "New York City, New York",
        country: "United States",
    },
    {
        title: "Coastal Cottage",
        description: "Quaint getaway by the sea",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1542314820-e04ce1d3d81a?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1000,
        location: "Devon, England",
        country: "United Kingdom",
    },
    {
        title: "Lakefront Cabin",
        description: "Cozy retreat with lake views",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1698213248624-a0c4da6da36f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1250,
        location: "Lake Como, Italy",
        country: "Italy",
    },
    {
        title: "Hilltop Villa",
        description: "Panoramic views from the hillside",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1414187976819-32a4deaae820?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1700,
        location: "Barcelona, Spain",
        country: "Spain",
    },
    {
        title: "Desert Oasis",
        description: "Luxury resort in the desert",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1591879963164-89f01004dec0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 2100,
        location: "Dubai, United Arab Emirates",
        country: "United Arab Emirates",
    },
    {
        title: "Ski Chalet",
        description: "Slope-side living in the mountains",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1546593064-053d21199be1?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1850,
        location: "Chamonix, France",
        country: "France",
    },
    {
        title: "Riverfront Villa",
        description: "Elegant villa with river views",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1528228953047-fb292ecb300f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 2200,
        location: "Amsterdam, Netherlands",
        country: "Netherlands",
    },
    {
        title: "Countryside Cottage",
        description: "Traditional cottage in scenic countryside",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1505916349660-8d91a99c3e23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 950,
        location: "County Kerry, Ireland",
        country: "Ireland",
    },
    {
        title: "Penthouse Suite",
        description: "Luxurious penthouse with city skyline views",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 2400,
        location: "Tokyo, Japan",
        country: "Japan",
    },
    {
        title: "Historic Manor",
        description: "Stately manor with historic charm",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1528736613140-347578be84c2?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 2800,
        location: "Edinburgh, Scotland",
        country: "Scotland",
    },
    {
        title: "Beachfront Villa",
        description: "Spacious villa with direct beach access",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1707075108813-edefd7b3308d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1950,
        location: "Phuket, Thailand",
        country: "Thailand",
    },
    {
        title: "Mountain Lodge",
        description: "Rustic lodge in the mountains",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1586234709312-4145ef4517db?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1350,
        location: "Breckenridge, Colorado",
        country: "United States",
    },
    {
        title: "Tuscany Retreat",
        description: "Idyllic retreat in the Tuscan countryside",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1643365227235-1e29f7fcf0f4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1600,
        location: "Tuscany, Italy",
        country: "Italy",
    },
    {
        title: "Lakeside Cabin",
        description: "Charming cabin on the lake shore",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602513720916-0ca41dbf2cdc?q=80&w=934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1100,
        location: "Lake Tahoe, California",
        country: "United States",
    },
    {
        title: "Riverside Cottage",
        description: "Quaint cottage by the river",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1519998823760-5f7b0549b378?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 950,
        location: "Cotswolds, England",
        country: "United Kingdom",
    },
    {
        title: "City View Apartment",
        description: "Modern apartment with stunning city views",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1516842531215-b75d285fd696?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1300,
        location: "Sydney, Australia",
        country: "Australia",
    },
    {
        title: "Forest Cabin",
        description: "Secluded cabin in the forest",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1601919051950-bb9f3ffb3fee?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1000,
        location: "Redwood National Park, California",
        country: "United States",
    },
    {
        title: "Beachfront Bungalow",
        description: "Breezy bungalow steps from the beach",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1495416868322-0cb3f6219d8b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1400,
        location: "Bali, Indonesia",
        country: "Indonesia",
    },
    {
        title: "Mountain View Chalet",
        description: "Chalet with stunning mountain views",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1485801152695-e82b7cb1f3ff?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1750,
        location: "Zermatt, Switzerland",
        country: "Switzerland",
    },
    {
        title: "Lakeside Retreat",
        description: "Tranquil retreat by the lake",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1466610549707-3c35c772f484?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1200,
        location: "Lake District, England",
        country: "United Kingdom",
    },
    {
        title: "Sunny Villa",
        description: "Bright and airy villa with garden",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1661676037890-f8b49416b54f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1650,
        location: "Santorini, Greece",
        country: "Greece",
    },
    {
        title: "Riverfront Retreat",
        description: "Relaxation on the banks of the river",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470043201067-764120126eb4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1300,
        location: "Big Sur, California",
        country: "United States",
    },
    {
        title: "Rural Farmhouse",
        description: "Charming farmhouse in the countryside",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1679480554968-b76deb287584?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1150,
        location: "Provence, France",
        country: "France",
    },
    {
        title: "Modern City Loft",
        description: "Sleek loft in the heart of the city",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 1450,
        location: "Paris, France",
        country: "France",
    }
];


module.exports = { data: sampleListings};

