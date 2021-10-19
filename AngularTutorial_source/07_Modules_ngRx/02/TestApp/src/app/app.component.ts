import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonState } from 'src/app/common/state/stores/common.state';
import { Router } from '@angular/router';
import { ApplicationState } from 'src/app/state/application.state';
import { User } from 'src/app/common/entities/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  // actualUser$ = this.commonStore.select(state => state.identityState.actual_user);

  //actualUser$ = this.store.select('common');

  actualUser: User;

  constructor(private router: Router, private commonStore: Store<CommonState>, private store: Store<ApplicationState>) {

    // this.actualUser$.subscribe((value) => {
    //   if (value === null) {
    //     this.router.navigate(["/login"]);
    //   } else {
    //     this.router.navigate(["/"]);
    //   }
    // })
  }


  ngOnInit(): void {
    this.store
      .select<any>('common')
      .subscribe((commonState: CommonState) => {
        this.actualUser = commonState.identityState.actual_user;

        if (this.actualUser === null) {
          this.router.navigate(["/login"]);
        } else {
          this.router.navigate(["/"]);
        }
      });
  }

}
