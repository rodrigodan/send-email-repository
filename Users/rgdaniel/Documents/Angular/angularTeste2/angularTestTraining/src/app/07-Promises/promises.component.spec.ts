import { PromisesComponent } from "./promises.component";
import { PromisesService } from "./promises.service";
import { TestBed } from '@angular/core/testing';
import { Model } from "./model";

describe('PromisesComponent',()=>{
    let promisesComponent: PromisesComponent;
    let service: PromisesService;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [PromisesComponent],
            providers: [PromisesService]
        });
        promisesComponent = TestBed.createComponent(PromisesComponent).componentInstance;
        service = TestBed.inject(PromisesService);
    });

    it('testando getData',async ()=>{
        spyOn(service,'get').and.returnValue(
            new Promise((resolve,reject)=>{
                resolve(new Model('teste','teste', 73));
            }))

        
        await promisesComponent.getData(10);

        expect(promisesComponent.modelElements[0].phone).toEqual(73);
    });

    // it('testando getData',async ()=>{

    //     spyOn(service,'get').and.callFake(()=>{
    //         return({
              
    //             then: function(callback){
    //                 callback(new Model('teste','teste', 73));
    //             }
    //         })
    //     })
        
    //     await promisesComponent.getData(10);

    //     expect(promisesComponent.modelElements[0].phone).toEqual(73);
    // });

})