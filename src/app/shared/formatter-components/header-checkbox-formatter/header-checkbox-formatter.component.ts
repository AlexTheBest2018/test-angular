import { Component } from '@angular/core';
import { HeaderCheckboxFormatterInterface } from '../../interfaces/header-checkbox-formatter.interface';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header-checkbox-formatter',
  templateUrl: './header-checkbox-formatter.component.html',
  styleUrls: ['./header-checkbox-formatter.component.scss']
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
    if (this.numTotal > 0) {
      this.numSelected.subscribe(count => {
        this.checked = count === this.numTotal;
      });
    }
  }

  checkedHandler = event => {
    const checked = event.target.checked;
    checked ? this.params.api.selectAll() : this.params.api.deselectAll();
  }

  refresh = (): any => {
  }
}
