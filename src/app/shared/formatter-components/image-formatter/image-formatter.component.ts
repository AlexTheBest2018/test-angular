import { Component } from '@angular/core';
import { CellParamsInterface } from '../../interfaces/cell-params.interface';

@Component({
  selector: 'app-image-formatter',
  templateUrl: './image-formatter.component.html',
  styleUrls: ['./image-formatter.component.scss']
})

export class ImageFormatterComponent {
  public params: CellParamsInterface;
  agInit(params: CellParamsInterface): void{
    this.params = params;
  }
}
