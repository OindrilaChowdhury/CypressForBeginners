describe('Automation For Beginners', () => {
  it('Visit The Site', () => {
    cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSdiA4za6Prg9rZ8Hz0-bkF0BOmZ3Tk4JsgAHBb96FoFoyqe-w/viewform', {
      onBeforeLoad(win) {
        Object.defineProperty(win.navigator, 'language', { value: 'en-GB' });
        Object.defineProperty(win.navigator, 'languages', { value: ['en-GB'] });
        Object.defineProperty(win.navigator, 'accept_languages', { value: ['en-GB'] });
      },
      headers: {
        'Accept-Language': 'en-GB',
      },
  });

    // cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSdiA4za6Prg9rZ8Hz0-bkF0BOmZ3Tk4JsgAHBb96FoFoyqe-w/viewform',{
    //   onBeforeLoad (win) {
    //     Object.defineProperty(win.navigator, 'language', {
    //       value: 'en'
             
    //     })
    //   }
    // });

  })
   
  it('Name', function(){
    cy.get('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(1) > div > div > div.AgroKb > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input').type('John Doe');
    cy.wait(3000)
  })

  it('Address',function(){
    cy.get('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(2) > div > div > div.AgroKb > div').type('Dhaka, Bangladesh');
    cy.wait(3000)
  })

  it('Gender Dropdown',function(){
    cy.get('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(3) > div > div > div.oyXaNc > div:nth-child(2) > div > span > div > div:nth-child(2)').click();
    cy.wait(3000)
  })

  it('Radio Button click', function(){
    cy.get('#i29').click();
    cy.wait(3000)
  })

  it('Date select',function(){
    cy.get('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(5) > div > div > div:nth-child(2) > div > div > div.rFrNMe.yqQS1.hatWr.zKHdkd > div.aCsJod.oJeWuf > div > div.Xb9hP > input').click({force:true});
    cy.get('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(5) > div > div > div:nth-child(2) > div > div > div.rFrNMe.yqQS1.hatWr.zKHdkd > div.aCsJod.oJeWuf > div > div.Xb9hP > input').type('2022-01-01');
    cy.wait (3000)
  })

  it('Submit',function(){
    cy.get('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.ThHDze > div.DE3NNc.CekdCb > div.lRwqcd > div > span > span').click();
    cy.wait(3000)
  })

  
    describe('Form Fill Test', () => {
      it('Add Another Response', () => {
        cy.visit('https://docs.google.com/forms/u/0/d/e/1FAIpQLSdiA4za6Prg9rZ8Hz0-bkF0BOmZ3Tk4JsgAHBb96FoFoyqe-w/viewform?usp=form_confirm')
      })

  })
})