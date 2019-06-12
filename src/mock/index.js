import Mock from 'mockjs'
Mock.setup({
  timeout: '200-600'
})
let commendList = []

for (let i = 0; i < 20; i++) {
  commendList.push(Mock.mock({
    'id|+1': 1000 + 1,
    'goodsname': '@csentence(3)',
    'goodsclass': [{
      'goodsimage': "@image('200x100', '#02adea', 'goodsImage')",
      'goodsprice': '@integer( 100, 300)',
      'goodssize': ['白色', '黑色'],
      'goodsinfo': '@csentence(20)'
    },
    {
      'goodsimage': "@image('200x100', '#02adea', 'goodsImage')",
      'goodsprice': '@integer( 100, 300)',
      'goodssize': ['白色', '黑色', '蓝色', '黄色'],
      'goodsinfo': '@csentence(20)'
    }
    ]
  }))
}

function getlist () {
  return {
    code: 200,
    msg: '成功',
    data: commendList
  }
}
Mock.mock('/getlist', 'get', getlist)
