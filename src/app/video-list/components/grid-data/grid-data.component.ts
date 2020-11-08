import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  GetContextMenuItemsParams,
  GridOptions,
  MenuItemDef,
  SuppressKeyboardEventParams
} from 'ag-grid-community';
import { GetYouTubeDataService } from '../../services/get-you-tube-data.service';
import { ImageFormatterComponent } from '../../../shared/formatter-components/image-formatter/image-formatter.component';
import { LinkFormatterComponent } from '../../../shared/formatter-components/link-formatter/link-formatter.component';

import { ToolbarComponent } from '../../../shared/toolbar/toolbar.component';
import { HeaderCheckboxFormatterComponent } from '../../../shared/formatter-components/header-checkbox-formatter/header-checkbox-formatter.component';
import { BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import 'ag-grid-enterprise';
import { Item, RawData, RowData } from '../../../shared/interfaces/data.interface';
import { DateFormatterComponent } from '../../../shared/formatter-components/date-formatter/date-formatter.component';

@Component({
  selector: 'app-grid-data',
  templateUrl: './grid-data.component.html',
  styleUrls: ['./grid-data.component.scss']
})
export class GridDataComponent implements OnInit, OnDestroy {

  private selectedCount: BehaviorSubject<number> = new BehaviorSubject(0);
  private subscriptions: Subscription = new Subscription();

  public gridOptions: GridOptions = {
    columnDefs: [
      {
        field: 'checkbox',
        valueGetter: '',
        suppressSizeToFit: true,
        width: 20,
        checkboxSelection: true,
        headerComponentFramework: HeaderCheckboxFormatterComponent,
        headerComponentParams: { selectedCount: this.selectedCount },
        menuTabs: []
      },
      {
        headerName: '',
        field: 'thumbnails',
        autoHeight: true,
        suppressSizeToFit: true,
        minWidth: 100,
        resizable: true,
        cellRendererFramework: ImageFormatterComponent,
        menuTabs: []
      },
      {
        headerName: 'Published on',
        field: 'publishedAt',
        width: 200,
        cellRendererFramework: DateFormatterComponent,
        suppressSizeToFit: true,
        menuTabs: []
      },
      {
        headerName: 'Video Title',
        field: 'title',
        width: 200,
        suppressSizeToFit: true,
        cellRendererFramework: LinkFormatterComponent,
        menuTabs: []
      },
      {
        headerName: 'Description',
        field: 'description',
        autoHeight: true,
        flex: 1,
        menuTabs: []
      }
      ],
    rowData: [],
    sideBar: {
      toolPanels: [
        {
          id: 'toolbar',
          labelDefault: 'Toolbar',
          labelKey: 'toolbar',
          iconKey: 'toolbar',
          toolPanel: 'ToolbarComponent',
          toolPanelParams: {
            selectedCount: this.selectedCount
          },
        },
      ],
      defaultToolPanel: 'customStats',
    },
    frameworkComponents: {
      ToolbarComponent
    },
    rowSelection: 'multiple',
    suppressRowClickSelection: true,
    onSelectionChanged: this.onSelectionChanged.bind(this),
    getContextMenuItems: this.getContextMenuItems.bind(this),
  };

  constructor(private GetYouTubeDataService: GetYouTubeDataService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.GetYouTubeDataService.getYouTubeList()
      .pipe(
        map((e: RawData) => e.items.map((v: Item) => ({
          thumbnails: v.snippet.thumbnails.default.url,
          publishedAt: v.snippet.publishedAt,
          title: v.snippet.channelTitle,
          description: v.snippet.description,
          url: `https://www.youtube.com/watch?v=${v.id.videoId}`,
        }))),
      )
      .subscribe((data: RowData[]) => {
        this.gridOptions.api.setRowData(data);
        this.gridOptions.api.sizeColumnsToFit();
      }));
  }

  onSelectionChanged(event: SuppressKeyboardEventParams): void {
    this.selectedCount.next(event.api.getSelectedRows().length);
  }

  getContextMenuItems(params: GetContextMenuItemsParams): MenuItemDef {
    // @ts-ignore
    return !(params.column.getId() !== 'title') ? [...params.defaultItems, {
      name: 'Open in new tab',
      action: () => {
        window.open(params.node.data.url, '_blank');
      }
    }] : params.defaultItems;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
