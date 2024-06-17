import axios from 'axios';

const http = axios.create({
    baseURL: "https://retoolapi.dev/D6xLg4",
    headers: {
      "Content-type": "application/json"
    }
  });

export { http }
