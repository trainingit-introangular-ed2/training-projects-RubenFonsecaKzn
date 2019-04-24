import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  public project = { id: 0, name: '' };
  public projectName: string;
  @Output() public SaveProject = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
