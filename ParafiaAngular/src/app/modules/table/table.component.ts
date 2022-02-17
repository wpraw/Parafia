import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() list: unknown[] = [];
  @ContentChild('header') header!: TemplateRef<any>;
  @ContentChild('content') content!: TemplateRef<any>;

  page = 0;
  private readonly size = 10;

  get counter(): number {
    return this.page * this.size;
  }

  get pagination(): number {
    return this.counter + this.size;
  }

  increment(): void {
    this.page++;
  }

  decrement(): void {
    this.page--;
  }
}
