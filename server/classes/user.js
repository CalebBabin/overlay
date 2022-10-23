import fs from "fs";

if (!fs.existsSync('./tmp')) {
	fs.mkdirSync('./tmp');
}
if (!fs.existsSync('./tmp/users')) {
	fs.mkdirSync('./tmp/users');
}

console.log(`${fs.readdirSync('./tmp/users').length} users detected`);

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