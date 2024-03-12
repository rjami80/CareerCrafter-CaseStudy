import { Component,inject } from '@angular/core';
import { ApplicationService } from '../../services/application.service';
import { Router } from '@angular/router';
// import { Application } from '../../models/Application.Model';
@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrl: './employer-dashboard.component.css'
})
export class EmployerDashboardComponent {
user:any;
employerService=inject(ApplicationService);
router : Router = inject(Router);

applications : any
  toastr: any;
 ngOnInit(){
  this.user = JSON.parse(localStorage.getItem('user'))
  this.employerService.getApplicationByEmployerId(JSON.parse(localStorage.getItem('user')).employerId,this.user.token).subscribe(
    (res) => {
      this.applications = res.data as any;
      console.log(this.applications)
      console.log("api response:" + JSON.stringify(res.data));
    },
    error => {
      console.log(error);
    }
  );
 }
}
