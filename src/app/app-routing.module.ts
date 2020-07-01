import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FeedComponent } from "./feed/feed.component";
import { NewPostComponent } from "./new-post/new-post.component";

const routes: Routes = [
  // default route
  { path: "", component: FeedComponent },
  // new post
  { path: "new-post", component: NewPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
