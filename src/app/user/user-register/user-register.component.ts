import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  //FormGroup: Wrapper around the collection of multiple Form Controll
  
  //LocalStorage
  user: User;   //Previously it was user: any = {}; Now we added User as a Model we created and in model we defined its data type


  //Check onSubmit validation through button
  userSubmitted: boolean;

  //Declaring a variable and type of this variable is FormGroup
  registrationForm: FormGroup


  //Method 1: To use method 1 oncomment the constructor below and comment out the method 2 cunstructor
  // constructor() { }

  //Mthod 2 for Validators only
  // Method 2 of creating form validators using fb stands for FormBuilder which make the code little simpler: add the from builder in constructor and write the validators using fb
  constructor(private fb: FormBuilder, 
              private userService: UserServiceService, 
              private alertify: AlertifyService) { }

  ngOnInit(): void {
    //Method 1
    //Instantiating a FormGroup with a new form(registrationForm) which would be able to bind to the registrationForm in html
    //And adding a JavaScript Object
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // },this.passwordMatchingValidator)

    //Mthod 2 for Validators only
    this.createRegistrationForm();
  }

  //Mthod 2 for Validators only
  //Creating validators using FormBuilder
  createRegistrationForm(){
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, {Validators: this.passwordMatchingValidator});
  }

  passwordMatchingValidator(fg: FormGroup): Validators{
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    {notmatched: true};
  }

  //Geter method for all form controls
  // Method 2 to display the error message
  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }

  get email(){
    return this.registrationForm.get('email') as FormControl;
  }

  get password(){
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }

  // onSubmit(){
  //   console.log(this.registrationForm);
  // }

  //LocalStorage
  onSubmit(){
    console.log(this.registrationForm.value);
    //checking validation through button
    this.userSubmitted = true;
    // this.user = Object.assign(this.user, this.registrationForm.value);  //Comment Object.assign to call userData() function
    //calling below function to add user in local storage
    // this.addUser(this.user);
    //calling below function to add user in local storage using addUser Function from user-service
    // this.userService.addUser(this.user);  //Comment this line to call userData() Function below
    if (this.registrationForm.valid){
    this.userService.addUser(this.userData()); 

    this.registrationForm.reset();
    this.userSubmitted = false;
    //Adding alertify third party js to displaying success/error message || npm install alertify --save || Inject the alertify into the constructor
    // alertify.success('Congrats, you are successfully registered');
    this.alertify.success('Congrats, you are successfully registered');
    } else{
      // alertify.error("Kindly provile the required fields");
      this.alertify.error("Kindly provile the required fields");
    }
  }

  //Creating a method for a user domain model and the type of userData is User
  userData(): User{
    //Initializing the data
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }

  //LocalStorage - Add multiple users
  //Moved this function to the user-service file
  // addUser(user){
  //   let users = [];
  //   if(localStorage.getItem('Users')) {
  //     users = JSON.parse(localStorage.getItem('Users'));
  //     // using ... spread operator to add the multiple elements in the same (existing) array
  //     users = [user, ...users];
  //   } else {
  //     users = [user];
  //   }
  //   localStorage.setItem('Users', JSON.stringify(users));
  // }

}
