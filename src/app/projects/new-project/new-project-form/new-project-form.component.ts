import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  public project = { id: 0, name: '' };
  public projectName: string;
  public formGroup: FormGroup;
  @Output() public SaveProject = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.BuildForm();
  }

  private BuildForm() {
    const minNameLengh = 10;
    this.formGroup = this.formBuilder.group({
      Name: ['Angular project example', [Validators.required, Validators.minLength(minNameLengh)]]
    });
  }
}
