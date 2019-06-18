import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { StudentService } from "../_Shared/Services/student.service";
import { Subscription } from "rxjs";
import { Istudent } from "../_Shared/Modals/student";
@Component({
  selector: "app-student-managment",
  templateUrl: "./student-managment.component.html",
  styleUrls: ["./student-managment.component.css"]
})
export class StudentManagmentComponent implements OnInit, OnDestroy {

  public myForm: FormGroup;
  public studentArr: Istudent[] = [];
  private subscription: Subscription;
  private editStu: boolean = false;
  private stuObj: number;


  constructor(private fb: FormBuilder, private stu: StudentService) {

    this.subscription = this.stu.getEdit().subscribe(data => {
      this.editStudent(data);

    });
}



  ngOnInit() {

    this.myForm = this.fb.group({
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      id: ["", Validators.required]

    });
  }



  get form(): any {
    return this.myForm.controls;
  }



  onSubmit(): void {

 
    if (this.myForm.invalid) {
      console.log("this form is not valid");
    }



    let input = {
      name: this.form.name.value,
      lastName: this.form.lastName.value,
      id: this.form.id.value
    };

  
    this.studentArr.push(input);
    this.stu.addStudent(this.studentArr);
    this.myForm.reset();


  }

  editStudent(index) {

    this.editStu = true;

    let obj = this.studentArr[index];
    this.stuObj = index;
    this.myForm.setValue({
      name: obj.name,
      lastName: obj.lastName,
      id: obj.id
    });


  }
  update() {

    
    this.editStu = false;
    let name = this.form.name.value;
    let lastName = this.form.lastName.value;
    let id = this.form.id.value;
    this.studentArr[this.stuObj] = { name: name, lastName: lastName, id: id };
    this.myForm.reset();
    this.stu.addStudent(this.studentArr);


  }
  cancel(){

    this.editStu = false;
    this.myForm.reset();


  }
  ngOnDestroy() {

    this.subscription.unsubscribe();
    
  }
}
