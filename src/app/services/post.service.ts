import { HttpClient } from "@angular/common/http";
import { ConstantsService } from "./constants.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PostService {
  getFeed(feed) {
    console.log(feed);
    // old method
    // return this.http.get(ConstantsService.BASE_URL + "/getFeed");
    return this.http.post(ConstantsService.BASE_URL + "/filter", {
      tag: this.constService.DEFAULT_TAG === feed.tag ? undefined : feed.tag,
      category:
        this.constService.DEFAULT_CATEGORY === feed.category
          ? undefined
          : feed.category,
    });
  }
  getPostById(postId) {
    return this.http.get(ConstantsService.BASE_URL + "/getPost/" + postId);
  }
  postComment(postId, comment) {
    return this.http.post(ConstantsService.BASE_URL + "/submitComment", {
      postId: postId,
      comment: comment,
    });
  }

  likeThisPost(postId) {
    return this.http.post(
      ConstantsService.BASE_URL + "/updateLikes/" + postId,
      {}
    );
  }

  filterThroughPosts(tag) {
    return this.http.post(ConstantsService.BASE_URL + "/filter", {
      tag: tag,
    });
  }

  constructor(
    private http: HttpClient,
    private constService: ConstantsService
  ) {}
}
