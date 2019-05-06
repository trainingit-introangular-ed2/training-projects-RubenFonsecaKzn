import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-projects-form',
  templateUrl: './filter-projects-form.component.html',
  styleUrls: ['./filter-projects-form.component.css']
})
export class FilterProjectsFormComponent implements OnInit {
  @Output() public projectName: string;
  @Output() public FilterProjects = new EventEmitter<string>();
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.BuildForm();
  }

  private BuildForm() {
    this.formGroup = this.formBuilder.group({
      Name: ['', []]
    });
  }
}
