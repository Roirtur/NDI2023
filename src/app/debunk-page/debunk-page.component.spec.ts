import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebunkPageComponent } from './debunk-page.component';

describe('DebunkPageComponent', () => {
  let component: DebunkPageComponent;
  let fixture: ComponentFixture<DebunkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebunkPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebunkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
