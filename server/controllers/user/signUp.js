const { user } = require('../../models'); // 이름과 model폴더 디렉토리 확인
const bcrypt = require('bcrypt');

module.exports = {
  signUp: async (req, res) => {
    // 1. body값에서 email, nickname, password 구조분해 할당으로 받기
    // 2. 이미 존재하는 이메일이거나 닉네임이면 409
    // 3. 한 개라도 입력되지 않았다면 422
    // 4. 사용할 수 있는 닉네임과 이메일을 받았다면, 받은 비밀번호를 hash(async)
    // 5. 생성된 hash값과 받은 유저 정보를 db에 저장 (회원가입 성공)

    try {
      const { email, nickname, password } = req.body;
      console.log('signUp 유저 정보: ', email, nickname, password);

      // DB에 동일한 이메일이 존재할 때
      const db_email = await user.findOne({ email });
      if(db_email) {
        return res.status(409).send({ message: `${email} already exists.` });
      }
      console.log('signUp db_email', db_email)

      // DB에 동일한 닉네임이 존재할 때
      const db_nickname = await user.findOne({ nick_name: nickname });
      if(db_nickname) {
        return res.status(409).send({ message: `${nickname} already exists.` });
      }
      console.log('signUp db_nickname', db_nickname);

      // email, nickname, password 셋 중에 한 개라도 입력되지 않았을 때
      if(!email || !nickname || !password ) {
        return res.status(422).send('insufficient parameters supplied');
      }

      // hash 생성
      // hash와 유저 정보를 DB에 저장
      bcrypt.hash(password, 10, (err, hash) => {
        if(err) {
          console.log('signup bcrypt hash 생성 오류', err)
        }

        // DB에 hash를 포함한 유저 정보를 저장한다.
        const new_user = await user.create({
                                nick_name: nickname,
                                email,
                                password: hash,
                                point: 0
                          });
        console.log('signup new_user: ', new_user)
      });

      // 회원가입 성공
      res.status(201).send({ message: 'created' });

    } catch (err) {
      console.log(err);
    }

  }
}