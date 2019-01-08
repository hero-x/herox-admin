// 中间层，用来连接数据库
const Monk = require('monk')
const db = Monk('localhost/herox')
const user = db.get('user')
const handlr = {
  async getUserInfo(ctx) {
    return new Promise((resolve,reject)=>{
      user.find({},(err,doc)=>{
        if (err) throw err;
        resolve(doc[0])
      })
    })
  },
  async addUserInfo(ctx) {
    return new Promise((resolve,reject)=>{
      user.insert({userInfo:ctx.request.body.userInfo},(err,doc)=>{
        if (err) throw err;
        resolve(doc)
      })
    })
  },
  async updateUserInfo(ctx) {
    var id = ctx.request.body.id
    return new Promise((resolve,reject)=>{
      user.findOneAndUpdate({_id:id},{userInfo:ctx.request.body.userInfo},(err,doc)=>{
        if (err) throw err;
        resolve(doc)
      })
    })
  },
}
module.exports=handlr