const express = require('express')
const app = express()
const list = [
    {
        "name": "tipo_patente",
        "type": "int",
        "view": "select",
        "label": "Tipo de patente",
        "required": false,
        "included": true,
        "configurable": false,
        "comment": "",
        "config": {},
        "readonly": false,
        "editable": false,
        "options": [
          {
            "code": "1",
            "name": "Patente Comercial"
          },
          {
            "code": "2",
            "name": "Patente M.E.F."
          }
        ]
      },
      {
        "name": "tipo_solicitud",
        "type": "int",
        "view": "select",
        "label": "Tipo de Solicitud",
        "required": false,
        "included": true,
        "configurable": false,
        "comment": "",
        "config": {},
        "readonly": false,
        "editable": false,
        "options": [
          {
            "code": "1",
            "name": "Patente nueva"
          },
          {
            "code": "2",
            "name": "Apertura de sucursal",
            "config": {
              "visibleExpression": "t.tipo_patente==1"
            }
          },
          {
            "code": "3",
            "name": "Ampliación de giro"
          },
          {
            "code": "4",
            "name": "Cambio de giro"
          },
          {
            "code": "5",
            "name": "Cambio de domicilio"
          }
        ]
      },
      {
        "name": "inmueble_direccion_calle",
        "type": "string",
        "view": "text",
        "label": "Calle",
        "required": false,
        "included": true,
        "configurable": false,
        "comment": "",
        "config": {},
        "readonly": false,
        "validator": {
          "length": 50,
          "expression": "^[a-zA-Z0-9- .,ñÑáéíóúÁÉÍÓÚü]+$",
          "js": "",
          "message": "Debe ingresar solo letras, números y guion"
        },
        "editable": false,
        "options": []
      },
      {
        "name": "inmueble_direccion_numero",
        "type": "string",
        "view": "text",
        "label": "Nº",
        "required": false,
        "included": true,
        "configurable": false,
        "comment": "",
        "config": {},
        "readonly": false,
        "validator": {
          "length": 10,
          "expression": "^[a-zA-Z0-9-]+$",
          "js": "",
          "message": "Debe ingresar solo letras, números y guion"
        },
        "editable": false,
        "options": []
      }
]

app.get('/', (req, res)=>{
    res.send('Hello world')
})

app.use('/users', (req, res)=>{
    const listUsers = []
    for(const user of list){
        const objtUser = {
            "name":user.name,
            "tipo" : user.type
        }
        listUsers.push(objtUser)
    }
    res.send(listUsers)
})

app.listen(3222, ()=>{
    console.log(`Server on port {3222}`);
});