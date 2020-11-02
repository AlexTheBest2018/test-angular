import { IHeaderParams } from 'ag-grid-community';
import { BehaviorSubject } from 'rxjs';

export interface HeaderCheckboxFormatterInterface extends IHeaderParams {
  selectedCount: BehaviorSubject<number>;
}
