
const coex ={
    "empleados": [
      {
        "nombre": "Juanjose",
        "edad": 23,
        "direccion": {
          "calle": 16,
          "carrera": 66,
          "orientacion": "w"
        },
        "telefonos": [
          "1234567",
          "7654321"
        ],
        "hobbies": [
          "videojuegos",
          "peliculas"
        ]
      },
      {
        "nombre": "Pedro",
        "edad": 25,
        "direccion": {
          "calle": 56,
          "carrera": 42
        },
        "telefonos": [
          "65465458",
          "132138"
        ],
        "hobbies": [
          "futbol",
          "peliculas"
        ]
      },
      {
        "nombre": "Maria",
        "edad": 27,
        "direccion": {
          "calle": 6,
          "carrera": 12
        },
        "telefonos": [
          "1234567",
          "7654321"
        ],
        "hobbies": [
          "trotar"
        ]
      },
      {
        "nombre": "Luis",
        "edad": 29,
        "direccion": {
          "calle": 66,
          "carrera": 2,
          "orientacion": "w"
        },
        "telefonos": [
          "1234567",
          "7654321"
        ],
        "hobbies": [
          "futbol"
        ]
      },
      {
        "nombre": "Luisa",
        "edad": 31,
        "direccion": "conjunto el dorado apto 123",
        "hobbies": [
          "cocinar",
          "programar"
        ]
      }
    ]
  }

  console.log(coex)

  const{empleados}=coex
  const[direccion]=empleados
  const[hobbies]=empleados

  empleados.forEach(element => {
    console.log(element.nombre)
  });

  empleados.forEach(element => {
    if(empleados[element].direccion.orientacion){
        console.log(`La direccion es${direccion.orientacion}`)
    }
  });

// empleados.indexOf()
// console.log(empleados)