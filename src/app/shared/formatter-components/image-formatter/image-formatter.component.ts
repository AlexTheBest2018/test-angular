import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { ImageFormaterInterface } from '../../interfaces/image-formater.interface';

@Component({
  selector: 'app-image-formatter',
  templateUrl: './image-formatter.component.html',
  styleUrls: ['./image-formatter.component.scss']
})

export class ImageFormatterComponent {
  public params: ImageFormaterInterface;
  agInit(params: ImageFormaterInterface){
    this.params = params;
  }
}
