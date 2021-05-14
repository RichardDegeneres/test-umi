import herolist from './herolist.json';

export default {
  // mock 接口，很复古
  '/api/users': herolist,
  'POST /api/herodetail': (req, res) => {
    const { hero_type } = req.body;
    const hero = herolist.filter(
      (item) => item.hero_type === parseInt(hero_type),
    );
    res.send(hero);
  },
};
