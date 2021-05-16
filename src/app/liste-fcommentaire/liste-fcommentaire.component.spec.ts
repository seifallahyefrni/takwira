import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFCommentaireComponent } from './liste-fcommentaire.component';

describe('ListeFCommentaireComponent', () => {
  let component: ListeFCommentaireComponent;
  let fixture: ComponentFixture<ListeFCommentaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFCommentaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
