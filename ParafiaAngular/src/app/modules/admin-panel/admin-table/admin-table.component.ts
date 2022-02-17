import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss'],
})
export class AdminTableComponent implements OnInit {
  admins: any[] = [];
  constructor(private readonly service: CommonService) {}

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins(): void {
    this.service.getUsers().subscribe((admins) => (this.admins = admins));
  }

  deleteAdmin(userId: string): void {
    if (window.confirm('Czy napewno chcesz usunąć tego użytkownika?')) {
      this.service.deleteUser(userId).subscribe({
        complete: () => {
          alert('Usunięto');
          this.getAdmins();
        },
      });
    } else {
      alert('Anulowano usuwanie');
    }
  }
}
