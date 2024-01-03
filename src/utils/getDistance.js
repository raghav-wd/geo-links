function getDistanceFromLatLonInKm(coord1, coord2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(coord2.lat - coord1.lat); // deg2rad below
  var dLon = deg2rad(coord2.lon - coord1.lon);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(coord1.lat)) *
      Math.cos(deg2rad(coord2.lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export default getDistanceFromLatLonInKm;
