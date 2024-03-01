import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentile',
  standalone: true,
})
export class PercentilePipe implements PipeTransform {
  transform(value: number | undefined): string {
    return (value ? value : '') + '%';
  }
}
