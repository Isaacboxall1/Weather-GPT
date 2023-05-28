export interface Weather {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: Current;
    minutely: Minutely[];
    hourly: Hourly[];
    daily: Daily[];
    alerts: Alert[];
    locationName?: string
  }
  export interface Current {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: WeatherDetail[];
  }
  interface Minutely {
    dt: number;
    precipitation: number;
  }
  export interface Hourly {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: WeatherDetail[];
    pop: number;
  }
  
  export interface Daily {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    temp: Temp;
    feels_like: FeelsLike;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: WeatherDetail[];
    clouds: number;
    pop: number;
    rain: number;
    uvi: number;
  }
  interface Temp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  }
  interface FeelsLike {
    day: number;
    night: number;
    eve: number;
    morn: number;
  }
  interface WeatherDetail {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  interface Alert {
    sender_name: string;
    event: string;
    start: number;
    end: number;
    description: string;
    tags: string[];
  }