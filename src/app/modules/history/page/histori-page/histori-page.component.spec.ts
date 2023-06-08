import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriPageComponent } from './histori-page.component';

describe('HistoriPageComponent', () => {
  let component: HistoriPageComponent;
  let fixture: ComponentFixture<HistoriPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
