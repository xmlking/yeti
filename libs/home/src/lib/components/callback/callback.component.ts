import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Login } from '@yeti/core';

@Component({
  selector: 'yeti-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallbackComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new Login());
  }
}
