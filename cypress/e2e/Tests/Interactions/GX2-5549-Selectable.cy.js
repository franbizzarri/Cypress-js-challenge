describe('✅ToolsQA | Widgets | Dropdown - Select Menu', () => {
	beforeEach('Visitar la página', () => {
		selectable.urlVisit();
		cy.url().should('contain', 'selectable');
	});
	it('5550 | TC1: Validar que el elemento “List” tenga el funcionamiento correcto al seleccionarse.', () => {
		selectable.btnListClick();
		selectable.get.btnList().should('have.attr', 'aria-selected', 'true');
		selectable.elementsListClick();
		selectable.get.elementsList().should('contain', 'Cras justo odio');
	});
	it('5550 | TC2: Validar que el elemento “List” tenga el funcionamiento correcto al deseleccionarse.', () => {
		selectable.btnListClick();
		selectable.get.btnList().should('have.attr', 'aria-selected', 'true');
		selectable.elementsListClick();
		selectable.get.elementsList().should('contain', 'Cras justo odio');
		selectable.elementsListClick();
		selectable.get.elementsList().should('contain', 'Dapibus ac facilisis in');
	});
	it('5550 | TC3: Validar que el elemento “Grid” tenga el funcionamiento correcto al seleccionarse.', () => {
		selectable.btnGridClick();
		selectable.get.btnGrid().should('have.class', 'nav-item');
		selectable.elementsGridClick();
		selectable.get.elementsGrid().should('have.class', 'list-group-item-action');
	});
	it('5550 | TC4: Validar que el elemento “Grid” tenga el funcionamiento correcto al deseleccionarse.', () => {
		selectable.btnGridClick();
		selectable.get.btnGrid().should('have.class', 'nav-item');
		selectable.elementsGridClick();
		selectable.get.elementsGrid().should('contain', 'One');
		selectable.elementsGridClick();
		selectable.get.elementsGrid().should('have.class', 'list-group-item');
	});
});

import { selectable } from '@pages/Interactions/GX2-5549-Selectable.Page';

import { removeLogs } from '@helper/RemoveLogs';
removeLogs();
