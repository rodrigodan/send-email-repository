import { VoteComponent } from './vote.component';

describe('VoteComponent', ()=>{
    let voteComponent: VoteComponent;
    beforeEach(()=>{
        voteComponent = new VoteComponent();
    });
    it('testar upVote retorna 1', ()=>{
        let value = 0;
        voteComponent.voteChanged.subscribe((data: number)=>{
            value = data;
        });
        voteComponent.upVote();
        expect(value).toBe(1);
    })
})