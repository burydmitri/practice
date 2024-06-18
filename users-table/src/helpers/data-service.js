import { http } from "./http-common";

class DataService {
  getAll(params) {
    return http.get("/data", { params });
  }

  create(data) {
    return http.post("/data", data);
  }

  update(id, data) {
    return http.put(`/data/${id}`, data);
  }

  delete(id) {
    return http.delete(`/data/${id}`);
  }
}

const UsersDataService = new DataService

export { UsersDataService }