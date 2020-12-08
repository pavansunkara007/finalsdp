import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  
  isMenuSmall:boolean = true;
  sideBarOpen: boolean = false;
  constructor(private auth:AuthService, private _router: Router,private snackbar:MatSnackBar,private el:ElementRef) { }
  
  registerUserData={
    username:new FormControl(''),
    dob:new FormControl(''),
    gender:new FormControl(''),
    phone:new FormControl(''),
    email:new FormControl(''),
    addr:new FormControl(''),
    city:new FormControl(''),
    pincode:new FormControl(''),
  }

  ngOnInit(): void {
    this.auth.getUserId().subscribe((res)=>{
      this.auth.getProfile(res).subscribe((data:any)=>{      
        this.registerUserData.username.setValue(data.username);
        this.registerUserData.dob.setValue(data.dob);
        this.registerUserData.gender.setValue(data.gender);
        this.registerUserData.phone.setValue(data.phone);
        this.registerUserData.email.setValue(data.email);
        this.registerUserData.addr.setValue(data.addr);
        this.registerUserData.city.setValue(data.city);
        this.registerUserData.pincode.setValue(data.pincode);
      })
    });
  }
  toggleSideBar() {
  }
  Deleteprofile(){
    this.auth.getUserId().subscribe((res)=> {
      this.auth.deleteaccount(res).subscribe(()=>{
        this.auth.logoutUser()
        this._router.navigate(['/welcome'])
        this.snackbar.open('Your WhiN Account is Deleted', 'Okay!', {
          duration: 4000,
        });
      })
    })
  }


// Your initial click listener on the host element
@HostListener('click', ['$event'])onClick(event) {
  event.stopPropagation();
if (event.target.id == "collapseBtn") {
  document.getElementsByClassName('sidebar')[0].classList.add('showsidebar');
  document.body.classList.add('push');
  this.sideBarOpen = true;
} else {
if (this.sideBarOpen) {
   document.getElementsByClassName('sidebar')[0].classList.remove('showsidebar');
   document.body.classList.remove('push');
   this.sideBarOpen = false;
}
}
}

// Click listener on the window object to handle clicks anywhere on 
// the screen.
@HostListener('window:click', ['$event']) onOutsideClick(event){
if(this.sideBarOpen && !this.el.nativeElement.contains(event.target)){
  this.sideBarOpen=false;
  document.getElementsByClassName('sidebar')[0].classList.remove('showsidebar');
  document.body.classList.remove('push');
}

}
}