import axios from "axios";
import { useEffect, useState } from "react";

const useGetCityCoordinates = (city, state) => {
  const country = "india";
  const key = "Bar9Yj77sW+bEleX9P7HDA==UxCXJRQhPEbtVZBT";
  const [data, setData] = useState();
  var myHeaders = new Headers();
  myHeaders.append("X-Api-Key", key);

  useEffect(() => {
    var requestHeaders = {
      headers: {
        "X-Api-Key": key,
      },
    };
    axios
      .get(
        `https://api.api-ninjas.com/v1/geocoding?city=${city}&country=${country}`,
        requestHeaders
      )
      .then((res) => {
        const c = res.data.filter(
          (item) => item.state.toLowerCase() == state.toLowerCase()
        );
        setData(c);
      });
  }, []);
  return data;
};

// let i = 1
// const cities = []
// while($("tr")[i]){
//     const city = $(`tr:nth-child(${i}) td`).eq(1).text()
//     const lat = $(`tr:nth-child(${i}) td`).eq(3).text()
//     const lon = $(`tr:nth-child(${i}) td`).eq(4).text()
//     cities.push({city, lat, lon})
//     i++;
// }

export default useGetCityCoordinates;
