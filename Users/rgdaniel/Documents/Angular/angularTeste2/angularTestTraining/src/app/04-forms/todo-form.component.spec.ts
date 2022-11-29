import { TodoFormComponent } from './todo-form.component';
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent',()=>{
    let todoFormComponent: TodoFormComponent;
    beforeEach(()=>{
        todoFormComponent = new TodoFormComponent(new FormBuilder());
    });
    it('atributo name do TodoFormComponent é requerido',()=>{
        let nameControl = todoFormComponent.form.controls['name'];

        nameControl.setValue('teste');
        expect(nameControl.valid).toBeTruthy();
    });
    it('Foram declarados os atributos name e email do TodoFormComponent',()=>{
        let form = todoFormComponent.form;

        expect(form.contains('name')).toBeTruthy();
        expect(form.contains('email')).toBeTruthy();

    });

});