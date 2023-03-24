import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable({
  providedIn: 'root'
})
export class UserService{
    constructor(private logger: LoggerService){

    }
    users: { name: string; status: string }[] = []; // empty array

    AddNewUser(name: string, status: string){
        this.users.push({name: name, status: status});
        this.logger.LogMessage(name, status);
    }
}


