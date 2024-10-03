import testData from '../../../fixtures/todoData'

//With this test case we can assure that an element is deleted from the to-do list
//To ensure the item is deleted we try to find the item on the list.
describe('Delete item from list', ()=>{
    beforeEach('Open and check url', () =>{
        cy.checkUrl();
        cy.addItem(testData.item)
        cy.checkItemOnList(testData.item)            
        
    })
    it('Delete specifict item',()=>{
        cy.deleteSpecificItemByDescription(testData.item)  
        cy.checkItemNotOnList(testData.item)
    })

})