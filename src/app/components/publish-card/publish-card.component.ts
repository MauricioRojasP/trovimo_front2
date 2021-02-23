import { environment } from './../../../environments/environment.prod';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { isThisTypeNode } from 'typescript';

@Component({
  selector: 'app-publish-card',
  templateUrl: './publish-card.component.html',
  styleUrls: ['./publish-card.component.scss'],
})
export class PublishCardComponent implements OnInit {
  @Input() type;
  @Input() data;
  @Output() valueChange = new EventEmitter();


  baseUrl: string = environment.api;
  url:any;
  constructor() {
    this.url= "profile/";
  }

  ngOnInit(): void {
    console.log(this.data);

    if(this.type==5){
      if (this.data) {
        this.data.photos = JSON.parse(this.data.cover_picture);
        console.log(this.data);
      }
      
    }else{
      if (this.data) {
        this.data.photos = JSON.parse(this.data.photos);
        console.log(this.data);
      }
    }

  }

  getItem(e){
    this.valueChange.emit(e)
  }



}
