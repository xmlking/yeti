import { async, TestBed } from '@angular/core/testing';
import { AccountsModule } from './accounts.module';

describe('AccountsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccountsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AccountsModule).toBeDefined();
  });
});
