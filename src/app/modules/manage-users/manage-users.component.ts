import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { user } from './interface/user.model';
import { ManageUserFirebaseService } from './services/manage-user-firebase.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  fetching:boolean = false;
  @ViewChild('userForm') userForm:any;
  editMode:boolean = false;
  editUserId:any;
  arrayOfData:user[] = [
    {
      name: 'naman',
      technology: 'Angular'
    },
    {
      name: 'patel',
      technology: 'React'
    },
  ]

  constructor(private _userService: ManageUserFirebaseService, private _headerService:HeaderService) {
    // this._userService.getData().subscribe((res:any) => console.log(res));
  }

  ngOnInit(): void {
    this._headerService.loader.next(true);
  this._userService.getData().subscribe((res:any) => {
    this.arrayOfData = res;
  })
  }

  addUser(formData:user){
    if(this.editMode){
      this._userService.updateData(this.editUserId,formData).subscribe((res:any) => {
        this.fetchUsers();
        console.log("first",res)
      });
      this.editMode = false;

    }else{
      console.log(formData)
      this.arrayOfData.push(formData);
      this._userService.setData(formData).subscribe((res:any) => {
        console.log("result",res);
      })
    }

  }

  fetchUsers(){
    this._userService.getData().subscribe((res:any) => {
      this.arrayOfData = res;
      console.log(res)
    })
  }

  deleteUser(userId:any){
    this._userService.deleteUser(userId).subscribe((res:any) => {
      this.fetchUsers();
      console.log(res);
    },
    (err:any) => {
      console.log(err);
    })

  }

  editUser(userId:any,i:number){
    this.editUserId = userId;
    this.editMode = true;
    this.userForm.setValue({
    name: this.arrayOfData[i].name,
    technology: this.arrayOfData[i].technology
   })
  }
}
