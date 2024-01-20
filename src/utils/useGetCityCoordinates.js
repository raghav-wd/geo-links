import axios from "axios";

export const getCityCoordinates = async (city, state) => {
  const country = "india";
  const key = "Bar9Yj77sW+bEleX9P7HDA==UxCXJRQhPEbtVZBT";
  let data;
  var myHeaders = new Headers();
  myHeaders.append("X-Api-Key", key);

  var requestHeaders = {
    headers: {
      "X-Api-Key": key,
    },
  };
  await axios
    .get(
      `https://api.api-ninjas.com/v1/geocoding?city=${city}&country=${country}`,
      requestHeaders
    )
    .then((res) => {
      const c = res.data.filter(
        (item) => item.state.toLowerCase() == state.toLowerCase()
      );
      data = c && c[0];
    });
  return data;
};
