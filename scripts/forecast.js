const key = 'M1G0DfGlGsuIc7RPniv7BvpeuoxGysF1';

/**
 * Get weather information from API
 * @const
 * @async
 * @param {number} id
 * @returns {object} weather object
 */

const getWeather = async (id) => {

  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];


};

/** Get city information from API
 * @const 
 * @async 
 * @param {string} city
 * @returns {object} city object
 * 
*/
const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

