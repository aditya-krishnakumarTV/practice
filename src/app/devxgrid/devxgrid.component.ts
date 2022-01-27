import { UserService } from './../shared/user.service';
import { Component, OnInit } from "@angular/core";
import { User } from "../shared/user.model";

@Component({
    selector : "app-devxgrid",
    templateUrl : "./devxgrid.component.html",
    styleUrls : ["./devxgrid.component.css"],
})
export class DevxGridComponent implements OnInit{
    users : User[] = []

    constructor(private userService : UserService){}

    ngOnInit() {
        this.users = this.userService.getUser()
    }
}