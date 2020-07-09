import { HttpClient } from "@angular/common/http";
import { ConstantsService } from "./constants.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PostService {
  getFeed() {
    return this.http.get(ConstantsService.BASE_URL + "/getFeed");
  }
  getPostById(postId) {
    return this.http.get(ConstantsService.BASE_URL + "/getPost/" + postId);
  }

  constructor(private http: HttpClient) {}
}
