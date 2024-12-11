import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInComponent } from './person-in.component';

describe('PersonInComponent', () => {
  let component: PersonInComponent;
  let fixture: ComponentFixture<PersonInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
