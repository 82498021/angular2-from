import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Lesson,StudentLevel } from './lesson';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
})
export class AppComponent {


  lesson=new Lesson("This is the lesson title!",0,"description goes",StudentLevel.BEGINNER);

  myForm:FormGroup;

  constructor(){
    this.myForm=new FormGroup({
        title:new FormControl(
          'This is the title',
          [
            Validators.required,
            Validators.minLength(5)
          ]
          ),
        duration:new FormControl(10,[
          Validators.required,
          Validators.pattern('[0-9]+')
        ]),
        description:new FormControl('this is description',[
          Validators.required
        ])
    });

    this.myForm

  }

partialUpdate(){
  this.myForm.patchValue({
    title:"Set Form Values",
    duration:5
  });
}

  fullUpdate(){
    this.myForm.setValue({
    title:"Set Form Values",
    duration:20,
    description:"new description"
    });

  }

  reset(){
this.myForm.reset();

  }


}
