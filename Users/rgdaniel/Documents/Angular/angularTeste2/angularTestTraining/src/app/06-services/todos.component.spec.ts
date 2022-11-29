import { TodosComponent } from "./todos.component";
import { TestBed } from "@angular/core/testing"
import { TodoService } from "./todo.service";
import { from, of, throwError } from 'rxjs';

describe('TodosComponent',()=>{
    let todosComponent: TodosComponent;
    let service: TodoService;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [TodosComponent],
            providers: [TodoService]
        });
        service = TestBed.inject(TodoService);
        todosComponent = TestBed.createComponent(TodosComponent).componentInstance;
    });

    it('adicionar novo item todo',()=>{
        let teste = [90,152,987];
        spyOn(service,'add').and.returnValue(from([teste]));


        todosComponent.add(10);

        expect(todosComponent.todos).toEqual(teste);
    });
    it('verificar o valor do primeiro item do todo apos a execucao do add',()=>{
        let teste = [90,152,987];
        spyOn(service,'add').and.returnValue(from([teste]));


        todosComponent.add(15);

        expect(todosComponent.todos.indexOf(152)).toEqual(1);
    });

    it('testar se o metodo delete foi chamado',()=>{
        spyOn(window,'confirm').and.returnValue(true);
        let spyOns = spyOn(service,'delete').and.returnValue(of());
        todosComponent.delete(15);
        expect(spyOns).toHaveBeenCalledWith(15);
    });

    it('testar cenário em que o servidor caiu',()=>{

        spyOn(service,'add').and.returnValue(throwError('Erro do Servidor'));


        todosComponent.add(10);

        expect(todosComponent.message).toBe('Erro do Servidor');
    });

})