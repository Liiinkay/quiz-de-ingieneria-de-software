import { getLocaleNumberSymbol } from "@angular/common";

export interface Dias {
    id:number;
    idRegion:number;
    nombre:string;
    estado:string;
    imagen:string;
    gradosC:number;
    gradosF:number;
}

export const ListaDias:Array<Dias>=
    [{
        id:1,
        idRegion:1,
        nombre:"lunes",
        estado:"soleado",
        imagen:"img/soleado.png",
        gradosC:18,
        gradosF:64
    },
    {
        id:2,
        idRegion:1,
        nombre:"martes",
        estado:"lluvioso",
        imagen:"img/lluvioso.png",
        gradosC:9,
        gradosF:48
    },
    {
        id:3,
        idRegion:1,
        nombre:"martes",
        estado:"nublado",
        imagen:"img/nublado.png",
        gradosC:9,
        gradosF:48
    },
    {
        id:4,
        idRegion:1,
        nombre:"martes",
        estado:"tormenta",
        imagen:"img/tormenta.png",
        gradosC:9,
        gradosF:48
    },
    {
        id:5,
        idRegion:1,
        nombre:"viernes",
        estado:"soleado",
        imagen:"img/soleado.png",
        gradosC:22,
        gradosF:71.6
    },
    {
        id:6,
        idRegion:1,
        nombre:"sabado",
        estado:"lluvioso",
        imagen:"img/lluvioso.png",
        gradosC:10,
        gradosF:50
    },
    {
        id:7,
        idRegion:1,
        nombre:"domingo",
        estado:"tormenta",
        imagen:"img/tormenta.png",
        gradosC:7,
        gradosF:44.6
    }
    ]
