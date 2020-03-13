import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeninaPage } from './menina.page';

describe('MeninaPage', () => {
  let component: MeninaPage;
  let fixture: ComponentFixture<MeninaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeninaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeninaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
