"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Ro-Bot", location: ".header" },
      { text: "Die Geschichte von Das Ro-Bot", location: ".footer" },
      { text: "In einer weit entfernten Zukunft lebte ein einsamer Roboter namens R1-X. Tag für Tag durchstreifte er die verlassene Stadt, auf der Suche nach Hinweisen auf die längst vergangene Menschheit. Eines Tages stieß er auf eine geheimnisvolle Nachricht, die sein Schicksal für immer verändern sollte. Mit Entschlossenheit und Neugierde machte er sich auf die Reise, um das Geheimnis zu entschlüsseln und die Zukunft seiner robotischen Art zu bestimmen.", location: "p" },
    ],
  },
  da: {
    texts: [
      { text: "Robotten", location: ".header" },
      { text: "Historien om Robotten", location: ".footer" },
      { text: "I en fjern fremtid levede en ensom robot ved navn R1-X. Dag efter dag strejfede han gennem den forladte by, på jagt efter spor fra den længe forsvundne menneskeheden. En dag stødte han på en mystisk besked, der skulle ændre hans skæbne for evigt. Med beslutsomhed og nysgerrighed begav han sig ud på rejsen for at afsløre hemmeligheden og bestemme sin robotiske arts fremtid.", location: "p" },
    ],
  },
  en: {
    texts: [
      { text: "The Robot", location: ".header" },
      { text: "Hitsory of The Robot", location: ".footer" },
      { text: "In a distant future, there lived a lonely robot named R1-X. Day after day, he roamed through the abandoned city, searching for clues from the long-gone humanity. One day, he stumbled upon a mysterious message that would change his destiny forever. With determination and curiosity, he embarked on a journey to unravel the secret and determine the future of his robotic kind.", location: "p" },
    ],
  },
};
let locale = "";

const selectElement = document.querySelector("#language")

selectElement.addEventListener("change", ()=>{
  locale = selectElement.value;
  texts[locale].texts.forEach((each)=>{
    // console.log(each)
    document.querySelector(each.location).textContent = each.text;
  });
  console.log(`This is the selected Language: ${locale}`)
})



