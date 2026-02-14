const links = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/madu0__0?igsh=ZnNnMW45YXVhaHA3&utm_source=qr",
  },
  {
    label: "GitHub",
    href: "https://github.com/Mvdu12",
  },
  {
    label: "SnapChat",
    href: "https://t.snapchat.com/FcBAg2YW",
  },
  {
    label: "Mail",
    href: "mailto:mohd12abdu@gamil.com",
  },
];

const linksRoot = document.getElementById("social-links");

links.forEach(({ label, href }) => {
  const a = document.createElement("a");
  a.className = "link";
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = label;
  linksRoot.appendChild(a);
});
