const miusteaMiamiStore = {
    name: "Miu's Tea – Miami",
    lat: 25.7621,
    lng: -80.1926,
    isMain: true,
    storeData: {
      images: [
        "images/miustea_miami_us_1.jpg",
        "images/miustea_miami_us_2.jpg",
        "images/miustea_miami_us_3.jpg"
      ],
      store_review: "Just opened near Brickell City Centre. Love the vibe — perfect spot to chill after shopping or while waiting for traffic to ease up.",
      drink: {
        name: "Thai Tea",
        review: "⭐⭐⭐⭐⭐ No sugar, no ice + boba. Super smooth, just the right sweetness. I liked it 😘",
        price: "$6.37"
      },
      location_text: "701 S Miami Ave, Unit 352B, Miami, FL 33130",
      website: "https://www.miustea.com/"
    }
  };
  
  if (typeof window !== "undefined") {
    window.miusteaMiamiStore = miusteaMiamiStore;
  }
  