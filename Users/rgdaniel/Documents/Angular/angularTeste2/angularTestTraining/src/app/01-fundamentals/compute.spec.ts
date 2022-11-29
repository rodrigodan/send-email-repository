import { compute } from './compute';

//suite
describe('compute',()=>{
    //specs
    it('metodo deve retornar valor 0 para entredas negativas',()=>{
        expect(compute(-2)).toBe(0);
    });
    it('metodo deve retornar valor de entrada + 1 para entradas positivas',()=>{
        expect(compute(15)).toBe(16);
    });
});