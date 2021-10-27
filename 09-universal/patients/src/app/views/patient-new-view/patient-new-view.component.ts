import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-new-view',
  templateUrl: './patient-new-view.component.html',
  styleUrls: ['./patient-new-view.component.css'],
})
export class PatientNewViewComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  backToList = () => {
    this.router.navigate(['patients/list']);
  };
}
