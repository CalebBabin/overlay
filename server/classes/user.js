export class User {
	/**
	 * Stores and retrieves saved user data and configuration
	 * 
	 * @param {string} name A uniquely identifying user name or some other identifier
	 */
	constructor(name) {
		this.data = {
			name,
			preferences: {},
		};
		this.cacheDirectory = './tmp/users/' + name + '.json';
		this.load();
	}

	load() {
		if (fs.existsSync(this.cacheDirectory)) {
			const cachedData = JSON.parse(
				fs.readFileSync(this.cacheDirectory)
			);

			this.data = {
				...this.data,
				...cachedData,
			}
		};
	}


	/**
	 * saves the current state to disk
	 */
	save() {
		fs.writeFileSync(
			this.cacheDirectory,
			JSON.stringify(this.data, null, 4),
			{
				encoding: 'utf-8',
			}
		)
	}
}