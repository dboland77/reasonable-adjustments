import http from  "../../http-common"

class DisabilityDataService {
  getAll() {
    return http.get("/disabilities");
  }

  get(id) {
    return http.get(`/disabilities/${id}`);
  }

  create(data) {
    return http.post("/disabilities", data);
  }

  update(id, data) {
    return http.put(`/disabilities/${id}`, data);
  }

  delete(id) {
    return http.delete(`/disabilities/${id}`);
  }

  deleteAll() {
    return http.delete(`/disabilities`);
  }

  findByTitle(title) {
    return http.get(`/disabilities?title=${title}`);
  }
}

export default new DisabilityDataService();
