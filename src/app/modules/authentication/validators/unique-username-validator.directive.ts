import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../services/data.service';

@Directive({
  selector: '[UniqueUsername]',
  providers : [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: UniqueUsernameValidatorDirective,
    multi: true
  }]
})
export class UniqueUsernameValidatorDirective implements AsyncValidator {

  constructor(private _dataService: DataService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
      return this._dataService.getUserByUsername(control.value).pipe(
      map((users:any) => {
        return users && users?.length > 0 ? { 'uniqueUsername': true } : null;
      })
    );
  }

}
