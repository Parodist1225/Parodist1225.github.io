const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: true,
  audio: [
    {
      name: "千年之羽（符华印象曲）",
      artist: '小林未郁',
      url: 'http://music.163.com/song/media/outer/url?id=1956534872.mp3',
      cover: 'http://parodist1225.top/static/music/千年之羽.jpg',
    },
    {
      name: 'China-X',
      artist: '徐梦圆',
      url: 'http://music.163.com/song/media/outer/url?id=1956534872.mp3',
      cover: 'https://p2.music.126.net/fS_5RbP_4qg-RYreqp2tGg==/109951167558017839.jpg?param=130y130',
    },
  ]
});