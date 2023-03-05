import '../component/search-bar.js';
import '../component/tour-list.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const tourListElement = document.querySelector('tour-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchWisata(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    tourListElement.tours = results;
  };

  const fallbackResult = (message) => {
    tourListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
