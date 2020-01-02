module.exports = app => {
  const express = require("express");
  const router = express.Router();
  router.post("/", async (req, res) => {
    //创建分类接口
    const model = await req.model.create(req.body);
    model.save();
    res.send(model);
  });
  router.put("/:id", async (req, res) => {
    //修改分类接口
    const model = await req.model.findByIdAndUpdate(req.params.id, req.body);
    res.send(model);
  });
  router.delete("/:id", async (req, res) => {
    //删除分类接口
    const model = await req.model.findByIdAndDelete(req.params.id);
    res.send(model);
  });
  router.get("/", async (req, res) => {
    //获取分类列表接口
    const model = await req.model
      .find()
      .populate("parent")
      .limit(10);
    res.send(model);
  });
  router.get("/:id", async (req, res) => {
    //获取分类详细信息接口
    const model = await req.model.findById(req.params.id);
    res.send(model);
  });
  app.use(
    "/admin/api/:resource",
    (req, res, next) => {
      req.model = require(`../../models/${req.params.resource}`);
      next();
    },
    router
  );
};
