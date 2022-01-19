import { Component } from "@angular/core";
import { User } from "../shared/user.model";

@Component({
    selector : "app-table",
    templateUrl : "./table.component.html",
    styleUrls : ["./table.component.css"]
})
export class TableComponent{
    users : User[] = []

    
}