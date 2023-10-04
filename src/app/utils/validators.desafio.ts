import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function ageUserValidation(control:AbstractControl): ValidationErrors | null {

    if (control.value <16 || control.value >99 ){
        return{
            ageError: true
        }
    }
    return null
    }

    export function nameAdmin(control:AbstractControl): ValidationErrors | null {
        
    if (typeof control.value === "string" && control.value.toLowerCase() === "nicolas fernandez" ){
        return{
            userAdmin: true
        }
    }
    return null
    }