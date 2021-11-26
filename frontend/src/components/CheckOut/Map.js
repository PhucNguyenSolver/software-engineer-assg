import React, { useState } from 'react';

const API_ROOT = 'https://api.mapbox.com';
const TOKEN = "pk.eyJ1Ijoibmd1eWVuaHV1cGh1YzIwMDEiLCJhIjoiY2t3MHI0ZmFwMDEwODJ3cjBzMXlmNGFzciJ9.dZn-2W7vMLWGHFFiogj1ZQ";

export const FROM = 'Tô Hiến Thành, quận 10';
const TO = 'Phường 12 quận 10 TP.HCM';

function Log(msg) {
  // return;
  console.log(JSON.stringify(msg));
}

/**
 * 
 *  Customize these functions
 */
const minutesToFee = (minutes) => {
  let fee = 3000 + minutes * 700;
  if (fee < 5000)
    fee = 0;
  else if (fee > 300000)
    fee = 300000;
  return round(fee);
}

const kilometersToFee = (km) => {
  if (km < 3)
    return 5000;
  else {
    const fee = 5000 + (Math.round(km) - 3) * 4000;
    return Math.min(fee, 35000);
  }
}

function round(number) {
  const unit = 250;
  return Math.ceil(number / unit) * unit;
}

export const calculateShipFee = async (from, to) => {
  let res = {to: null, shipFee: null, distance: null, duration: null};
  let fromLocation, toLocation;
  try {
    fromLocation = await textToLocation(from);
    Log(fromLocation);
    toLocation = await textToLocation(to);
    Log(toLocation);
  } catch(error) { // Cannot find location
    Log(error);
    res.shipFee = NaN;
    return res;
  }
  
  let routes = [];
  try {
    routes = await locationsToRoutes(fromLocation, toLocation);
  } catch(error) { // error when calling the API
    Log(error);
    res.shipFee = NaN;
    return res;
  }

  if (routes.length > 0) {
    const km = routes[0].distance / 1000;
    const minutes = routes[0].duration / 60;
    res.duration = minutes;
    res.distance = km;
    res.shipFee = kilometersToFee(km);
    Log(km);
    return res;
  } else { // no suitable route
    const km = getDistanceFromLatLonInKm(
      fromLocation.lat, fromLocation.lon, toLocation.lat, toLocation.lon
    );
    Log(km);
    res.distance = km;
    res.shipFee = kilometersToFee(km);
    return res;
  }
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

/**
 * 
 *  Util functions
 */
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
    Log("Not found address: " + addressText);
    throw 'Location not found';
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

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2-lat1);  // deg2rad below
  const dLon = deg2rad(lon2-lon1); 
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180);
}