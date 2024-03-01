import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speed',
  standalone: true,
})
export class SpeedPipe implements PipeTransform {
  transform(value: number | undefined): string {
    return (value ? value : '') + ' km/h';
  }
}
