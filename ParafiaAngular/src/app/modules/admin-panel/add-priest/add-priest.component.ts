import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SubmitPriest } from 'src/app/models/submit-priest.model';
import { CommonService } from 'src/app/services/common.service';
import { generateUUID } from 'src/app/utils/generate-uuiid';

@Component({
  selector: 'app-add-priest',
  templateUrl: './add-priest.component.html',
  styleUrls: ['./add-priest.component.scss'],
})
export class AddPriestComponent {
  priestForm = this.fb.group({ Name: '', Surname: '', Degree: '' });
  constructor(
    private readonly fb: FormBuilder,
    private readonly service: CommonService
  ) {}

  onSubmit(): void {
    const priestId = generateUUID();
    const val = this.priestForm.value;
    const body: SubmitPriest = {
      PriestId: priestId,
      Name: val.Name,
      Surname: val.Surname,
      Degree: val.Degree,
    };

    this.service.submitPriest(body).subscribe({
      complete: () => {
        alert('Dodano nowego księdza');
        this.priestForm.reset();
      },
      error: () => {
        alert('Nie dodano nowego księdza Panie, wystąpił błąd');
      },
    });
  }
}
