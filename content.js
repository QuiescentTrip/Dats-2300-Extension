let OPEN_AI_KEY =

const str = `
Oppgave: Forbedre lesbarheten og forståelsen av følgende kodeeksempel, 
samtidig som du beholder HTML-strukturen uendret. 
Endringene skal begrense seg til variabelnavn, funksjonsnavn og tillegg av 
kommentarer for å forklare koden bedre. Du skal kun inkludere rå HTML-kode i svaret.
  
HTML-kode:`

const preTags = document.querySelectorAll("pre");
const buttonTemplate = `<br><button class="modify-button">🔁 Bedre navn</button><br>`;
const loading = `<br><img id="loading" style="height: 100px; display: block;"src="https://cdn.dribbble.com/users/46390/screenshots/1191953/loading.gif">`


if (preTags) {
    preTags.forEach((tag) => {
      const button = document.createElement("div");
      button.innerHTML = buttonTemplate;
      const modifyButton = button.querySelector(".modify-button");
      modifyButton.addEventListener("click", async () => {
        const load = document.createElement("div");
        load.innerHTML = loading
        modifyButton.parentNode.after(load)
            await fetch(`https://api.openai.com/v1/chat/completions`,{
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        Authorization: "Bearer "+ OPEN_AI_KEY,
                    },
                    body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{role: "system", content: str + String(tag.outerHTML)}], 
                    temperature: 0,
                    max_tokens: 1000,
                }),
                        }
            ).then((response) => {
                if (response.ok) {
                    response.json().then((json) => {
                        load.style.display = 'none'
                        const content = document.createElement("div");
                        content.style.backgroundColor = "#fffec7"
                        content.style.width = "fit-content"
                        let message = json.choices[0].message.content
                        content.innerHTML = message
                        modifyButton.parentNode.after(content)

                    }).catch((error) => {
                        console.log(error)
                      });;
            }})})
          tag.parentNode.insertBefore(button, tag.nextSibling);
        }
      );
    }