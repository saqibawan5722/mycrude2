import { Injectable } from "@angular/core";
import { User } from "./user";

@Injectable({
    providedIn:'root'
})
export class addUser{

    adds=[];


    getaddUsers()
    {
        return this.adds;
    }

    addUsers(userData:User)
    {
        this.adds.push(userData);
    }
}