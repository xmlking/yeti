import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'yeti-accounts-grid',
  templateUrl: './accounts-grid.component.html',
  styleUrls: ['./accounts-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountsGridComponent implements OnInit {
  accounts: string;
  token: string;
  constructor(private accountService: AccountService, private authService: NbAuthService) {}

  ngOnInit(): void {
    this.updateAccounts();
    this.testSecure();
  }

  updateAccounts() {
    this.accountService.getAccounts((accounts: string) => (this.accounts = accounts));
  }

  testSecure() {
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.token = token.getValue();
        console.log(token.getPayload());
        console.log(token.getName());
        console.log(this.token);
      }
    });
  }
}
