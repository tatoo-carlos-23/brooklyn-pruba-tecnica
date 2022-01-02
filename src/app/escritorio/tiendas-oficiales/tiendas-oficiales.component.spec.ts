import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendasOficialesComponent } from './tiendas-oficiales.component';

describe('TiendasOficialesComponent', () => {
  let component: TiendasOficialesComponent;
  let fixture: ComponentFixture<TiendasOficialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendasOficialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendasOficialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
