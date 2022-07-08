import request from "../utils/request.js";
const getNodes = (params = { model: 7 }) => request.get("/nodes", { params });
const getTracks = (params = { model: 7 }) => request.get("/tracks", { params });
const getPlatforms = (params = { model: 7 }) =>
  request.get("/platforms", { params }); //null
const getStations = (params = { model: 7 }) =>
  request.get("/stations", { params }); //null
const getClocks = (params = { model: 7 }) => request.get("/clocks", { params });
const getPointends = (params = { model: 7 }) =>
  request.get("/pointends", { params });
const getRoutes = (params = { model: 7 }) => request.get("/routes", { params });
const getTrackcircuits = (params = { model: 7 }) =>
  request.get("/trackcircuits", { params });
const getSignals = (params = { model: 7 }) =>
  request.get("/signals", { params });
const getVehicles = (params = { model: 7 }) =>
  request.get("/vehicles", { params });
const getTimetables = (params = { model: 7 }) =>
  request.get("/timetables", { params });
const getServices = (params = { model: 7 }) =>
  request.get("/services", { params });
const getTrains = (params = { model: 7 }) => request.get("/trains", { params });

export {
  getNodes,
  getTracks,
  getPlatforms,
  getStations,
  getClocks,
  getPointends,
  getRoutes,
  getTrackcircuits,
  getSignals,
  getVehicles,
  getTimetables,
  getServices,
  getTrains,
};
