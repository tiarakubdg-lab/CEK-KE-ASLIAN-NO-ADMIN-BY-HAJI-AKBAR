
const admins = [
  { name: "DHANZZ BAWAHAN", number: "085668977853" },
  { name: "ASEP JEBE", number: "085770287407" },
  { name: "GARR STR", number: "0882021772928" },
  { name: "JB EL", number: "083857110399" },
  { name: "JB MASPE", number: "085924669786" },
  { name: "REXX SHIKI", number: "082372376190" },
  { name: "RIZKY SHOPEE", number: "085712297033" },
  { name: "ALTOP", number: "085738872257" },
  { name: "TEBEW MARKET", number: "085712782628" },
  { name: "ADMIN 10", number: "088272120427" },
  { name: "PIRA STORE", number: "083159083375" }
];

function formatWA(number) {
  return number.startsWith("0")
    ? "62" + number.slice(1)
    : number;
}

function chatWA(number) {
  const url = "https://wa.me/" + formatWA(number);
  window.open(url, "_blank");
}

function copyNumber(number) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(number).then(showToast);
  } else {
    const input = document.createElement("textarea");
    input.value = number;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
    showToast();
  }
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// Tampilkan semua admin
const adminList = document.getElementById("admin-list");

admins.forEach((admin, index) => {
  const card = document.createElement("div");
  card.className = "admin-item";

  const top = document.createElement("div");
  top.className = "admin-top";

  const name = document.createElement("h3");
  name.textContent = admin.name;

  const label = document.createElement("span");
  label.textContent = "ADMIN " + String(index + 1).padStart(2, "0");

  const number = document.createElement("div");
  number.className = "number";
  number.textContent = admin.number;

  const actions = document.createElement("div");
  actions.className = "actions";

  const copy = document.createElement("button");
  copy.textContent = "SALIN NOMOR";
  copy.onclick = () => copyNumber(admin.number);

  const wa = document.createElement("button");
  wa.className = "wa-btn";

  const icon = document.createElement("span");
  icon.className = "wa-icon";

  wa.append(icon, document.createTextNode(" WHATSAPP"));
  wa.onclick = () => chatWA(admin.number);

  top.append(name, label);
  actions.append(copy, wa);
  card.append(top, number, actions);
  adminList.appendChild(card);
});

// Animasi loading
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
    revealAdmins();
  }, 2200);
});

// Animasi nomor admin muncul satu per satu
function revealAdmins() {
  const cards = document.querySelectorAll(".admin-item");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 180);
  });
}
