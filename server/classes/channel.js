export class Channel {
	/**
	 * Stores and retrieves saved channel data and configuration, validates users
	 * 
	 * @param {string} name A uniquely identifying channel name or some other identifier
	 */
	constructor(name) {
		this.name = name;
		this.users = [];
		this.elements = [];
	}

	checkElements() {

	}

	startIntervals() {
		this.interval = setInterval(() => {
			this.checkElements();
		}, 1000 * 10);
	}

	getDefaultElement() {
		return {
			id: uuidv4(),
			tag: 'div',
			style: {
				x: 1920 / 2,
				y: 1080 / 2,
				width: 100,
				height: 100,
			}
		}
	}

	/**
	 * Updates and optionally saves channel data
	 * @param {string} id ID of the element to update
	 * @param {object} changes an object containing values to update
	 */
	updateElement(elementId, changes) {
		for (let i = 0; i < this.data.elements.length; i++) {
			const element = this.data.elements[i];
			if (element.data.id === elementId) {
				for (const key in changes) {
					if (Object.hasOwnProperty.call(changes, key)) {
						const value = changes[key];
						element.data[key] = value;
					}
				}
				element.needsUpdate = true;
				return true;
			}
		}
		return false;
	}

	/**
	 * creates an element with given props
	 * @param {object} props Default props to apply, "id" will be overwritten
	 */
	createElement(props = {}) {
		const defaultProps = this.getDefaultElement();
		const element = {
			...defaultProps,
			props,
			id: defaultProps.id,
		}
		this.element.push(element);
		return element.id;
	}
}