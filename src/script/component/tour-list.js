import './tour-item.js';
class TourList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set tours(tours) {
    this._tours = tours;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._tours.forEach((tour) => {
      const tourItemElement = document.createElement('tour-item');
      tourItemElement.tour = tour;
      this.shadowDOM.appendChild(tourItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}
customElements.define('tour-list', TourList);
