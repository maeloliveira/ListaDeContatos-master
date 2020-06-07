import React, { useState } from 'react';

class Contact {
  constructor(id, nome, fone, imagem, lat, lng, createdAt) {
    this.id = id;
    this.nome = nome;
    this.fone = fone;
    this.imagem = imagem;
    this.lat = lat;
    this.lng = lng;
    this.createdAt = createdAt;
  }
}

export default Contact;