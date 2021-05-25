'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, boke';
  }
  async create() {
    const { ctx } = this;
    ctx.body = 'hi, boke';
  }
  async update() {
    const { ctx } = this;
    ctx.body = 'hi, boke';
  }
  async destroy() {
    const { ctx } = this;
    ctx.body = 'hi, boke';
  }


  

}

module.exports = BlogController;
