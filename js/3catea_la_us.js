const threecateaLAStore = {
    name: "3catea – Pasadena",
    lat: 34.1460,
    lng: -118.1503,
    isMain: true,
    storeData: {
      // images: [
      //   "images/3catea_la_us_1.jpg",
      //   "images/3catea_la_us_2.png",
      //   "images/3catea_la_us_3.png"
      // ],
      images: [
        {
          src: "images/3catea_la_us_1.jpg",
          alt: "Front of 3catea Pasadena tea shop"
        },
        {
          src: "images/3catea_la_us_2.png",
          alt: "Close-up of White Grape Oolong with Osmanthus Jelly"
        },
        {
          src: "images/3catea_la_us_3.png",
          alt: "Friends enjoying boba at 3catea Pasadena"
        }
      ],
      store_review: "This was hands down my favorite tea in all of California — even better than the famous SF spots. Pasadena 3catea is a hidden gem!",
      drink: {
        name: "White Grape Oolong with Osmanthus Jelly",
        review: "⭐⭐⭐⭐⭐ SO good. Bright oolong, light grape taste, floral finish. The osmanthus jelly was a highlight — fragrant and chewy!",
        price: "$5.75 + $1 osmanthus jelly + tax"
      },
      location_text: "55 W Green Street, Pasadena, CA 91105",
      website: "https://www.3catea.com/"
    }
  };
  
  if (typeof window !== "undefined") {
    window.threecateaLAStore = threecateaLAStore;
  }
  