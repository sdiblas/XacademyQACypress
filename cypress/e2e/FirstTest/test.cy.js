describe('Entrega Tarea 19-11-2024', {testIsolation:false}, ()=>{
    
    it('Visitar la pagina', () =>{
        cy.visit('https://automationintesting.online/');
    })

    it('Verificar info de contacto del hotel', ()=>{
        // Se verifica que la info de contacto de los siguientes textos existe y está visible en la página, en algún lugar
        cy.contains('Shady Meadows B&B').should('be.visible')
        cy.contains('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S').should('be.visible')
        cy.contains('012345678901').should('be.visible')
        cy.contains('fake@fakeemail.com').should('be.visible')
    })

    it('Verificar imágenes visibles', ()=>{
        cy.get('img[src="/images/rbp-logo.jpg"]').should('be.visible')
        cy.get('img[src="/images/room2.jpg"]').should('be.visible')
    })

    it('Verificar info de bienvenida del hotel', ()=>{
        cy.contains('Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.').should('be.visible')
    })

})