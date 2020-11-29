const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
	// 유저이메일
	user_email: {
		type: String,
		required: true,
		unique: true
	},
	// 비밀번호
	user_pw: {
		type: String,
		required: true
	},
	// 생성일
	user_createdAt: {
		type: Date,
		default: Date.now
	},
	// 마지막 접속
	user_updatedAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', userSchema);