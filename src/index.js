class MenuGenerator {
  constructor(container, links, buttonText) {
    this.container = container;
    this.links = links;
    this.buttonText = buttonText;
    this.menuButton = this.menuButtonGenerator();
    this.dropdDown = this.dropdDownGenerator();
  }
  menuButtonGenerator() {
    const dropddownButton = document.createElement("div");
    dropddownButton.classList.add("menu-btn");
    const dropddownButtonText = document.createElement("p");
    dropddownButtonText.textContent = this.buttonText;
    dropddownButton.appendChild(dropddownButtonText);
    document.body.appendChild(dropddownButton);
  }
  dropdDownGenerator() {
    const dropdDownList = document.createElement("div");
    dropdDownList.classList.add("hidden-links");
    document.body.appendChild(dropdDownList);

    this.links.forEach((link) => {
      const menuLink = document.createElement("a");
      menuLink.textContent = link.text;
      dropdDownList.appendChild(menuLink);
    });
  }
}
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => handleButtonClick());

function handleButtonClick() {
  console.log(12);
}
const myLInks = [
  {
    href: "#",
    text: "link1",
  },
  {
    href: "#",
    text: "link2",
  },
];
const newButton = new MenuGenerator(
  "container",
  myLInks,
  "text",
  "Dropdown Menu"
);
