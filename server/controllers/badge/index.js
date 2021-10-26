module.exports = {
  badgeList: async (req, res) => {
    res.send("Badge 전체 리스트 불러오기");
  },
  post: async (req, res) => {
    res.send("뱃지 획득시");
  },
  myBadgeList: async (req, res) => {
    res.send("획득한 뱃지 리스트");
  },
};
