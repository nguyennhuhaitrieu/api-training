import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CourseService } from './../services/course.service';
import { ICourse } from './../defines/course.interface';

@Component({
	moduleId: module.id,
	selector: 'zvn-course-list',
	template: `
		<div class="panel panel-info">
			<div class="panel-heading">
				<h3 class="panel-title">Course List</h3>
			</div>
			<div class="panel-body">
				<table class="table table-striped table-hover">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr *ngFor="let course of courses; let i = index">
							<td>{{ i+1 }}</td>
							<td>{{ course.name }}</td>
							<td><a (click)="onSelect(course.id)" class="label label-success">View</a></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	`
})

export class CourseListComponent implements OnInit {
	courses: ICourse[];

	constructor(
		private _courseService: CourseService,
		private _routerService: Router
	) {

	}

	ngOnInit() {
		this.courses = this._courseService.getCourses();
  }

	onSelect(courseID: ICourse){
    this._routerService.navigate(['/course', courseID]);
	}
}
