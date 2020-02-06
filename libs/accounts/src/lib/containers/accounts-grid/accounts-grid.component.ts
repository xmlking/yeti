import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'yeti-accounts-grid',
  templateUrl: './accounts-grid.component.html',
  styleUrls: ['./accounts-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsGridComponent implements OnInit {
  accounts: string;
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.updateAccounts();
  }

  updateAccounts() {
    this.accountService.getAccounts((accounts: string) => (this.accounts = accounts));
  }
}
