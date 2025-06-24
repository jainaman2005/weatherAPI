# 🌦 Weather & Air Quality Proxy Server

An Express.js server that acts as a **proxy API layer** for OpenWeatherMap.  
It provides simplified, secure access to various weather data services including current weather, forecasts, air quality, and geocoding — while preventing CORS issues and keeping API keys safe.

---
## 🚀 Features

- ✅ **Proxy endpoints** to the OpenWeatherMap API
- 🌐 Current Weather by Latitude & Longitude
- 📆 Hourly & Daily Weather Forecasts
- 🏭 Air Quality Data
- 🗺️ City Name → Geocoding (Lat/Lon)
- 🔒 Hides your OpenWeatherMap API key from frontend clients
- 🛡️ CORS enabled for frontend requests
- 🌱 `.env` configuration supported
- 📦 Ready for deployment (Render, Railway, etc.)

---
## 📁 Project Structure
├── server.js # Entry point
├── routes/
│ └── openWeather.js # Route definitions
├── controller/
│ └── openWeatherController.js # API logic
├── .env # API key (not committed)
├── package.json
└── README.md

---

## ⚙️ API Endpoints

All routes are prefixed with:  

### 📍 `/api/weather?lat={lat}&lon={lon}`
Returns current weather for given coordinates.

### 📍 `/api/hourly?lat={lat}&lon={lon}&cnt={count}`
Returns hourly forecast for given coordinates. `cnt` is the number of forecast entries.

### 📍 `/api/daily?lat={lat}&lon={lon}&cnt={count}`
Returns daily forecast. *(Note: endpoint depends on plan availability.)*

### 📍 `/api/airquality?lat={lat}&lon={lon}`
Returns air pollution and quality index for a given location.

### 📍 `/api/geoencoding?city={city name}&limit={number}`
Returns geolocation (lat/lon) of a city.

---

## 🧪 Local Development

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
### 2.Install Dependencies

```bash
npm install
```
### 3. Add .env File

```env
API_KEY=your_openweather_api_key
BASE_URL=Openweather_base_URL
PORT=5000
```
### 4. Run the Server

```bash
npm start
```


