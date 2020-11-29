var express = require('express');
var router = express.Router();
var User = require('../schemas/user');

/**
 * 유저정보
 * GET /api/users
 */

router.get('/', function(req, res, next) {
	const user_email = req.query.user_email;
		console.log(user_email);
	
	User.findOne({ user_email: user_email }, { user_pw: false })
		.then((result) => {
			console.log(result);
			if (result)
				res.json(200, { success:true, data:result, message:`${user_email} 의 정보` });
			else
				res.json(404, { success:false, message:`${user_email}는 없는 유저입니다.` });
		})
		.catch((err) => {
			console.error(err);
			next(err);
		})
});

/**
 * 회원가입
 * POST /api/users/register
 */
router.post('/register', function(req, res, next) {
	const user = new User({
		user_email: req.body.user_email,
		user_pw: req.body.user_password
	});
	user.save()
		.then((result) => {
			res.json(200, { success:true, message:'회원가입에 성공했습니다.' });
		})
		.catch((err) => {
		    if (err) {
				if (err.name === 'MongoError' && err.code === 11000)
					res.send({ success: false, message: '헤당 이메일은 이미 사용중입니다!' });
				else
					next(err);
			}
		});
});



/**
 * 로그인
 * POST /api/users/login
 */
router.post('/login', function(req, res, next) {
	const user = new User({
		user_email: req.body.user.input_email,
		user_pw: req.body.user.input_pw,
	});
	let user_oid = '';
	
	User.findOne({ user_email: user.user_email })
		.then((result) => {
			if (!result) {
				// 이메일도 비밀번호도 틀림
				return { success:false, message:`이메일을 확인해주세요` };
			} else if (result.user_pw === user.user_pw) {
				// 로그인 성공
				user_oid = result._id;
				return User.updateOne({ user_email: user.user_email }, { user_updatedAt: new Date().toISOString() });		
			} else {
				// 이메일만 성공
				return { success:false, message:`비밀번호를 확인해주세요` };
			}
		})
		.then((result) => {
			if (result.ok) 
				res.json(200, { success:true, message:`${user.user_email} : 로그인 성공`, _id:user_oid });
			else
				res.json(200, result);
			
		})
		.catch((err) => {
			console.error(err);
			next(err);
		});
});

module.exports = router;
