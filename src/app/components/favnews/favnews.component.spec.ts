import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavnewsComponent } from './favnews.component';

describe('FavnewsComponent', () => {
  let component: FavnewsComponent;
  let fixture: ComponentFixture<FavnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
