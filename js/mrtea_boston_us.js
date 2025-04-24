const mrteaBostonStore = {
  name: "Mr. Tea – Boston",
  lat: 42.3509,
  lng: -71.0807,
  isMain: true,
  storeData: {
    images: [
      {
        src: "images/mrtea_boston_us_1.jpg",
        alt: "Front sign of Mr. Tea store on Newbury Street in Boston"
      },
      {
        src: "images/mrtea_boston_us_2.jpg",
        alt: "Close-up of Original Milk Tea with Boba from Mr. Tea"
      },
      {
        src: "images/mrtea_boston_us_3.jpg",
        alt: "Interior of Mr. Tea Boston cafe"
      },
      {
        src: "images/mrtea_boston_us_4.jpg",
        alt: "Customers ordering drinks at the counter in Mr. Tea"
      },
      {
        src: "images/mrtea_boston_us_5.jpg",
        alt: "Milk tea drinks on a table at Mr. Tea Boston"
      }
    ],
    store_review: "Grabbed this after a fun leaf-peeping trip in Boston 🍂. Copley location — solid option right in the city.",
    drink: {
      name: "Original Milk Tea with Boba",
      review: "⭐⭐⭐⭐ Nostalgic! Strong black tea flavor with chewy pearls. Slightly floral — loved the balance and richness.",
      price: "$6.50"
    },
    location_text: "266 Newbury St, Boston, MA 02116",
    website: "https://www.mrteacafe.com/"
  }
};

if (typeof window !== "undefined") {
  window.mrteaBostonStore = mrteaBostonStore;
}
