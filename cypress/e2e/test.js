/// <reference types="Cypress" />
describe('this is test ', () => {
    it('this is test for price', () => {
        cy.visit("https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html")
// cy.get(".fixed_wrapper .prdocutname").eq(5).invoke('text').as("firstItem")
// cy.get("@firstItem").should('include','BeneFit Girl Meets Pearl')
cy.get(':nth-child(5) > .field > .control > #limiter').select("24")
cy.get(".price-box").as("items")
cy.get("@items").find(".price").invoke("text").as("itemPrice")
cy.get("@itemPrice").then((price)=>{
let myList= price.split("$");

let dis=0;

for(let i=0;i<myList.length ;i++){
    cy.log(myList[i] + " before discount ")
    let total=0;
    dis= Number(myList[i])* .1
total=Number(myList[i]) - dis
cy.log(total+" after discount")

}



})



});
 });
    