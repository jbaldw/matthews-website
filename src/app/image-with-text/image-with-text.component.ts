import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-with-text',
  standalone: true,
  imports: [],
  templateUrl: './image-with-text.component.html',
  styleUrl: './image-with-text.component.scss'
})
export class ImageWithTextComponent {
  @Input() image: string = '';
  @Input() text: string = '';
}
