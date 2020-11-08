import { Component } from '@angular/core';
import { LinkFormatterInterface } from '../../interfaces/link-formatter.interface';

@Component({
  selector: 'app-link-formatter',
  templateUrl: './link-formatter.component.html',
  styleUrls: ['./link-formatter.component.scss']
})

export class LinkFormatterComponent {
  public params: LinkFormatterInterface;
  agInit(params: LinkFormatterInterface): void {
    this.params = params;
  }
}

