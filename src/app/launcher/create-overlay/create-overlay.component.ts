import {
  Component,
  Host,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'f8launcher-createoverlay',
  templateUrl: './create-overlay.component.html',
  styleUrls: ['./create-overlay.component.less']
})

export class CreateApplicationComponent implements OnInit {}
