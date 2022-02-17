import { Pipe, PipeTransform } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Pipe({
  name: 'post',
})
export class PostPipe implements PipeTransform {
  transform(post: Post): string {
    const date = this.dateFun(post.DataDodania);
    return `${post.Name} ${post.Nazwisko} | ${date}`;
  }

  dateFun(date: string): string {
    const months = [
      'stycznia',
      'lutego',
      'marca',
      'kwietnia',
      'maja',
      'czerwca',
      'lipca',
      'sierpnia',
      'września',
      'października',
      'listopada',
      'grudnia',
    ];
    const value = date
      .split(/[-,:,T]/)
      .reverse()
      .join('-')
      .slice(9, 19)
      .replace('-01-', ' ' + months[0] + ' ')
      .replace('-01-', ' ' + months[0] + ' ')
      .replace('-02-', ' ' + months[1] + ' ')
      .replace('-03-', ' ' + months[2] + ' ')
      .replace('-04-', ' ' + months[3] + ' ')
      .replace('-05-', ' ' + months[4] + ' ')
      .replace('-06-', ' ' + months[5] + ' ')
      .replace('-07-', ' ' + months[6] + ' ')
      .replace('-08-', ' ' + months[7] + ' ')
      .replace('-09-', ' ' + months[8] + ' ')
      .replace('-10-', ' ' + months[9] + ' ')
      .replace('-11-', ' ' + months[10] + ' ')
      .replace('-12-', ' ' + months[11] + ' ');
    const time = date.slice(11, -3);
    return `Utworzono dnia ${value} o godzinie ${time}`;
  }
}
