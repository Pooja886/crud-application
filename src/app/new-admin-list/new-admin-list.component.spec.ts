import { HttpClientModule } from '@angular/common/http';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StudentService } from '../student.service';

import { NewAdminListComponent } from './new-admin-list.component';

let mock = (function() {
  let store:any = {
    StudentData : JSON.stringify({
      role : 'Admin'
    })
  };
  return {
    getItem: function(key: string) {
      return store[key];
    },
    setItem: function(key : string, value : any) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', { 
  value: mock,
});

describe('NewAdminListComponent', () => {
  let component: NewAdminListComponent;
  let fixture: ComponentFixture<NewAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAdminListComponent ],
      imports:[
        HttpClientModule,
        RouterTestingModule,
        BrowserModule
      ],
      providers:[
        StudentService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
