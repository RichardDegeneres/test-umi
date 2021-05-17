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
  '/api/cards': {
    id: 1,
    setup: 'Did you hear about the two silk worms in a race?',
    punchline: 'It ended in a tie',
  },
};
