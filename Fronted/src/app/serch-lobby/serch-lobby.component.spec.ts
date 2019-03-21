import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchLobbyComponent } from './serch-lobby.component';

describe('SerchLobbyComponent', () => {
  let component: SerchLobbyComponent;
  let fixture: ComponentFixture<SerchLobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerchLobbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
