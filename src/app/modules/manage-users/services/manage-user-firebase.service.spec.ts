import { TestBed } from '@angular/core/testing';

import { ManageUserFirebaseService } from './manage-user-firebase.service';

describe('ManageUserFirebaseService', () => {
  let service: ManageUserFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageUserFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
