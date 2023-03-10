class MenuGenerator {
  constructor(links, buttonText) {
    this.links = links;
    this.buttonText = buttonText;
    this.menuButton = this.createMenuButton();
    this.dropdownMenu = this.createDropdownMenu();
    this.addToggleFunctionality();
  }

  createMenuButton() {
    const menuButton = document.createElement("div");
    menuButton.classList.add("menu-btn");

    const menuButtonText = document.createElement("p");
    menuButtonText.textContent = this.buttonText;

    menuButton.appendChild(menuButtonText);
    document.body.appendChild(menuButton);

    return menuButton;
  }

  createDropdownMenu() {
    const dropdownMenu = document.createElement("div");
    dropdownMenu.classList.add("dropdown-menu");
    dropdownMenu.classList.add("hidden");

    this.links.forEach((link) => {
      const menuLink = document.createElement("a");
      menuLink.textContent = link.text;
      menuLink.href = link.href;
      menuLink.classList.add("dropdown-link");
      dropdownMenu.appendChild(menuLink);
    });

    document.body.appendChild(dropdownMenu);
    return dropdownMenu;
  }

  addToggleFunctionality() {
    const toggleDropdown = () => {
      const isDropdownHidden = this.dropdownMenu.classList.contains("hidden");
      if (isDropdownHidden) {
        this.dropdownMenu.classList.remove("hidden");
        this.dropdownMenu.classList.add("slideDown");

        this.menuButton.style.borderRadius = "8px 8px 0 0";
      } else {
        this.dropdownMenu.classList.add("hidden");

        this.menuButton.style.borderRadius = "8px";
      }
    };

    this.menuButton.addEventListener("click", toggleDropdown);
  }
}

const myLinks = [
  {
    href: "#",
    text: "link1",
  },
  {
    href: "#",
    text: "link2",
  },
  {
    href: "#",
    text: "link3",
  },
];

const newButton = new MenuGenerator(myLinks, "My Dropdown");
