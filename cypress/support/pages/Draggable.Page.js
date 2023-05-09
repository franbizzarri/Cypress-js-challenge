class simple {
	get = {
		dragMe: () => cy.get('#dragBox'),
		dragTab: () => cy.get('#draggableExample-tab-simple'),
		dragSection: () => cy.get('#tab-content'),
	};

	CheckTab() {
		return this.elements.dragTab();
	}

	simpleDrag() {
		let left = Cypress._.random(1, 100); //Coord was taken from Content Box only
		let top = Cypress._.random(1, 40); //Coord was taken from Content Box only
		cy.log(left, top);

		this.get
			.dragMe() // obtener el elemento a arrastrar
			.trigger('mousedown', 'center', { which: 1, pageX: left, pageY: top }) //hace click en el elemento
			.trigger('mousemove', { which: 1, clientX: left, clientY: top }) //Mueve el elemento a las coordenadas asignadas
			.trigger('mouseup', { force: true }); //suelta el click después de arrastrar el elemento a las coordenadas
	}
}

class AxisRestricted {
	get = {
		AxisTab: () => cy.get('#draggableExample-tab-axisRestriction'),
		OnlyX: () => cy.get('#restrictedX'),
		OnlyY: () => cy.get('#restrictedY'),
	};

	GetAxisTab() {
		this.get.AxisTab().click();
	}

	moveOnlyX() {
		let left = Cypress._.random(0, 100);
		this.get
			.OnlyX()
			.trigger('mousedown', { which: 1, pageX: left, pageY: 0 })
			.trigger('mousemove', { which: 1, clientX: left, ClientY: 0 })
			.trigger('mouseup', { force: true });
	}
	moveOnlyY() {
		let top = Cypress._.random(0, 40);
		this.get
			.OnlyY()
			.trigger('mousedown', { which: 1, pageX: 0, pageY: top })
			.trigger('mousemove', { which: 1, clientX: 0, ClientY: top })
			.trigger('mouseup', { force: true });
	}
}

class containerRestricted {
	get = {
		containerTab: () => cy.get('#draggableExample-tab-containerRestriction'),
		withinTheBox: () => cy.get('.ui-widget-content.ui-draggable.ui-draggable-handle'),
		containmentWrapper: () => cy.get('#containmentWrapper'),
		withinTheParent: () => cy.get('span.ui-draggable.ui-draggable-handle'),
		containmentParent: () => cy.get('draggable ui-widget-content m-3'),
	};
	getContainerRestricted() {
		this.get.containerTab().click();
	}
	moveOnlyWithinTheBox() {
		const randomX = Cypress._.random(-1.015625, 389.75); //limites dentro del box
		const randomY = Cypress._.random(-0.261719, 107.738); //Limite dentro del box
		cy.log(randomX);
		cy.log(randomY);
		this.get.withinTheBox().move({ deltaX: randomX, deltaY: randomY });
	}

	moveOutsideTheBox() {
		const randomX = Cypress._.random(-200, -1.8 || 390, 400); //limite fuera del box
		const randomY = Cypress._.random(-200, -0.3 || 108, 200); //Limite fuera del box
		cy.log(randomX);
		cy.log(randomY);
		this.get.withinTheBox().move({ deltaX: randomX, deltaY: randomY });
	}
	moveWithinTheParent() {
		const randomX = Cypress._.random(0, 13); //Limite dentro del parent
		const randomY = Cypress._.random(-1, 86); //Limite dentro del parent
		cy.log(randomX);
		cy.log(randomY);
		this.get.withinTheParent().move({ deltaX: randomX, deltaY: randomY });
		expect(randomX).to.equal(randomX);
	}
	moveOutsideTheParent() {
		const randomX = Cypress._.random(10, 0 || 14, 25); //Limite fuera del parent
		const randomY = Cypress._.random(-10, -2 || 87, 100); //Limite fuera del parent
		cy.log(randomX);
		cy.log(randomY);
		this.get.withinTheParent().move({ deltaX: randomX, deltaY: randomY });
	}

	// this.get.containmentWrapper().then($el => {
	// 	const x1 = $el[0].getBoundingClientRect().left;
	// 	const x2 = $el[0].getBoundingClientRect().width;
	// 	const xc = x1 + x2 / 2;

	// 	const y1 = $el[0].getBoundingClientRect().top;
	// 	const y2 = $el[0].getBoundingClientRect().height;
	// 	const yc = y1 + y2 / 2;

	// .trigger('mousedown', { which: 1, pageX: 75, pageY: 50 })
	// .trigger('mousemove', { which: 1, clientX: 75, clientY: 50 })
	// .trigger('mouseup', { force: true });
	// });
	// this.get
	// 	.withinTheBox()
	// 	.trigger('mousedown', { which: 1, PageX: randomX, pageY: randomY })
	// 	.trigger('mousemove', { which: 1, clientX: randomX, clientY: randomY })
	// 	.trigger('mouseup', { force: true });

	// let left = Cypress._.random(1, 382); //Coord was taken from Content Box only
	// let top = Cypress._.random(1, 107); //Coord was taken from Content Box only
	// cy.log(left, top);

	// this.get.containmentWrapper().then($wrapper => {
	// 	const containerCoords = $wrapper[0].getBoundingClientRect();
	// 	const containerCoordsFinal = $wrapper[0].getBoundingClientRect();
	// 	expect(containerCoords).not.equal(containerCoordsFinal);
	// });
}

export const dragMeSimple = new simple();
export const dragAxisRestricted = new AxisRestricted();
export const dragContainerRestricted = new containerRestricted();
