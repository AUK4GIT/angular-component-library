import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degree',
  standalone: true,
})
export class DegreePipe implements PipeTransform {
  transform(value: number | undefined): string {
    return (value ? value : '') + 'ºC';
  }
}
