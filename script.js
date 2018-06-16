// document.write('<p>hola</p>')

// var obj = {
//     hola:function(){
//         console.log('hey hey hey');
//     }
// }

// obj.hola()

// var obj = {
//     hola:function(){
//         console.log('hey hey hey ' + this.nombre);
//     },
//     nombre: 'Marco'
// }

// obj.hola()


// var personas = [
//     {
//         nombre: 'Diana',
//         edad: 70,
//         saludar:function(){
//             console.log ('hola este es un saludo');
//         }
//     },
//     {
//         nombre: 'Angelica',
//         edad: 80,
//         saludar:function(){
//             console.log ('hola este es un saludo');
//         }
//     }
// ]


// function Persona(n, e){
//     this.nombre =n;
//     this.edad = e;

//     this.saludar =function(){
//         console.log('hola soy ' + this.nombre);
//     }

// }
// var p = new Persona ('Marco',40);
// p.saludar();



function Animal (e, c, y, t){
    this.especie = e;
    this.colores = c;
    this.edad = y;
    this.tamaño = t;
    this.saludar = function (){
        switch (this.especie) {
            case 'Gato':
                console.log('Miau')
                break;
            case 'Perro':
                console.log('Guau')
                break;
            case 'Jirafa':
                console.log('Sonido de jirafa')
                break;
            default:
                break;
        }
        console.log('hola ' + this.especie);
    }

    this.edades = function (){
        switch (this.edad) {
            case 2:
                console.log('Estas joven')
                break;
            case 4:
                console.log('Estas Puberto')
                break;
            case 100:
                console.log('Seguramente muerto')
                break;
            default:
                break;
        }
        console.log('Tu edad es ' + this.edad);
    }
    
}
var a = new Animal ('Jirafa','Negro',100,'Chico');
    a.saludar();
    a.edades();

var b = new Animal ('Gato','Blanco',2,'Chico');
b.saludar();
b.edades();



var c = new Animal ('Perro','Gris',4,'grande');
c.saludar();
c.edades();