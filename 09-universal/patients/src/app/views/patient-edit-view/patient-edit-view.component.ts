import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-edit-view',
  templateUrl: './patient-edit-view.component.html',
  styleUrls: ['./patient-edit-view.component.css'],
})
export class PatientEditViewComponent implements OnInit {

  public id: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(
      params => this.id = params.id
    )
  }

  ngOnInit(): void {}

  backToList = () => {
    this.router.navigate(['patients/list']);
  };
}
