import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User> = [
    {
    id:1,
    nome:'brenda',
    email: 'brenda.mjv@gmail.com',
    senha:'123456'
  },
  {
    id:2,
    nome:'alan',
    email: 'alan.mjv@gmail.com',
    senha:'1234567'
  },
  {
    id:3,
    nome:'Nathan',
    email: 'nathan.mjv@gmail.com',
    senha:'12345678'
  },
  {
    id:4,
    nome:'visitante',
    email: 'visitante.mjv@gmail.com',
    senha:'123456789'
  }

]

  constructor() { }
}
