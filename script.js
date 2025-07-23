const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMobileMenu = document.getElementById("closeMobileMenu");
const overlay = document.getElementById("overlay");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
});

closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
  overlay.classList.add("hidden");
});

const unitData = {
  surabaya: [
    { tipe: "123", harga: "Rp 2,46 Miliar", tidur: 5, mandi: 3, bangunan: 126, tanah: 123, image: "https://via.placeholder.com/400x300" },
    { tipe: "175", harga: "Rp 3,6 Miliar", tidur: 5, mandi: 5, bangunan: 180, tanah: 175, image: "https://via.placeholder.com/400x300" },
  ],
  jakarta: [{ tipe: "231", harga: "Rp 4,77 Miliar", tidur: 6, mandi: 5, bangunan: 240, tanah: 231, image: "https://via.placeholder.com/400x300" }],
  bandung: [],
  makassar: [],
  Malang: [],
  Samarinda: [],
};

const container = document.getElementById("unit-container");
const buttons = document.querySelectorAll("[data-region]");

function renderUnits(region) {
  container.innerHTML = "";
  const units = unitData[region] || [];
  if (units.length === 0) {
    container.innerHTML = '<p class="text-center text-gray-500">Belum ada unit tersedia untuk wilayah ini.</p>';
    return;
  }

  const grid = document.createElement("div");
  grid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

  units.forEach((unit) => {
    const card = document.createElement("div");
    card.className = "border rounded-lg overflow-hidden shadow-sm bg-white";
    card.innerHTML = `
          <img src="${unit.image}" alt="Unit ${unit.tipe}" class="w-full h-30 object-cover">
          <div class="p-4">
            <h4 class="text-lg font-semibold">Tipe ${unit.tipe}</h4>
            <p class="text-blue-700 font-bold text-xl">${unit.harga}</p>
            <div class="flex justify-between text-sm text-gray-600 mt-2">
              <span><i data-feather="home"></i> ${unit.tidur} KT</span>
              <span><i data-feather="droplet"></i> ${unit.mandi} KM</span>
              <span><i data-feather="maximize"></i> ${unit.bangunan} m<sup>2</sup></span>
              <span><i data-feather="square"></i> ${unit.tanah} m<sup>2</sup></span>
            </div>
            <div class="mt-4 flex justify-between">
              <button class="border px-4 py-2 rounded text-sm hover:bg-gray-100">Detail Unit</button>
              <button class="bg-blue-700 text-white px-4 py-2 rounded text-sm flex items-center gap-2"><i data-feather="message-circle"></i> Booking</button>
            </div>
          </div>
        `;
    grid.appendChild(card);
  });
  container.appendChild(grid);
  feather.replace();
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-region]").forEach((b) => b.classList.remove("font-semibold", "text-green-600", "border-green-800", "border-b-2"));
    btn.classList.add("font-semibold", "text-green-600", "border-green-600", "border-b-2");
    renderUnits(btn.dataset.region);
  });
});

renderUnits("surabaya");

function toggleFAQ(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector("svg");
  content.classList.toggle("hidden");
  icon.classList.toggle("rotate-180");
}
