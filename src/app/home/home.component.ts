import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../services/volunteer.service';
//import { FormBuilder } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {catchError, map, take} from 'rxjs/operators';
import {throwError} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  form: any= FormGroup;
  formDonate: any= FormGroup;
  formSubmitted: any = false;
  display: any = 'none';
  constructor(private http:HttpClient, private volunteerService: VolunteerService, private fb: FormBuilder, private rfm: ReactiveFormsModule){

  }
  
  // bannerData:any=[];
  // constructor(private banner:BannerService)
  // {
  //   this.banner.getData().subscribe(result=>{
  //     console.log(result);
  //     this.bannerData=result;
  //   })
  // }
  //slideConfig = { autoplay: true, slidesToShow: 1, slidesToScroll: 1 };
  
  
  ngOnInit() {
    this.form = this.fb.group({
      Name: ['', Validators.required],
      Mobile: ['', Validators.required],
      Email: ['', Validators.required],
      Subject: ['', Validators.required],
      Pan: ['', Validators.required]
      
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
    
      this.http.post('http://mongiafoundationapi.ourdemoservers.com/api/Volunteers/SetVolunteers', formData).subscribe(() =>  {
        alert('Submitted Successfull! Thank You');
        
        
      })
    }
  }

  


  

}
