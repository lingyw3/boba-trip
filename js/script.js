// === Initialize Leaflet map ===
const map = L.map('map');

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// === Store ID → Full Store Object Mapping ===
const storeDataMap = {};

if (typeof window.cocoStore !== "undefined") {
  storeDataMap["coco_aa_us"] = window.cocoStore;
}
if (typeof window.miusteaMiamiStore !== "undefined") {
  storeDataMap["miustea_miami_us"] = window.miusteaMiamiStore;
}
if (typeof window.debuteaNYStore !== "undefined") {
  storeDataMap["debutea_ny_us"] = window.debuteaNYStore;
}
if (typeof window.mrteaBostonStore !== "undefined") {
  storeDataMap["mrtea_boston_us"] = window.mrteaBostonStore;
}
if (typeof window.threecateaLAStore !== "undefined") {
  storeDataMap["3catea_la_us"] = window.threecateaLAStore;
}
if (typeof window.charlietownSHStore !== "undefined") {
  storeDataMap["charlietown_sh_ch"] = window.charlietownSHStore;
}

// === Store List ===
const bobaStores = [
  { id: "coco_aa_us", name: "Coco - North Campus", lat: 42.3029, lng: -83.7056 },
  { id: "miustea_miami_us", name: "Miu's Tea – Miami", lat: 25.7621, lng: -80.1926 },
  { id: "debutea_ny_us", name: "Debutea – New York", lat: 40.729, lng: -73.9975 },
  { id: "mrtea_boston_us", name: "Mr. Tea – Boston", lat: 42.3509, lng: -71.0807 },
  { id: "3catea_la_us", name: "3catea – Pasadena", lat: 34.1460, lng: -118.1503 },
  { id: "charlietown_sh_ch", name: "Charlestown – Shanghai", lat: 31.2435, lng: 121.4372 }
];

// === Place Markers + Create Feature Group for fitBounds ===
const markerGroup = L.featureGroup();

bobaStores.forEach(store => {
  const marker = L.marker([store.lat, store.lng]).addTo(map);
  markerGroup.addLayer(marker);

  marker.bindTooltip(store.name, {
    permanent: true,
    direction: 'top',
    offset: [0, -10],
    className: 'custom-tooltip'
  }).openTooltip();

  if (storeDataMap[store.id]) {
    const fullStore = storeDataMap[store.id];
    const data = fullStore.storeData;

    marker.on('click', () => {
      // Load images
      const imageContainer = document.querySelector(".popup-image-scroll");
      imageContainer.innerHTML = "";
      // data.images.forEach(img => {
      //   const imgEl = document.createElement("img");
      //   imgEl.src = img;
      //   imgEl.classList.add("popup-img");
      //   imageContainer.appendChild(imgEl);
      // });
      data.images.forEach(imgObj => {
        const imgEl = document.createElement("img");
        imgEl.src = imgObj.src;
        imgEl.alt = imgObj.alt || "Boba shop photo";  // fallback alt
        imgEl.classList.add("popup-img");
        imageContainer.appendChild(imgEl);
      });
      

      // Load text
      document.getElementById("popup-store-name").textContent = fullStore.name;
      document.getElementById("popup-store-review").textContent = data.store_review;
      document.getElementById("popup-drink-name").textContent = data.drink.name;
      document.getElementById("popup-drink-review").textContent = data.drink.review;
      document.getElementById("popup-drink-price").textContent = data.drink.price;
      document.getElementById("popup-location").textContent = data.location_text;

      const link = document.getElementById("popup-link");
      link.href = data.website;
      link.textContent = `Check out ${fullStore.name}'s website`;
      link.target = "_blank";

      document.getElementById("popup").classList.remove("hidden");

      // Disable map interactions
      map.dragging.disable();
      map.touchZoom.disable();
      map.doubleClickZoom.disable();
      map.scrollWheelZoom.disable();
    });
  }
});

// === Fit Map to Marker Bounds ===
map.fitBounds(markerGroup.getBounds());

// === Popup Close Button ===
document.getElementById("close-popup").addEventListener("click", () => {
  document.getElementById("popup").classList.add("hidden");
  map.dragging.enable();
  map.touchZoom.enable();
  map.doubleClickZoom.enable();
  map.scrollWheelZoom.enable();
});

// === Click outside popup to close ===
window.addEventListener("click", (e) => {
  const popup = document.getElementById("popup");
  const isMarker = e.target.classList.contains("leaflet-marker-icon");

  if (!popup.classList.contains("hidden") &&
      !popup.contains(e.target) &&
      !isMarker) {
    popup.classList.add("hidden");
    map.dragging.enable();
    map.touchZoom.enable();
    map.doubleClickZoom.enable();
    map.scrollWheelZoom.enable();
  }
});
