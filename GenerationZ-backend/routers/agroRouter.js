import express from "express";
import expressAsyncHandler from "express-async-handler";
import Agro from "../models/agroModule.js";

const agroRouter = express.Router();

agroRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const agros = await Agro.find({});
    res.send(agros);
  })
);

agroRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const agro = await Agro.findById(req.params.id);
    if (agro) {
      res.send(agro);
    } else {
      res.status(404).send({ message: "Agro Not Found" });
    }
  })
);

agroRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const agro = new Agro({
      title: "agro earth" + Date.now(),
      image: "https://res.cloudinary.com/progriot/image/upload/v1662819451/photo_5253613729319337887_x_eu5d2t.jpg",
      category: "agro ml generationz",
    });
    const createdAgro = await agro.save();
    res.send({ message: "Agro Created", agro: createdAgro });
  })
);

agroRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const agroId = req.params.id;
    const agro = await Agro.findById(agroId);
    if (agro) {
      agro.title = req.body.title;
      agro.image = req.body.image;
      agro.category = req.body.category;
      const updatedAgro = await agro.save();
      res.send({ message: "Agro Updated", agro: updatedAgro });
    } else {
      res.status(404).send({ message: "Agro Not Found" });
    }
  })
);

agroRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const agro = await Agro.findById(req.params.id);
    if (agro) {
      const deleteAgro = await agro.remove();
      res.send({ message: "Agro Deleted", agro: deleteAgro });
    } else {
      res.status(404).send({ message: "Agro Not Found" });
    }
  })
);

export default agroRouter;
