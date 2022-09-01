class CFetch {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(endpoint) {
    return fetch(this.baseUrl + "/" + endpoint)
      .then((response) => response.json)
      .catch((error) => {
        console.log(error);
      });
  }
}
