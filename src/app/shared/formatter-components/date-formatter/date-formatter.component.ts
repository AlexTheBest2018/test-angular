import { Component } from '@angular/core';
import { CellParamsInterface } from '../../interfaces/cell-params.interface';

@Component({
  selector: 'app-date-formater',
  templateUrl: './date-formatter.component.html',
  styleUrls: ['./date-formatter.component.scss']
})
export class DateFormatterComponent {
  public params: CellParamsInterface;
  agInit(params: CellParamsInterface): void {
    this.params = params;
  }
}
