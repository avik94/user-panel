import { AngularFirestore } from '@angular/fire/firestore';
import { EventEmitter, Injectable } from '@angular/core';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  submitCheck = new EventEmitter();

  constructor(
    private firestore: AngularFirestore
  ) { }

  listOfUser:UserModel[] = [];

  getUser() {
    return this.firestore.collection('users-list').valueChanges();
  }

  addUser(data:UserModel){
    this.listOfUser.push(data);
    let rid = Math.floor(Math.random()*90000) + 10000;
    data.id= rid.toString();
    return this.firestore.collection('users-list').add(data);
  }
}
