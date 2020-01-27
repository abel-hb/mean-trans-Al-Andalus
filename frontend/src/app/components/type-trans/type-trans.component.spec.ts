import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTransComponent } from './type-trans.component';

describe('TypeTransComponent', () => {
  let component: TypeTransComponent;
  let fixture: ComponentFixture<TypeTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
