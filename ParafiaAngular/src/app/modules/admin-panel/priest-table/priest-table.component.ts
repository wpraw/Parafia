import { Component, OnInit } from '@angular/core';
import { Priest } from 'src/app/models/priest.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-priest-table',
  templateUrl: './priest-table.component.html',
  styleUrls: ['./priest-table.component.scss'],
})
export class PriestTableComponent implements OnInit {
  priests: Priest[] = [];

  constructor(private readonly service: CommonService) {}

  ngOnInit(): void {
    this.getPriests();
  }

  getPriests(): void {
    this.service.getPriests().subscribe((priests) => (this.priests = priests));
  }

  deletePriest(priestId: string): void {
    if (window.confirm('Czy napewno chcesz usunąć tego księdza?')) {
      this.service.deletePriest(priestId).subscribe({
        complete: () => {
          alert('Usunięto');
          this.getPriests();
        },
      });
    } else {
      alert('Anulowano usuwanie');
    }
  }
}
