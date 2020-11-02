import { Component } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { BehaviorSubject } from 'rxjs';
import {HeaderCheckboxFormatterInterface} from "../interfaces/header-checkbox-formatter.interface";


@Component({
  selector: 'checkbox-renderer',
  template: `
    <input 
      type='checkbox' 
      (click)='checkedHandler($event)'
      [checked]='checked'
    />
`,
})
export class HeaderCheckboxFormatterComponent implements IHeaderAngularComp {
  public params: any;
  public checked: boolean;
  public numSelected: BehaviorSubject<number>;
  public numTotal: number;

  agInit(params: HeaderCheckboxFormatterInterface): void {
    this.params = params;
    this.checked = false;
    this.numSelected = params.selectedCount;

    this.params.api.addEventListener(
      'modelUpdated',
      this.updateTotals.bind(this)
    );
  }

  updateTotals(): void {
    this.numTotal = this.params.api.getDisplayedRowCount();
    this.numSelected.subscribe(count => {
      this.checked = count === this.params.api.getDisplayedRowCount();
    });
  }

  checkedHandler(event) {
    let checked = event.target.checked;
    checked ? this.params.api.selectAll() : this.params.api.deselectAll();
  }

  refresh = (): any => {
  };
}
