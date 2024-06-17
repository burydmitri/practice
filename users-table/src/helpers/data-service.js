import { http } from "./http-common";

class DataService {
  getAll(params) {
    return http.get("/data", { params });
  }
}

const UsersDataService = new DataService

export { UsersDataService }