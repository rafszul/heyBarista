import { Component, OnInit } from '@angular/core';

import { Member } from './../shared';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  member: Member = {
    id: 2,
    img: 'string',
    imgsmall: 'string',
    name: 'number',
    nick: 'number',
    firstname: 'string',
    lastname: 'string',
    email: 'number',
    phone: 'string',
    website: 'string',
    twitter: 'number',
    instagram: 'string',
    facebook: 'string',
    profession: 'string',
    aboutshort: 'number',
    about: 'string',
};

  constructor() { }

  ngOnInit() {
  }

}
