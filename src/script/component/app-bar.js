class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    
      :host {
        display: block;
        width: 100%;
        background-color: #F9FAFB;
        color: #2D3748;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      }
    
      h2 {
        font-size: 1.5rem;
        font-weight: 600;
        padding: 1rem;
        text-align: center;
      }
    </style>
    
    <h2>Wisata Minang</h2>
      `;
  }
}

customElements.define('app-bar', AppBar);
