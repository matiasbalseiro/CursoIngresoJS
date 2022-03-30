/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento
    es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra
    marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un
    descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos e informar del impuesto con el
    siguiente mensaje:
    ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
function CalcularPrecio() {
    /* const PRECIO_UNITARIO = 35;
     var cantidadLamparitas;
     var marca;
     var porcentajeDescuento;
     var importe;
     var descuento;
     var importeConDescuento;
     var iibb;
     var importeFinal;
 
     cantidadLamparitas = document.getElementById("txtIdCantidad").value;
     cantidadLamparitas = parseInt(cantidadLamparitas);
     marca = document.getElementById("Marca").value;
 
     // PUNTO A
     if (cantidadLamparitas >= 6) {
         porcentajeDescuento = 50;
     } // PUNTO B
     else if (cantidadLamparitas == 5) {
         if (marca == "ArgentinaLuz") {
             porcentajeDescuento = 40;
         }
         else {
             porcentajeDescuento = 30;
         }
     } // PUNTO C
     else if (cantidadLamparitas == 4) {
         if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
             porcentajeDescuento = 25;
         }
         else {
             porcentajeDescuento = 20;
         }
     } // PUNTO D
     else if (cantidadLamparitas == 3) {
         if (marca == "ArgentinaLuz") {
             porcentajeDescuento = 15;
         }
         else if (marca == "FelipeLamparas") {
             porcentajeDescuento = 10;
         }
         else {
             porcentajeDescuento = 5;
         }
     } // DESCARTE SI COMPRA MENOS DE 3
     else {
         porcentajeDescuento = 0;
     }
 
     // HAGO CALCULOS 1 SOLA VEZ
     importe = cantidadLamparitas * PRECIO_UNITARIO;
     descuento = importe * porcentajeDescuento / 100;
     importeConDescuento = importe - descuento;
 
     // PUNTO E
     if (importeConDescuento > 120) {
         iibb = importeConDescuento * 10 / 100;
         importeFinal = importeConDescuento + iibb;
         alert(`Usted pago $${iibb} de IIBB.`);
     }
     else {
         importeFinal = importeConDescuento;
     }
 
     document.getElementById("txtIdprecioDescuento").value = "$" + importeFinal.toFixed(2);
 }
-------------------------------------------------------------------------------- IF/SWITCH--------------------------------------------------------------------------
    const PRECIO_UNITARIO = 35;
    var cantidadLamparitas;
    var marca;
    var porcentajeDescuento;
    var importe;
    var descuento;
    var importeConDescuento;
    var iibb;
    var importeFinal;

    cantidadLamparitas = document.getElementById("txtIdCantidad").value;
    cantidadLamparitas = parseInt(cantidadLamparitas);
    marca = document.getElementById("Marca").value;

    if (cantidadLamparitas >= 6) { // PUNTO "A"
        porcentajeDescuento = 50;
    }
    else if (cantidadLamparitas == 5) { // PUNTO "B"
        switch (marca) {
            case "ArgentinaLuz":
                porcentajeDescuento = 40;
                break;
            default:
                porcentajeDescuento = 30;
                break;
        }
    }
    else if (cantidadLamparitas == 4) { // PUNTO "C"
        switch (marca) {
            case "ArgentinaLuz":
            case "FelipeLamparas":
                porcentajeDescuento = 25;
                break;
            default:
                porcentajeDescuento = 20;
                break;
        }
    }
    else if (cantidadLamparitas == 3) { // PUNTO "D"
        switch (marca) {
            case "ArgentinaLuz":
                porcentajeDescuento = 15;
                break;
            case "FelipeLamparas":
                porcentajeDescuento = 10;
                break;
            default:
                porcentajeDescuento = 5;
                break;
        }
    }
    else {
        porcentajeDescuento = 0;
    }

    importe = cantidadLamparitas * PRECIO_UNITARIO;
    descuento = importe * porcentajeDescuento / 100;
    importeConDescuento = importe - descuento;

    if (importeConDescuento > 120) { // PUNTO "e"
        iibb = importeConDescuento * 10 / 100;
        importeFinal = importeConDescuento + iibb;
        alert(`Usted pago $${iibb} de IIBB.`);
    }
    else {
        importeFinal = importeConDescuento;
    }

    document.getElementById("txtIdprecioDescuento").value = "$" + importeFinal.toFixed(2);
}*/

    const PRECIO_UNITARIO = 35;
    var cantidadLamparitas;
    var marca;
    var porcentajeDescuento;
    var importe;
    var descuento;
    var importeConDescuento;
    var iibb;
    var importeFinal;

    cantidadLamparitas = document.getElementById("txtIdCantidad").value;
    cantidadLamparitas = parseInt(cantidadLamparitas);
    marca = document.getElementById("Marca").value;

    switch (cantidadLamparitas) { // PUNTO "B"
        case 5:
            switch (marca) {
                case "ArgentinaLuz":
                    porcentajeDescuento = 40;
                    break;
                default:
                    porcentajeDescuento = 30;
                    break;
            }
            break;
        default:
            porcentajeDescuento = 50; // PUNTO "A"
    }
    switch (cantidadLamparitas) { // PUNTO "C"
        case 4:
            switch (marca) {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentajeDescuento = 25;
                    break;
                default:
                    porcentajeDescuento = 20;
                    break;
            }
            break;
    }
    switch (cantidadLamparitas) { // PUNTO "D"
        case 3:
            switch (marca) {
                case "ArgentinaLuz":
                    porcentajeDescuento = 15;
                    break;
                case "FelipeLamparas":
                    porcentajeDescuento = 10;
                    break;
                default:
                    porcentajeDescuento = 5;
                    break;
            }
            break;
    }
    switch (cantidadLamparitas) {
        case 2:
        case 1:
            porcentajeDescuento = 0;
            break;
    }
    importe = cantidadLamparitas * PRECIO_UNITARIO;
    descuento = importe * porcentajeDescuento / 100;
    importeConDescuento = importe - descuento;

    if (importeConDescuento > 120) { // PUNTO "E"
        iibb = importeConDescuento * 10 / 100;
        importeFinal = importeConDescuento + iibb;
        alert(`Usted pago $${iibb} de IIBB.`);
    }
    else {
        importeFinal = importeConDescuento;
    }

    document.getElementById("txtIdprecioDescuento").value = "$" + importeFinal.toFixed(2);
}