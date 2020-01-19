import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'yeti-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
