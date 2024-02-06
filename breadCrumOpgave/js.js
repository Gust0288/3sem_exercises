

const bc = [{ name: "Hvidevarer", link: "/hvidevarer" },{ name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },{ name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },];

const nav = document.querySelector("nav");
const button = document.querySelector("button");

// button.addEventListener("click", (arr) => {
//     arr.forEach((each) => {
//         nav.innerHTML =  `<a href="${each.link}">Hvidevarer</a>`;
//     })
// })

button.addEventListener("click", () => {
    bc.forEach((each) => {
      const linkElement = document.createElement("a"); // Create a new <a> element
      linkElement.href = each.link;// Set the href attribute
      linkElement.textContent = `/ ${each.name}`; // Set the link text
      nav.appendChild(linkElement); // Append the <a> element to the navigation
    });
  });

// nav.innerHTML = "hej";

