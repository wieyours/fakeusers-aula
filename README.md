# Projeto gerador de fakeusers
O projeto consiste em usar API pública para geração de usuários fictícios com informações como nome, email, imagem, estado, país, entre outras.

## Design do projeto
![alt text](image.png)

## API utilizada
A API utilizada para geração de usuários fictícios foi é a [https://randomuser.me/] que fornece informações de usuário através de um JSON conforme abaixo:

```
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Ayşe",
        "last": "Taşlı"
      },
      "location": {
        "street": {
          "number": 513,
          "name": "Doktorlar Cd"
        },
        "city": "Nevşehir",
        "state": "Kilis",
        "country": "Turkey",
        "postcode": 80669,
        "coordinates": {
          "latitude": "68.8516",
          "longitude": "78.1471"
        },
        "timezone": {
          "offset": "-8:00",
          "description": "Pacific Time (US & Canada)"
        }
      },
      "email": "ayse.tasli@example.com",
      "login": {
        "uuid": "0c12029f-c88d-4093-8ee5-447162e28b83",
        "username": "goldenelephant331",
        "password": "thumper",
        "salt": "FG1bMmV4",
        "md5": "0f3a6e9e115a67d58ee07e0735b0ec57",
        "sha1": "dba93d0dd69e0dab53156ba92eac426523b486ce",
        "sha256": "bf2b0eb41920a6a37025d4779f779376b7b906e19b1df63884e9b5bd27f9cb1d"
      },
      "dob": {
        "date": "1970-02-16T00:27:14.046Z",
        "age": 55
      },
      "registered": {
        "date": "2003-12-09T00:15:44.788Z",
        "age": 21
      },
      "phone": "(181)-575-2698",
      "cell": "(666)-376-2369",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/36.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/36.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/36.jpg"
      },
      "nat": "TR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Carol",
        "last": "Macrae"
      },
      "location": {
        "street": {
          "number": 6519,
          "name": "Church Lane"
        },
        "city": "Westminster",
        "state": "Dyfed",
        "country": "United Kingdom",
        "postcode": "BH6M 9NE",
        "coordinates": {
          "latitude": "31.2884",
          "longitude": "176.8895"
        },
        "timezone": {
          "offset": "-11:00",
          "description": "Midway Island, Samoa"
        }
      },
      "email": "carol.macrae@example.com",
      "login": {
        "uuid": "eaba6bb3-69e6-4838-b0a1-e5a43b9bd941",
        "username": "brownwolf954",
        "password": "alleycat",
        "salt": "smTJUZMt",
        "md5": "02726504e538f52cdd1bcfacd3c85d4f",
        "sha1": "8cf79813c31056d696c83e06b532cbab1df0d21d",
        "sha256": "2ffaa1d09a931f126cf8fc9ab6efb48f3b93a905e8e29164c45292070699039c"
      },
      "dob": {
        "date": "1961-07-30T01:26:13.299Z",
        "age": 63
      },
      "registered": {
        "date": "2003-12-29T08:15:45.240Z",
        "age": 21
      },
      "phone": "015395 12622",
      "cell": "07236 736667",
      "id": {
        "name": "NINO",
        "value": "SK 22 60 69 H"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/56.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/56.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/56.jpg"
      },
      "nat": "GB"
    }
  ],
  "info": {
    "seed": "55f2b4b145239078",
    "results": 2,
    "page": 1,
    "version": "1.4"
  }
}
```

## Funcionalidades
- [ x ] Filtro de usuários pelo gênero
- [ x ] Filtro de usuários pela nacionalidade
- [ x ] Filtro de usuários pela quantidade
- [  ] Mostrar mais informações do usuário
   - [ ] País
   -  [ ] Estado
   -  [ ] Cidade
   -  [ ] Telefone
- [   ] Responsividade da tela
- [   ] Aumentar o filtro da quantidade de usuários
- [   ] Colocar mais opções de países

## Contatos
Email: laisccastroc2023@gmail.com