// 中间层，用来连接数据库
const Monk = require('monk')
const db = Monk('localhost/herox')
const articles = db.get('markdown')
const handlr = {
  async addArticle(ctx) {
    return new Promise((resolve,reject)=>{
      articles.insert({
        "markdown":ctx.request.body.form,
      },(err,doc)=>{
        if (err) throw err;
        resolve(doc)
      })
    })
  },
  async getAllArticle(ctx) {
    return new Promise((resolve,reject)=>{
      articles.find({},(err,doc)=>{
        if (err) throw err;
        resolve(doc)
      })
    })
  },
  async deleArticleById(ctx) {
    var id = ctx.request.body.id
    return new Promise((resolve,reject)=>{
      articles.findOneAndDelete({_id:id},(err,doc)=>{
        if (err) throw err;
        resolve(doc)
      })
    })
  }
}
module.exports=handlr