const cocoStore = {
  name: "Coco - North Campus",
  lat: 42.3029,
  lng: -83.7056,
  isMain: true,
  storeData: {
    images: [
      {
        src: "images/coco_aa_us_1.jpg",
        alt: "Outside look of Coco North Campus"
      },
      {
        src: "images/coco_aa_us_2.jpg",
        alt: "Coco's Tropical Fruit Tea"
      },
      {
        src: "images/coco_aa_us_3.jpg",
        alt: "Coco's Taro Milk Tea"
      },
      {
        src: "images/coco_aa_us_4.jpg",
        alt: "Coco's Double Delight-My favorite!"
      }
    ],
    store_review: "Went to the North Campus one—it’s not easy to get to without a car.",
    drink: {
      name: "Double Delight",
      review: "⭐⭐⭐⭐⭐ Tasty! Classic powdered milk tea vibes—light but you can still taste the tea. Pearls are soft, pudding’s smooth. Solid pick!",
      price: "$ 6.1 (self-service kiosk)"
    },
    location_text: "1731 Plymouth Rd, Ann Arbor, MI 48105",
    website: "https://cocoteaannarbor.square.site/"
  }
};


if (typeof window !== "undefined") {
  window.cocoStore = cocoStore;
}
