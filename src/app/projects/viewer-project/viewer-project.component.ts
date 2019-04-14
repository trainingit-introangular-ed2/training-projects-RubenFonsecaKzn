import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
} )
export class ViewerProjectComponent implements OnInit {

  public projectId = '';
  constructor( activateRoute: ActivatedRoute ) {
    this.projectId = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
