const getCities = () => {
  fetch(
    "https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json",
    {
      method: "GET",
    }
  )
    .then((response) => {
      response.json().then((jsonResponse) => {
        sessionStorage.setItem("cities", JSON.stringify(jsonResponse));
      });
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
};

export default getCities;
