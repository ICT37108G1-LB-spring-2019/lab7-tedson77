import { Component, OnInit, Input, Output } from '@angular/core';
import {Istudent} from '../../_Shared/Modals/student';
import {StudentService} from '../../_Shared/Services/student.service';

@Component({
  selector: 'student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {
  
  @Input() public studentArr:Istudent[]

  constructor(private stu:StudentService) { }


  ngOnInit() {
    //localStorage
    this.studentArr.push(...this.stu.studentList());
  

  }


  delete(index){ 

 this.studentArr =  this.stu.deleteStudent(this.studentArr,index);
 this.stu.addStudent(this.studentArr);



  }
  edit(index){

  this.stu.editStudent(index);
   

  }

}
