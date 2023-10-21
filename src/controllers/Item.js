const Item = require("../schemas/Item");

class ItemController {
  create = async (req, res, next) => {
    try {
      const { name, category, subCategory, unityType } = req.body;

      const item = await Item.create({
        name,
        category,
        subCategory,
        unityType,
      });

      return res.status(201).json(item);
    } catch (err) {
      next(err);
    }
  };
}

export default new ItemController();
