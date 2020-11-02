import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-image-formatter-cell',
  template: `<img border='0' width='100' height='100' [attr.src]='params.value'>`
})

export class ImageFormatterComponent {
  public params: ICellRendererParams;
  agInit(params: ICellRendererParams){
    this.params = params;
  }
}
