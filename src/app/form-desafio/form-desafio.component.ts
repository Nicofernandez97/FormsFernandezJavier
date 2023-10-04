import { Component } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { ageUserValidation, nameAdmin } from '../utils/validators.desafio';
@Component({
  selector: 'app-form-desafio',
  templateUrl: './form-desafio.component.html',
  styleUrls: ['./form-desafio.component.css']
})
export class FormDesafioComponent {

  userForm: FormGroup;
  constructor(private Formbuilder: FormBuilder){
    this.userForm= this.Formbuilder.group({
      name:["",[Validators.required,nameAdmin]],
      age:["",[Validators.required,ageUserValidation]],
      email:["",[Validators.required, Validators.email]],
      phone:["",[Validators.required]],
      userName:["",[Validators.required]],
      passcode:["",[Validators.required,]],
    }
    )  }
    onSubmit():void{
      console.log("Todos los campos pasaron la verificación.")
  }

}
