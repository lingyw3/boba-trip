const charlietownSHStore = {
    name: "Charlestown – Shanghai",
    lat: 31.2435,
    lng: 121.4372,
    isMain: true,
    storeData: {
      images: [
        {
          src: "images/charlietown_sh_ch_1.jpg",
          alt: "Exterior of Charlestown tea shop in Shanghai"
        },
        {
          src: "images/charlietown_sh_ch_2.png",
          alt: "Dr. Luoyi Milk Tea with pearls, close-up view"
        },
        {
          src: "images/charlietown2.jpg",
          alt: "My friends and I enjoying Charlietown's drinks"
        }
      ],
      store_review: "We stopped by on Qixi Festival after seeing glowing reviews online. The wait was surprisingly short — only 10-15 minutes!",
      drink: {
        name: "Dr. Luoyi Milk Tea",
        review: "⭐⭐⭐⭐⭐ Smooth and rich, with a roasted tea flavor that stands out. The chewy pearls were perfect. Definitely a unique twist — I'd try it again!",
        price: "💸 Pricey, but worth a try for the special taste!"
      },
      location_text: "600 Moganshan Rd, Tian An Qianshu Bldg 1F, Putuo District, Shanghai, China",
      website: "https://www.instagram.com/daxue_consulting_china/p/DF9vmqKTP5J/"
    }
  };
  
  if (typeof window !== "undefined") {
    window.charlietownSHStore = charlietownSHStore;
  }
  