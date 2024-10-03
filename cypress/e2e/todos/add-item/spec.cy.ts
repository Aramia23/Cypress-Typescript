import testData from '../../../fixtures/todoData'

//With this test case we can assure that every item added is showed up at front
//we are adding different kinds of data, letters, number, special characters.
describe('Add diferents items to list', () => {
    beforeEach('Open and check url', () =>{
        cy.checkUrl()
        
    })
    it('Add and check regular items',()=>{
        let testDataJson = Object.values (testData)
        testDataJson.forEach( (e:string) => {
            cy.addItem(e)
            cy.checkItemOnList(e)            
        }) 
    }) 
})