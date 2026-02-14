const links = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/mvdu0_0",
  },
  {
    label: "SnapChat",
    href: "https://t.snapchat.com/FcBAg2YW",
  },
  {
    label: "Mail",
    href: "mailto:mohd12abdu@gamil.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/Mvdu12",
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
