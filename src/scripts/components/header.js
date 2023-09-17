const setHeader = () => {
  const header = document.createElement("header");
  header.id = "header";

  const img = document.createElement("img");
  img.src = "./src/assets/js.png";
  img.alt = "JS";

  const hDiv = document.createElement("div");
  hDiv.id = "hDiv";

  const heading = document.createElement("h1");
  heading.id = "heading";
  const headingTitle = "Vanilla Javascript";
  heading.append(headingTitle);

  const para = document.createElement("p");
  para.id = "para";
  const paragraph = "i.e., JavaScript without any (UI) framework or library";
  para.append(paragraph);

  hDiv.appendChild(heading);
  hDiv.appendChild(para);

  header.appendChild(img);
  header.appendChild(hDiv);

  return header;
};

const header = setHeader();

root.appendChild(header);
