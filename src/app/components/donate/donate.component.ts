import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  form: any= FormGroup;
  formSubmitted: any = false;
  

  constructor(private http:HttpClient, private fb: FormBuilder, private rfm: ReactiveFormsModule) { }

  ngOnInit(){
    this.form = this.fb.group({
      Name: ['', Validators.required],
      Mobile: ['', Validators.required],
      Email: ['', Validators.required],
      Subject: ['', Validators.required],
      Pan: ['', Validators.required],
      Amount: ['', Validators.required]
    });
  }


  submitted = false;
  

  onSubmit(){
    if (this.form.invalid) {
      return;     
    }
    console.log(this.form.value);
    if (this.form.valid) {
      this.formSubmitted = true;
      //var body = "Name=" + user.firstname + "&lastname=" + user.lastname + "&name=" + user.name;
      var jsonData = this.form.value;
      var formData = new FormData();
      Object.keys(jsonData).forEach((key)=>{formData.append(key,jsonData[key])});
    
      this.http.post('http://mongiafoundationapi.ourdemoservers.com/api/Donate', formData).subscribe(() =>  {
        alert('Submitted Successfull! Thank You');
        
        
      })
    }
  }

}
