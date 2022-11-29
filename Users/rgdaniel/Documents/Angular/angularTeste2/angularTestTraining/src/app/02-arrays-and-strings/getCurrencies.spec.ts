import { getCurrencies } from "./getCurrencies";

describe('getCurrencies',()=>{
    it('deve retornar todas as moedas suportáveis',()=>{
        let result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
    it('deve retornar no máximo 3 elementos',()=>{
        let result = getCurrencies();
        expect(result.length).toBeLessThan(4);
    });
    it('deve retornar numero de moedas iguais a 3',()=>{
        let result = getCurrencies();
        expect(result.length).toBe(3);
    });
})