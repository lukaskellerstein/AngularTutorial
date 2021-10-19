import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { User } from 'src/app/common/entities/user';


@Injectable()
export class IdentityService {

    users: User[] = [];

    constructor(){

        let one = new User();
        one.username = "Lukas";
        one.password = "heslo";

        this.users.push(one);
    }

    public Login(username: string, password: string): Observable<boolean> {
        console.log('Login()');

        let result = this.users.find(x => x.username == username && x.password == password);

        if(result){
            return of(true);
        } else {
            return of(false);
        }

        
    }

}
