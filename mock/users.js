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
    url: 'https://umijs.org',
  },
  '/api/chart': {
    result: [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 1150 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ],
  },
  '/api/graph': {
    list: [
      {
        name: '明 | 宣德窑 | 青花描红云龙纹合碗',
        time: 1426,
        size: 127.01999999999998,
        color: [
          [113.61791967044336, 41.56745623069223, 17.713697219359133],
          [150.5673289183225, 153.89448123620434, 148.9646799117],
          [82.16709511568114, 96.03856041131172, 110.71379605826922],
        ],
        url: 'https://gw.alipayobjects.com/zos/rmsportal/wxiFrnPFTozrbQMRLUQc.png',
        yValue: 0.5,
      },
      {
        name: '南宋 | 龙泉窑 | 青瓷莲瓣碗',
        time: 960,
        size: 281.7,
        color: [
          [87.33020134228224, 115.07248322147646, 64.18926174496552],
          [47.64470588235352, 42.89411764705878, 25.555294117646497],
        ],
        url: 'https://gw.alipayobjects.com/zos/rmsportal/YgOyMtxYjDRflrndZAXo.png',
        yValue: 0.2,
      },
    ],
  },
  '/api/poster': {
    list: [
      { name: 'Baker Street Irregulars', count: 3 },
      { name: 'Moriarty', count: 3 },
      { name: 'Mycroft Holmes', count: 4 },
      { name: 'Stanley Hopkins', count: 4 },
      { name: 'Tobias Gregson', count: 4 },
      { name: 'Inspector Lestrade', count: 13 },
      { name: 'MRS Hudson', count: 14 },
      { name: 'DR.Watson', count: 58 },
      { name: 'Sherlock Holmes', count: 60 },
    ],
  },
};
