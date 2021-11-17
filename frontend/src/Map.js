import React, { useState } from 'react';

const API_ROOT = 'https://api.mapbox.com';
const TOKEN = "pk.eyJ1Ijoibmd1eWVuaHV1cGh1YzIwMDEiLCJhIjoiY2t3MHI0ZmFwMDEwODJ3cjBzMXlmNGFzciJ9.dZn-2W7vMLWGHFFiogj1ZQ";

export const FROM = 'HCMC University of Technology Dĩ An, Làng Đại Học, Dĩ An, Bình Dương, Thị xã Dĩ An, Binh Duong';
const TO = 'Phường 12 quận 10 TP.HCM';

function VERBOSE_API(msg) {
  console.log(msg);
}

export const calculateShipFee = async (from, to) => {
  let routes = [];
  try {
    const fromLocation = await textToLocation(from);
    console.log(fromLocation);
    const toLocation = await textToLocation(to);
    console.log(toLocation);
    routes = await locationsToRoutes(fromLocation, toLocation);
    console.log(routes);
  } catch(error) {
    console.log(error);
    return NaN;
  }
  
  let minutes = 0;
  if (routes.length > 0) {
    minutes = routes[0].duration / 60;
    console.log(minutes);
  } else { // TODO: use location distance instead
    return NaN;
  }

  const shipFee = minutesToFee(minutes);
  console.log({shipFee: shipFee});
  return shipFee;
}

export default function Map() {
  
  const [shipInfo, setShipInfo] = useState('hello');

  const handleSubmit = async () => {
    const fee = await calculateShipFee(FROM, TO);
    setShipInfo(fee);
    // let info = "";
    // info += (`From ${result.from} to ${result.to}:\n`);
    // info += (`Distance: ${result.distance}, Duration: ${result.duration}`);
  }
  
  
  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
      <p>{JSON.stringify(shipInfo)}</p>
    </div>
  );
}


const textToLocation = async (addressText) => {
  const raw = JSON.stringify(addressText);
  const url = `${API_ROOT}/geocoding/v5/mapbox.places/${raw}.json?access_token=${TOKEN}`;
  try {
    const res = await fetch(url);
    const json = await res.json();
    return {
      placeName: json.features[0].place_name,
      lon: json.features[0].center[0],
      lat: json.features[0].center[1],
    };
  }
  catch (error) {
    console.log("Not found address: " + addressText);
    throw "Location not found";
  }
}

/***
 * prerequisite: 
 *  locati: {lon: String, lat: String}
 *  locati is valid location
 */
const locationsToRoutes = async (locatiA, locatiB) => { 
  const URL = `https://api.mapbox.com/directions/v5/mapbox/driving/${locatiA.lon},${locatiA.lat};${locatiB.lon},${locatiB.lat}?alternatives=false&continue_straight=false&geometries=geojson&overview=simplified&steps=false&access_token=${TOKEN}`;
  const res = await fetch(URL);
  const json = await res.json();
  return json.routes.map(route => {
    return {
      distance: route.distance,
      duration: route.duration,
    };
  })
}

const minutesToFee = (minutes) => {
  let fee = 3000 + minutes * 700;
  if (fee < 5000)
    fee = 0;
  else if (fee > 300000)
    fee = 300000;
  return Math.ceil(fee / 50) * 50;
}
