import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirInvitadoComponent } from './anadir-invitado.component';

describe('AnadirInvitadoComponent', () => {
  let component: AnadirInvitadoComponent;
  let fixture: ComponentFixture<AnadirInvitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnadirInvitadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnadirInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
