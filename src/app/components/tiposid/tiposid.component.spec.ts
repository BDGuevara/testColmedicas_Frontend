import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposidComponent } from './tiposid.component';

describe('TiposidComponent', () => {
  let component: TiposidComponent;
  let fixture: ComponentFixture<TiposidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
