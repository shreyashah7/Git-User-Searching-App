/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class Constant {

    public perPage: number;

    constructor() {
        this.perPage = 100;
    }
}

