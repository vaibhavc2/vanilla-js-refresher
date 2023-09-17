const setTabs = () => {
  const tabs = document.createElement("div");
  tabs.id = "tabs";

  const menu = document.createElement("menu");
  menu.id = "menu";

  const button1 = setButton("btn-why-react", "Why React?");
  const button2 = setButton("btn-core-features", "Core Features");
  const button3 = setButton("btn-resources", "Related Resources");

  button1.classList.add("active");

  menu.appendChild(button1);
  menu.appendChild(button2);
  menu.appendChild(button3);

  const tabContent = setTabContent();

  tabs.appendChild(menu);
  tabs.appendChild(tabContent);

  return tabs;
};

const setButton = (_id, text, type = "button") => {
  const button = document.createElement("button");

  button.id = _id;
  button.append(text);
  button.type = type;
  button.classList.add("tab-btn");

  return button;
};

const setTabContent = () => {
  const tabContent = document.createElement("div");
  tabContent.id = "tab-content";

  return tabContent;
};

const tabs = setTabs();

root.appendChild(tabs);
