/*
* This component manages all the core logic
* necessary for the user-search considering the interaction
* with the services and processing the data.
* @Author : Argusoft
*/

import {Component} from '@angular/core';
import {UserService} from './users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent {

    user: any;
    followers: any;
    username: string;
    isRequesting = false;
    isSearch = false;

    constructor(private _userService: UserService) {}

    // demo-comment | Searches the user and their followers and displays on the screen
    searchUser() {
        if (this.username !== undefined) {
            this.isRequesting = true;
            this._userService.updateUsername(this.username);
            this.user = this.getUserDetails();
            this.followers = this.getFollowers();
        }
    }

    // demo-comment | Gets the Searched user from GitHub Api
    getUserDetails() {
        this._userService.getUser().subscribe(
            (user) => {
                this.user = user;
                this.isSearch = true;
                this.getFollowers();
            }, (error) => {
                console.error(error);
                this.isRequesting = false;
                this.isSearch = true;
            }
        );
    }

    // demo-comment | Gets the followers of the searched user.
    getFollowers() {
        this._userService.getFollowers().subscribe(followers => {
            this.followers = followers;
            this.isRequesting = false;
            this.isSearch = true;
        });
    }

}
