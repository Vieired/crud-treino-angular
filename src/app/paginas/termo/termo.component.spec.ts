import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermoComponent } from './termo.component';

describe('TermoComponent', () => {
  let component: TermoComponent;
  let fixture: ComponentFixture<TermoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
