import { VoteComponent } from "./vote.component";

describe('VoteComponent',()=>{
    let component: VoteComponent;

    // beforeAll(()=>{
    //     //arrange - define component instance
    //     component = new VoteComponent();
    // });
    beforeEach(()=>{
        //arrange - define component instance
        component = new VoteComponent();
    })
    afterAll(()=>{});

    it('testar upvote da aplicação',()=>{
        //act - define action of a component method
        let voteValue = component.upVote();
        //asset - verify the test validity
        expect(component.totalVotes).toBe(1);

    })
    it('testar upvote da aplicação',()=>{
        //act - define action of a component method
        component.downVote();
        //asset - verify the test validity
        expect(component.totalVotes).toBe(-1);

    })
});