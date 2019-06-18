import { Injectable } from "@angular/core";
import {Istudent} from '../Modals/student';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class StudentService  {


   private subject = new Subject<any>();  



  constructor() {}

 public  addStudent(student):void {

        let Json = JSON.stringify(student);
        return  localStorage.setItem("Student", Json);


  }



 public deleteStudent(studentArr:Istudent[],index): Istudent[] {
  
       studentArr.splice(index,1);
       return studentArr;



 }


  public studentList():Istudent[]{
   
       let studentList = JSON.parse(localStorage.getItem("Student"))   
       return studentList;


  }
  
  public editStudent(student):void{


 
       this.subject.next(student);



  }


  public getEdit():Observable<any>{

      return this.subject.asObservable();



  }
 

}
