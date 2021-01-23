import {Component, Input, OnInit} from '@angular/core';
import {TypeProperty} from '../../../../../../../models/type-property';

@Component({
  selector: 'app-types-form',
  templateUrl: './types-form.component.html',
  styleUrls: ['./types-form.component.scss']
})
export class TypesFormComponent implements OnInit {
  @Input() type: TypeProperty
  images = [];
  imagesReader = [];
  constructor() { }

  ngOnInit(): void {
  }
  addImage(files): void {
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    this.type.images.push(files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.imagesReader.push(reader.result);
    };
  }
  removeImage(index): void {
    this.imagesReader.splice(index, 1);
    this.type.images.splice(index, 1);
  }
}
