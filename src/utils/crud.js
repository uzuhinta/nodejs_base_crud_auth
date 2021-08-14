export const getOne = (model) => async (req, res) => {
  const id = req.params.id;
  const userId = req.user._id;

  const doc = await model.findOne({ _id: id, createdBy: userId }).exec();

  if (!doc) {
    return res.status(404).end();
  }

  res.status(200).json({ data: doc });
};

export const getMany = (model) => async (req, res) => {
  const docs = await model.findOne({ createdBy: req.user._id });
  res.status(200).json({ data: docs });
};

export const createOne = (model) => async (req, res) => {
  const doc = await model.createOne({ ...req.body, createdBy: res.user._id });
  res.status(200).json({ data: doc });
};

export const updateOne = (model) => async (req, res) => {
  const doc = await model.findOneAndUpdate(
    {
      _id: req.params.id,
      createdBy: req.user._id,
    },
    req.body,
    { new: true }
  );

  if (!doc) {
    return res.status(400).end();
  }

  res.status(200).json({ data: doc });
};

export const removeOne = (model) => async (req, res) => {
  const doc = await model
    .findOneAndRemove({
      _id: req.params.id,
      createdBy: req.user._id,
    })
    .exec();

  if (!doc) {
    return res.status(400).end();
  }

  res.status(200).json({ data: doc });
};

export const crudControllers = (model) => ({
  getOne: getOne(model),
  getMany: getMany(model),
  createOne: createOne(model),
  updateOne: updateOne(model),
  removeOne: removeOne(model),
});
