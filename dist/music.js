const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: true,
  audio: [
    {
      name: "千年之羽（符华印象曲）",
      artist: '小林未郁',
      url: 'http://parodist1225.top/static/music/小林未郁-千年之羽.mp3',
      cover: 'http://parodist1225.top/static/music/千年之羽.jpg',
    },
    {
      name: 'Moon Halo',
      artist: '茶理理,TetraCalyx,Hanser',
      url: 'http://parodist1225.top/static/music/MoonHalo.mp3',
      cover: 'http://192.168.111.242:8081/IXP46078c365a6cfdefa7c28f4479e73221179b16fae0c64_10.11.178.133/p1.music.126.net/ciLKATqflV2YWSV3ltE2Kw==/109951166159281275.jpg?param=130y130',
    },
    {
      name: 'Scarborough Fair',
      artist: '山田タマル',
      url: 'https://music.163.com/outchain/player?type=2&id=489970551&auto=1',
      cover: 'http://192.168.111.242:8081/IXP7819ce21c85b5e5f0be63258c8b38e3217eb16fae0c5b_10.11.178.133/p1.music.126.net/PFu_Fb_sYULwkoJ87mHDmA==/19023750184014421.jpg?param=130y130',
    },
  ]
});