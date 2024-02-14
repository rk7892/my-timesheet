import { Routes } from "@angular/router";
import { Post1ListComponent } from "./post1-list/post1-list.component";
import { User1Component } from "./user1/user1.component";

const routes: Routes = [
    {
        path: '',
        component: Post1ListComponent,
    },
    {
        path: ':id',
        component: User1Component,
    },


];
export default routes;