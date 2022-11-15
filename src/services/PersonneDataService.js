import http from "../http-common";

class PersonneDataService {
  getAll() {
    return http.get("/entree");
  }

  get(id) {
    return http.get(`/entree/${id}`);
  }

  create(data) {
    return http.post("/entree", data);
  }

   delete(id) {
    return http.delete(`/entree/${id}`);
  }

  update(data){
    return http.put("/entree", data);
  }


}

export default new PersonneDataService();
