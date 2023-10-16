const preTags = document.querySelectorAll("pre");
const buttonTemplate = `<br><button class="modify-button">🔁 Bedre navn</button><br><br>`;

if (preTags) {
  preTags.forEach((tag) => {
    const button = document.createElement("div");
    button.innerHTML = buttonTemplate;
    const modifyButton = button.querySelector(".modify-button");
    modifyButton.addEventListener("click", () => {
      // Replace this function with the desired action when the button is clicked
      // You can access the corresponding <pre> tag as 'tag' here.
      console.log("Button clicked for <pre> tag: " + tag.forEach((Line) => {
        + String(Line)
      }));
    });
    tag.parentNode.insertBefore(button, tag.nextSibling);
  });
}