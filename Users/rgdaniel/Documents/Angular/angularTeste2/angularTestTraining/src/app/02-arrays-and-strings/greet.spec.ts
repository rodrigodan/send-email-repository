import { greet } from './greet';

describe('greet',()=>{
    it('Definir mensagem de boas vindas', ()=>{
        // expect(greet('Jasmine testing training')).toBe('Welcome Jasmine testing training');
        expect(greet('Jasmine testing training')).toContain('Jasmine testing training');
    })
});