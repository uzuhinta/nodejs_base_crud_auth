export const getOne = (model) => async (req, res) => {
  try {
    const doc = await model
      .findOne({ createdBy: req.user._id, _id: req.params.id })
      .lean()
      .exec();
    if (!doc) {
      return res.status(400).end();
    }

    res.status(200).json({ data: doc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const getMany = (model) => async (req, res) => {
  try {
    const docs = await model.find({ createdBy: req.user._id }).lean().exec();
    if (!docs) {
      return res.status(400).end();
    }

    res.status(200).json({ data: docs });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const createOne = (model) => async (req, res) => {
  const createdBy = req.user._id;
  try {
    const doc = await model.create({ ...req.body, createdBy: createdBy });
    res.status(201).json({ data: doc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const updateOne = (model) => async (req, res) => {
  try {
    const updateDoc = await model.findOneAndUpdate(
      {
        _id: req.params.id,
        createdBy: req.user._id,
      },
      req.body,
      { new: true }
    );

    if (!updateDoc) {
      return res.status(400).end();
    }

    res.status(200).json({ data: updateDoc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const removeOne = (model) => async (req, res) => {
  try {
    const removed = await model
      .findOneAndRemove({
        _id: req.params.id,
        createdBy: req.user._id,
      })
      .exec();

    if (!removed) {
      return res.status(400).end();
    }

    res.status(200).json({ data: removed });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const crudControllers = (model) => ({
  getOne: getOne(model),
  getMany: getMany(model),
  createOne: createOne(model),
  updateOne: updateOne(model),
  removeOne: removeOne(model),
});
