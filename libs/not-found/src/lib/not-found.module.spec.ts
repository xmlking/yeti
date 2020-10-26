import { TestBed } from '@angular/core/testing';
import { NotFoundModule } from './not-found.module';

describe('NotFoundModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(NotFoundModule).toBeDefined();
  });
});
