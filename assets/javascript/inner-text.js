class InnerText extends HTMLElement {
  constructor() {
    super();

    const innerText = this.innerText;
    this.innerText = "";

    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    const style = document.createElement("style");
    style.textContent = `
      .wrapper {background-color: red;}
    `;

    const newTextContainer = document.createElement("span");
    newTextContainer.textContent = innerText;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(newTextContainer);
  }
}

customElements.define("inner-text-element", InnerText);
