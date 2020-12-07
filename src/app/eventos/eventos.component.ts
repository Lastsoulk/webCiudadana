import { Component, OnInit } from '@angular/core';

export class course {
    Id = -1;
    courseType = '';
    Time = '';
    courseName = '';
    Update = '';
}

export const courseList: course[] = [

    {
        Id: 1,
        courseType: 'Convocatoria',
        Time: 'hace 2 dias',
        courseName: 'Minga Barrial Floresta',
        Update: 'Updated 21 Sep 2020'
    },
    {
        Id: 2,
        courseType: 'Actualizacion',
        Time: 'hace 1 dia',
        courseName: 'Reunion con el alcalde de duran',
        Update: 'Updated 25 Oct 2020'
    },
    {
        Id: 3,
        courseType: 'Convocatoria',
        Time: 'hace 5 dias',
        courseName: 'Donacion de ropa',
        Update: 'Updated 30 Nov 2020'
    },
    {
        Id: 4,
        courseType: 'Actualizacion',
        Time: 'hace 5 horas',
        courseName: 'Intervencion de concejal',
        Update: 'Updated 01 Oct 2020'
    }
];



@Component({
    selector: 'app-eventos',
    templateUrl: './eventos.component.html',
    styleUrls: ['./eventos.component.scss']
})
export class eventosComponent implements OnInit {

    courseList: course[] = [];
    selectedCategory = 'All';

    constructor() {
        this.courseList = courseList;
    }

    ngOnInit(): void {
    }


}
