const debuteaNYStore = {
    name: "Debutea – New York",
    lat: 40.729,
    lng: -73.9975,
    isMain: true,
    storeData: {
      images: [
        "images/debutea_ny_us_1.jpg",
        "images/debutea_ny_us_2.jpg",
        "images/debutea_ny_us_3.jpg"
      ],
      store_review: "Found this spot open even on Thanksgiving! A cozy milk tea escape right by NYU.",
      drink: {
        name: "Jasmine Yakult Green Tea",
        review: "⭐⭐⭐ Pretty decent overall. Less sweet than expected, but still refreshing. Not super memorable, but not bad either!",
        price: "~$8 (NY pricing...)"
      },
      location_text: "217 Thompson St, New York, NY 10012",
      website: "https://www.debutea.co/"
    }
  };
  
  if (typeof window !== "undefined") {
    window.debuteaNYStore = debuteaNYStore;
  }
  