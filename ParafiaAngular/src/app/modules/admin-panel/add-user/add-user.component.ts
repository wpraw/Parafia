import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SubmitUser } from 'src/app/models/submit-user.model';
import { CommonService } from 'src/app/services/common.service';
import { generateUUID } from 'src/app/utils/generate-uuiid';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  userForm = this.fb.group({
    Username: '',
    Password: '',
    Name: '',
    Surname: '',
    Phone: '',
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly service: CommonService
  ) {}

  onSubmit(): void {
    const userId = generateUUID();
    const val = this.userForm.value;
    const body: SubmitUser = {
      UserId: userId,
      Username: val.Username,
      Password: val.Password,
      Name: val.Name,
      Surname: val.Surname,
      NumberPhone: val.Phone,
      isDeleted: 0,
    };

    this.service.submitUser(body).subscribe({
      complete: () => {
        alert('Dodano nowego administratora');
        this.userForm.reset();
      },
      error: () => {
        alert('Nie dodano nowego Administratora Panie, wystąpił błąd');
      },
    });
  }
}
