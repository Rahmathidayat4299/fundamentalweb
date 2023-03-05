class DataSource {
  static searchWisata(keyword) {
    return fetch(
      `https://rahmathidayat4299.github.io/wisata_minang/travel_minang.json`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const filterWisata = responseJson.wisata.filter((wisata) =>
          wisata.name_wisata.toUpperCase().includes(keyword.toUpperCase())
        );
        if (filterWisata.length) {
          return Promise.resolve(filterWisata);
        }
        return Promise.reject(`${keyword} is not found`);
      });
  }
}

export default DataSource;
