import { Component } from '@angular/core';
import { ImageWithTextComponent } from "../image-with-text/image-with-text.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ImageWithTextComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
