//DEPENDENCIAS
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs-extra');

//MODELO
const Photo = require('../models/Photo');
const { append } = require('express/lib/response');

//CLOUDINARY
const cloudinary = require ('cloudinary');
cloudinary.config({
  cloud_name: 'dtyzcdmsi',
  api_key: '779454451634526',
  api_secret: 'omWFhpN3zu3nI10WlD7irTAgrj8'
});

//RUTAS APP

//GET PARA LA PÁGINA PRINCIPAL
router.get('/', async (req, res) => {
    
  try {

      const arrayImagenDB = await Photo.find()
      console.log(arrayImagenDB)

      res.render("index", {
          arrayImagen: arrayImagenDB
      })
      
  } catch (error) {
      console.log(error)
      
  }

  
})

//RUTA PARA LA PÁGINA DE PANEL DE CONTROL
router.get("/images/add", async (req, res) => {
  try {

    const arrayImagenDB = await Photo.find()
    console.log(arrayImagenDB)

    res.render("add", {
        arrayImagen: arrayImagenDB
    })
    
} catch (error) {
    console.log(error)
    
}
  });

//RUTA PARA SUBIR LAS NUEVAS IMÁGENES
router.post('/images/add', async (req, res) => {

  const {title, description,} = req.body;
  const result = await cloudinary.uploader.upload(req.file.path);
  const newPhoto = new Photo({
    title, 
    description,
    imageURL: result.url,
    public_id: result.public_id
  });
  await newPhoto.save();
  await fs.unlink(req.file.path);
  res.redirect('/')

})


//RUTA PARA ACCEDER AL PERFIL ESPECÍFICO
router.get('/:id', async(req, res) => {
  const id = req.params.id
  try {
      const imagenDB = await Photo.findOne({ _id: id })
      console.log(imagenDB)
      res.render('detalle', {
          imagen: imagenDB,
          error: false
      })
  } catch (error) {
      console.log('error al editar', error)
      res.render('detalle', {
          error: true,
          mensaje: 'No se encuentra el documento...'
      })
  }
})

//RUTAS PARA BORRAR FOTO
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  console.log('id desde back-end', id)
  try {

      const imagenDB = await Photo.findByIdAndDelete({ _id: id });
      console.log(imagenDB)

      if (!imagenDB) {
          res.json({
              estado: false,
              mensaje: 'No se puede eliminar'
          })
      } else {
          res.json({
              estado: true,
              mensaje: 'eliminado!'
          })
      }
      
  } catch (error) {
      console.log(error)
  }
})

//EDITAR FOTOS

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const body = req.body;


  try {
      const imagenDB = await Photo.findByIdAndUpdate(
          id, body, { useFindAndModify: false }
      )
      res.json({
          estado: true,
          mensaje: 'foto editada'
      })
  } catch (error) {
      console.log(error)
      res.json({
          estado: false,
          mensaje: 'foto no editada'
      })
  }
})


//EXPORTAR MODULO
module.exports = router;