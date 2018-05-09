import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CourseService } from './../services/course.service';
import { ICourse } from './../defines/course.interface';

@Component({
	moduleId: module.id,
	selector: 'zvn-course-list',
	templateUrl: './../templates/course-list.component.html'
})

export class CourseListComponent implements OnInit {
	errorMessage: string;
	courses: ICourse[] = [];
	course: ICourse;

	constructor(
		private _courseService: CourseService)
	{

	}

	ngOnInit(){
		this.getItems();
	}

	getItems(){
		this._courseService.getItems().subscribe(
			(data: ICourse[]) => this.courses = data,
			(error: any) =>  this.errorMessage = <any>error
		);
	}

}
