class SearchBar extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
      this.render();
    }
  
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
  
  
    get value() {
      return this.shadowDOM.querySelector('#searchElement').value;
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
    
        .search-container {
            max-width: 300px;
            border-radius: 0.5rem;
            padding : 6rem;
            display: flex;
            justify-content: center; /* horizontally center content */
            align-items: center; /* vertically center content */
            top: 10px;
            background-color: #FFFFFF;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }
          
          .search-container input {
            flex: 1;
            padding: 1rem;
            border: none;
            border-bottom: 2px solid #6495ED;
            font-weight: 600;
            color: #4A5568;
            font-size: 1rem;
          }
          
          .search-container input::placeholder {
            color: #A0AEC0;
            font-weight: 400;
          }
          
          .search-container button {
            padding: 1rem;
            background-color: #6495ED;
            color: #FFFFFF;
            border: none;
            border-radius: 0.5rem;
            text-transform: uppercase;
            cursor: pointer;
            margin-left: 1rem;
            font-weight: 600;
            font-size: 1rem;
          }
          
          @media screen and (max-width: 550px) {
            .search-container {
              flex-direction: column;
              position: static;
              border-radius: 0;
              box-shadow: none;
            }
            
            .search-container input {
              width: 100%;
              margin-bottom: 0.5rem;
              border-radius: 0.5rem;
              border: 2px solid #6495ED;
            }
            
            .search-container button {
              width: 100%;
              margin-left: auto;
              border-radius: 0.5rem;
            }
          }
        </style>
        
        <div id="search-container" class="search-container">
          <input placeholder="Search where travelling" id="searchElement" type="search">
          <button id="searchButtonElement" type="submit">Search</button>
        </div>
      `;
  
      this.shadowDOM.querySelector('#searchButtonElement')
          .addEventListener('click', this._clickEvent);
    }
  }
  
  customElements.define('search-bar', SearchBar);