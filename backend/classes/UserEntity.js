class UserEntity {
	constructor() {
		this.email = null;
		this.name = null;
		this.lastName = null;
		this.password = null;
	}
	toString() {
		return JSON.stringify(this);
	}
}
module.exports = UserEntity;