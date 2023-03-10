class DropdownMenu {
  constructor(menuLinks, buttonText) {
    this.menuLinks = menuLinks;
    this.buttonText = buttonText;
    this.menuButton = this.createMenuButton();
    this.dropdownMenu = this.createDropdownMenu();
    this.bindMenuEvents();
  }

  createMenuButton() {
    const menuButton = document.createElement("div");
    menuButton.classList.add("menu-btn");

    const menuButtonText = document.createElement("p");
    menuButtonText.textContent = this.buttonText;

    menuButton.appendChild(menuButtonText);
    return menuButton;
  }

  createDropdownMenu() {
    const dropdownMenu = document.createElement("div");
    dropdownMenu.classList.add("dropdown-menu");
    dropdownMenu.classList.add("hidden");

    const menuLinks = this.menuLinks.map((link) => {
      const menuLink = document.createElement("a");
      menuLink.textContent = link.text;
      menuLink.href = link.href;
      menuLink.classList.add("dropdown-link");
      return menuLink;
    });

    menuLinks.forEach((menuLink) => {
      dropdownMenu.appendChild(menuLink);
    });

    return dropdownMenu;
  }

  bindMenuEvents() {
    this.menuButton.addEventListener("click", () => {
      this.dropdownMenu.classList.toggle("hidden");
    });
  }

  render() {
    const dropdownMenuContainer = document.createElement("div");

    dropdownMenuContainer.appendChild(this.menuButton);
    dropdownMenuContainer.appendChild(this.dropdownMenu);

    document.body.appendChild(dropdownMenuContainer);
  }
}

const myMenuLinks = [
  {
    href: "#",
    text: "Link 1",
  },
  {
    href: "#",
    text: "Link 2",
  },
  {
    href: "#",
    text: "Link 3",
  },
];

const dropdownMenu = new DropdownMenu(myMenuLinks, "My Dropdown");
dropdownMenu.render();
