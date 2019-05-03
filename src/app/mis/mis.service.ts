import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiCallService {
  uri = "http://localhost:3014/api/";

  constructor(private http: HttpClient) {}

  getTaskData: any = obj => {
    let userData = obj.data;
    let url = `${this.uri}${obj.urlString}`;
    return this.http.post(url, userData);
  };

  getBusinesses() {
    return this.http.get(`${this.uri}`);
  }

  editBusiness(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateBusiness(person_name, business_name, business_gst_number, id) {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number,
    };
    this.http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log("Done"));
  }

  deleteBusiness(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
