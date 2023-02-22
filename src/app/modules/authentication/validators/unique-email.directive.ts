import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Directive({
  selector: '[UniqueEmail]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: UniqueEmailDirective,
    multi: true
  }]
})
export class UniqueEmailDirective implements AsyncValidator{

  constructor(private _dataService: DataService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
      return this._dataService.getEmailByEmail(control.value).pipe(
        map((email:any) => {
          return email && email?.length ? {'invalidEmail': true} : null;
        })
      )
  }
  

}
