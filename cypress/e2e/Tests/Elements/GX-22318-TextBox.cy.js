describe('✅ToolsQA Elements Text Box: Fill form and Submit', () => {
	beforeEach('precondition: visit website Demo QA', () => {
		cy.visit('https://demoqa.com/text-box'),
		cy.url().should('contain', 'text box');
	});

	it('TC1: Validate fill the Fill form successfully with valide data verifying the correct message', () => {
		cy.expect() // step 1: fill name
		cy.get('input').type('text').
	});
		// step 2: fill e-mail

		// ..

		// action: click submit

		// tests

		
	});

	
	it('TC2: Validate submit the Fill form completely empty and check the inexistent message', () => {

	});

	it('TC3: Validate Not to submit the Fill form when "email" does not contain an "@"', () => {

	});

	it('TC4: Validate Not to submit the Fill form when "email" does not contain minimum 1 alphanumeric character after "@"', () => {

	});
	it('TC5: Validate Not to submit the Fill form when "email" does not contain "." after 1 alphanumeric character after "@"', () => {
		

	});
	it('TC6: Validate Not to submit the Fill form when "email" does not contain minimum 2 alphanumeric character after "." displaying a red border', () => {
		

	});

	it('TC7: Validate Not to submit the Fill form when "email field" is empty and no log message is displayed', () => {
		

	});
	
	});




import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
