import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiagnosticServiceService } from 'src/app/services/diagnostic-service.service';

@Component({
  selector: 'app-diagnostic-form',
  templateUrl: './diagnostic-form.component.html',
  styleUrls: ['./diagnostic-form.component.css'],
})
export class DiagnosticFormComponent implements OnInit {
  diagnosticForm: FormGroup;

  public showErrors = false;

  constructor(
    fb: FormBuilder,
    private diagnosticService: DiagnosticServiceService
  ) {
    this.diagnosticForm = fb.group({
      code: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit = (): void => {
    this.showErrors = true;
    console.log('submitted', this.diagnosticForm);
    if (this.diagnosticForm.valid) {
      this.diagnosticService
        .saveDiagnostic(this.diagnosticForm.value)
        .subscribe((res) => console.log(res));
    }
  };

  // get errors() {
  //   // return Object.keys(this.diagnosticForm.errors)
  // }
}
