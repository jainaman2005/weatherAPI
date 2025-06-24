const axios = require('axios');
require('dotenv').config();

const BASE_URL = process.env.BASE_URL || "https://api.openweathermap.org/data/2.5";
const API_KEY = process.env.API_KEY;

const weather = async (req, res) => {
    const { lat, lon } = req.query;
    try {
        const response = await axios.get(`${BASE_URL}/weather`, {
            params: {
                lat,
                lon,
                appid: API_KEY,
                units: 'metric'
            }
        });
        res.status(200).json(response.data);
    } catch (err) {
        console.error("Weather error:", err.message);
        res.status(err.response?.status || 500).json({ error: "Failed to fetch Weather data" });
    }
};
const hourly = async (req, res) => {
    const { lat, lon ,cnt} = req.query;
    try {
        const response = await axios.get(`${BASE_URL}/forecast/hourly`, {
            params: {
                lat,
                lon,
                appid: API_KEY,
                cnt : cnt,
                units: 'metric'
            }
        });
        res.status(200).json(response.data);
    } catch (err) {
        console.error("Weather error:", err.message);
        res.status(err.response?.status || 500).json({ error: "Failed to fetch Weather hourly data" });
    }
};
const daily = async (req, res) => {
    const { lat, lon ,cnt} = req.query;
    try {
        const response = await axios.get(`${BASE_URL}/forecast/daily`, {
            params: {
                lat,
                lon,
                appid: API_KEY,
                cnt : cnt,
                units: 'metric'
            }
        });
        res.status(200).json(response.data);
    } catch (err) {
        console.error("Weather error:", err.message);
        res.status(err.response?.status || 500).json({ error: "Failed to fetch Weather hourly data" });
    }
};

const airQuality = async (req, res) => {
    const { lat, lon } = req.query;
    try {
        const response = await axios.get(`${BASE_URL}/air_pollution`, {
            params: {
                lat,
                lon,
                appid: API_KEY
            }
        });
        res.status(200).json(response.data);
    } catch (err) {
        console.error("Air quality error:", err.message);
        res.status(err.response?.status || 500).json({ error: "Failed to fetch Air Quality data" });
    }
};
const geoCoding = async (req, res)=>{
    const {city ,limit} = req.query;
    try{
        const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${API_KEY}`);
        res.status(200).json(response.data);
    }catch(err){
        console.error("Geo encoding error",err.message);
        res.status(err.response?.status || 500).json({ error: "Failed to fetch Air Quality data" });
    }
}
module.exports = { weather, airQuality,hourly, daily, geoCoding};
