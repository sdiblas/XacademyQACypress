describe('SauceDemo - Pruebas de Compra', {testIsolation:true}, () => {
    const baseUrl = 'https://www.saucedemo.com/';
  
    beforeEach(() => 
        {
            cy.visit(baseUrl, {
                onBeforeLoad(win) {
                  delete win.navigator.__proto__.serviceWorker
                },
              })
            
            cy.clearAllLocalStorage()
            cy.clearAllSessionStorage()
            cy.clearAllCookies()
           
        })
    
    it('Iniciar sesión correctamente con standard_user', () => {
        cy.login('standard_user', 'secret_sauce');
        cy.get('.inventory_list').should('be.visible'); // Verificar que se accede al inventario
    });
        
    it('Agregar todos los productos al carrito', () => {
        cy.login('standard_user', 'secret_sauce');
        cy.addAllProductsToCart();
        cy.get('.shopping_cart_badge').should('have.text', '6'); // Verificar que hay 6 productos en el carrito
    });
    
    it('Completar el flujo de compra correctamente', () => {
        cy.login('standard_user', 'secret_sauce');
        cy.addAllProductsToCart();
        cy.checkout('QA', 'Tester', '12345');
        cy.contains('Thank you for your order!').should('be.visible'); // Validar el mensaje de éxito
    });
  
    it('Cerrar sesión correctamente', () => {
        cy.login('standard_user', 'secret_sauce');
        cy.logout();
        cy.get('[data-test="login-button"]').should('be.visible'); // Validar que el botón de login es visible
    });
  
    it('Iniciar sesión correctamente con problem_user', () => {
        cy.login('problem_user', 'secret_sauce');
        cy.get('.inventory_list').should('be.visible'); // Verificar que se accede al inventario
    });
  
    it('Completar el flujo de compra correctamente y cerrar sesión', () => {
        cy.login('problem_user', 'secret_sauce');
        cy.addAllProductsToCart();
        cy.log('Este test fallará hasta que se resuelva el fix del BUG005')
        cy.checkout('QA', 'Tester', '12345');
        cy.contains('Thank you for your order!').should('be.visible'); // Validar el mensaje de éxito
        cy.logout();
        cy.get('[data-test="login-button"]').should('be.visible'); // Validar que el botón de login es visible
    });

  });