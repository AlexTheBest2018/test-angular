import { Component } from '@angular/core';
import { IToolPanel, IToolPanelParams } from 'ag-grid-community';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements IToolPanel {

  public params: IToolPanelParams;
  public numTotal: number;
  public numSelected: BehaviorSubject<number>;

  public agInit(params: any): void {
    this.params = params;

    this.numSelected = params.selectedCount;

    this.params.api.addEventListener(
      'modelUpdated',
      this.updateTotals.bind(this)
    );
  }

  updateTotals(): void {
    this.numTotal = this.params.api.getDisplayedRowCount();
  }

  toggleSelectionMode(event) {
    this.params.columnApi.setColumnVisible('checkbox', event.target.checked);
    if(!event.target.checked) this.params.api.deselectAll();
    this.params.api.redrawRows();
  }

  refresh = (): void => {
  };

}
