import { Request, Response } from 'express';
import * as Yup from 'yup';
import { getRepository } from 'typeorm';

import Orphanage from '../models/Orphanage';
import orphanageView from '../views/orphanages';

export default {
  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required('Este campo é obrigatório'),
      latitude: Yup.number().required('Este campo é obrigatório'),
      longitude: Yup.number().required('Este campo é obrigatório'),
      about: Yup.string()
        .max(300, 'Deve ter no máximo 300 caracteres')
        .required('Este campo é obrigatório'),
      instructions: Yup.string().required('Este campo é obrigatório'),
      opening_hours: Yup.string().required('Este campo é obrigatório'),
      open_on_weekends: Yup.boolean().required('Este campo é obrigatório'),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required('Este campo é obrigatório'),
        })
      ),
    });

    await schema.validate(data, { abortEarly: false });

    const orphanage = orphanagesRepository.create(data);

    await orphanagesRepository.save(orphanage);
    return response.status(201).send(orphanage);
  },
  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find({
      relations: ['images'],
    });
    return response.status(200).json(orphanageView.renderMany(orphanages));
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images'],
    });
    return response.status(200).json(orphanageView.render(orphanage));
  },
};
