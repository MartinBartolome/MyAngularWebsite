import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

}
