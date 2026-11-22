
const admins = [
    {
        name: "HAJI AKBAR DEVELOPER",
        phone: "083182386351"
    },
    {
        name: "DHANZZ BAWAHAN",
        phone: "085668977853"
    },
    {
        name: "ASEP JEBE",
        phone: "085770287407"
    },
    {
        name: "GARR STR",
        phone: "0882021772928"
    },
    {
        name: "JB EL",
        phone: "083857110399"
    },
    {
        name: "JB MASPE",
        phone: "085924669786"
    },
    {
        name: "REXX SHIKI",
        phone: "082372376190"
    },
    {
        name: "RIZKY SHOPEE",
        phone: "085712297033"
    },
    {
        name: "ALTOP",
        phone: "085738872257"
    },
    {
        name: "TEBEW MARKET",
        phone: "085712782628"
    },
    {
        name: "ADMIN 10",
        phone: "088272120427"
    },
    {
        name: "PIRA STORE",
        phone: "083159083375"
    },
    {
        name: "YASFELL STR",
        phone: "085645409224"
    }
];

const adminList = document.getElementById("adminList");

const whatsappLogo = `
<svg viewBox="0 0 32 32" fill="none"
xmlns="http://www.w3.org/2000/svg">
<path fill="#25D366" d="M16 2.5A13.5 13.5 0 0 0 4.4 22.9L2.5 29.5l6.8-1.8A13.5 13.5 0 1 0 16 2.5Z"/>
<path fill="white" d="M22.1 18.8c-.3-.2-2.1-1-2.4-1.1-.3-.1-.6-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.7-1.7-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.7.2-.2.3-.4.5-.6.1-.2.2-.4.3-.6.1-.2 0-.5 0-.6-.1-.2-.8-2-.9-2.7-.2-.7-.5-.6-.7-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.8 5.1.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.6-.5Z"/>
</svg>`;

function toWhatsApp(phone) {
    return "62" + phone.replace(/^0/, "");
}

function renderAdmins() {
    admins.forEach((admin, index) => {
        const card = document.createElement("article");
        card.className = "admin-card";
        card.style.animationDelay = `${index * 0.08}s`;

        const waLink = `https://wa.me/${toWhatsApp(admin.phone)}`;

        card.innerHTML = `
            <div class="admin-top">
                <div class="admin-number">${index + 1}</div>
                <div class="admin-info">
                    <h3>${admin.name}</h3>
                    <p>ADMIN RESMI HAJI AKBAR</p>
                </div>
            </div>

            <div class="phone">${admin.phone}</div>

            <div class="admin-actions">
                <a class="wa-btn"
                   href="${waLink}"
                   target="_blank"
                   rel="noopener noreferrer">
                    ${whatsappLogo} CHAT WA
                </a>

                <button class="copy-btn"
                    onclick="copyNumber('${admin.phone}')">
                    SALIN
                </button>
            </div>
        `;

        adminList.appendChild(card);
    });
}

function copyNumber(phone) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(phone)
            .then(() => alert("Nomor berhasil disalin!"))
            .catch(() => fallbackCopy(phone));
    } else {
        fallbackCopy(phone);
    }
}

function fallbackCopy(phone) {
    const input = document.createElement("textarea");
    input.value = phone;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
    alert("Nomor berhasil disalin!");
}

renderAdmins();

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hide");
    }, 1600);
});
