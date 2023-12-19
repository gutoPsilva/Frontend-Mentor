import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-your-info',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './your-info.component.html',
  styleUrl: './your-info.component.css',
})
export class YourInfoComponent {
  submitted = false;
  infoForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
  });

  ngOnInit() {
    const { name, email, phone } = this.loadInfo();
    
    // load the input fields with the provided values from localStorage
    if(name) this.infoForm.controls['name'].setValue(name);
    if(email) this.infoForm.controls['email'].setValue(email);
    if(phone) this.infoForm.controls['phone'].setValue(phone);
  }

  storeInfo() {
    const { name, email, phone } = this.infoForm.value;
    if(name) localStorage.setItem('name', name);
    if(email) localStorage.setItem('email', email);
    if(phone) localStorage.setItem('phone', phone);
  }

  loadInfo() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');
    return { name, email, phone };
  }

  submitForm(): boolean {
    this.submitted = true;
    return this.infoForm.valid;
  }

  get name() {
    return this.infoForm.get('name');
  }

  get email() {
    return this.infoForm.get('email');
  }

  get phone() {
    return this.infoForm.get('phone');
  }
}
