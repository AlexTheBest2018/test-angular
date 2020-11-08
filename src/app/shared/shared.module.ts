import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ImageFormatterComponent } from './formatter-components/image-formatter/image-formatter.component';
import { LinkFormatterComponent } from './formatter-components/link-formatter/link-formatter.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HeaderCheckboxFormatterComponent } from './formatter-components/header-checkbox-formatter/header-checkbox-formatter.component';
import { DateFormatterComponent } from './formatter-components/date-formatter/date-formatter.component';


@NgModule({
  declarations: [
    ImageFormatterComponent,
    LinkFormatterComponent,
    ToolbarComponent,
    HeaderCheckboxFormatterComponent,
    DateFormatterComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([
      ImageFormatterComponent,
      LinkFormatterComponent,
      ToolbarComponent,
      HeaderCheckboxFormatterComponent
    ]),
  ],
  exports: [
    AgGridModule,
  ]
})
export class SharedModule { }
