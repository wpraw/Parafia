import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SubmitPost } from 'src/app/models/submit-post.model';
import { CommonService } from 'src/app/services/common.service';
import { generateUUID } from 'src/app/utils/generate-uuiid';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  postForm = this.fb.group({ title: '', desc: '' });

  constructor(
    private readonly fb: FormBuilder,
    private readonly service: CommonService
  ) {}

  ngOnInit(): void {}

  logout(): void {
    localStorage.clear();
  }

  submitPost(): void {
    const postId = generateUUID();
    const userId = localStorage.getItem('UserId');
    const body: SubmitPost = {
      PostId: postId,
      UserId: userId || '',
      Title: this.postForm.value.title,
      Contents: this.postForm.value.desc,
      isDeleted: 0,
    };

    this.service.submitPost(body).subscribe({
      complete: () => {
        alert('Dodano nowe ogłoszenia parafialne');
        this.postForm.reset();
      },
      error: () => {
        alert('Nie dodano twego ogłoszenia parafialnego Panie, wystąpił błąd');
      },
    });
  }
}
