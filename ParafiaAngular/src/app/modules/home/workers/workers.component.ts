import { Component, OnInit } from '@angular/core';
import { Priest } from 'src/app/models/priest.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
})
export class WorkersComponent implements OnInit {
  priests: Priest[] = [];
  page = 0;
  private readonly size = 10;

  get counter(): number {
    return this.page * this.size;
  }

  get pagination(): number {
    return this.counter + this.size;
  }

  constructor(private readonly service: CommonService) {}

  ngOnInit(): void {
    this.service.getPriests().subscribe((priest) => (this.priests = priest));
  }

  increment(): void {
    this.page++;
  }

  decrement(): void {
    this.page--;
  }
}
