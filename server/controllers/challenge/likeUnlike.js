module.exports = {
  like: (req, res) => {
    res.send('challenge like 테스트 성공');
  },
  unLike: (req, res) => {
    res.send('challenge unlike 테스트 성공');
  }
}