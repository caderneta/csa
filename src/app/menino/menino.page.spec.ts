import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeninoPage } from './menino.page';

describe('MeninoPage', () => {
  let component: MeninoPage;
  let fixture: ComponentFixture<MeninoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeninoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeninoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
