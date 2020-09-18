window.addEventListener('load', () => {
  if (location.host === "dbdiagram.io") {

    document.querySelector("html").setAttribute("data-theme", "dark");
    console.log("DARK MODE ACTIVATED WITH PIPI <3");

    const colorCircles = ["id3498d", "id31689", "id2c3e5", "id27ae6", "id16a08", "id8e44a", "idf39c1", "idd3540", "idc0392"];
    // const colorsMap = {
    //   id3498d: "",
    //   id31689: "",
    //   id2c3e5: "",
    //   id27ae6: "",
    //   id16a08: "",
    //   id8e44a: "",
    //   idf39c1: "",
    //   idd3540: "",
    //   idc0392: "",
    // }

    //? Add Styles;
    document.body.appendChild((() => {
      let style = document.createElement("style");
      style.innerHTML = `
        ${colorCircles.map(id => `#${id}:hover`).join(",")}{
            cursor: pointer;
            stroke: #FFF;
            stroke-width: 2;
        }
    `;
      return style;
    })());

    [...document.getElementsByClassName("fas palette")].forEach(palette=>{
      palette.addEventListener("click",()=>{
          setTimeout(()=>{
            colorCircles.forEach((id)=>{
              var old_element = document.getElementById(id);
              var new_element = old_element.cloneNode(true);
              old_element.parentNode.replaceChild(new_element, old_element);
      
              new_element.addEventListener("click", ()=>{
                new_element.parentElement.parentElement.children[0].children[0].setAttribute("fill", new_element.getAttribute("fill"))
              })
            })
          },100)
        })
    })

  }
})