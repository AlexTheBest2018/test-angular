import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-image-formatter-cell',
  template: `<a [attr.href] = params.data.url>{{ params.value }}</a>`
})

export class LinkFormatterComponent {
  public params: ICellRendererParams;
  agInit(params: ICellRendererParams){
    this.params = params;
  }
}
