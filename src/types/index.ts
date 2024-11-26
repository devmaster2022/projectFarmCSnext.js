export interface User {
  id: string;
  name: string;
  email: string;
  role: 'farmer' | 'distributor' | 'researcher';
}

export interface SensorData {
  timestamp: string;
  soilMoisture: number;
  temperature: number;
  humidity: number;
}

export interface CropData {
  id: string;
  name: string;
  season: 'rabi' | 'kharif' | 'all';
  production: number;
  state: string;
}