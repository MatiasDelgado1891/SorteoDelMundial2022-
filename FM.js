const read = require('prompt-sync')();

function main() {
    
    console.info('BIENVENIDOS AL FIXTURE DEL MUNDIAL QATAR 2022')
    console.info('   ')
    console.info('   ')
   
    do {
    var comienzo = read('Para comenzar  ingrese 1 ')
} while (validarComienzo(comienzo) === false);

    
    var GrupoA = [];
    var GrupoB = [];
    var GrupoC = [];
    var GrupoD = [];
    var GrupoE = [];
    var GrupoF = [];
    var GrupoG = [];
    var GrupoH = [];
    var r;
    var posicionesElegibles = [];
  var myArray = registro();
    
    paises = myArray[0]
    jugadores = myArray[1]
    var NombreDeSelecciones = selecciones(myArray)

    for (i = 0; i < NombreDeSelecciones.length; i++) posicionesElegibles[i] = i;
    GrupoA = sorteo(GrupoA, r, NombreDeSelecciones, posicionesElegibles)
    GrupoB = sorteo(GrupoB, r, NombreDeSelecciones, posicionesElegibles)
    GrupoC = sorteo(GrupoC, r, NombreDeSelecciones, posicionesElegibles)
    GrupoD = sorteo(GrupoD, r, NombreDeSelecciones, posicionesElegibles)
    GrupoE = sorteo(GrupoE, r, NombreDeSelecciones, posicionesElegibles)
    GrupoF = sorteo(GrupoF, r, NombreDeSelecciones, posicionesElegibles)
    GrupoG = sorteo(GrupoG, r, NombreDeSelecciones, posicionesElegibles)
    GrupoH = sorteo(GrupoH, r, NombreDeSelecciones, posicionesElegibles)


    console.info(' GRUPO A: ' + GrupoA.toString());
    console.info(' GRUPO B: ' + GrupoB.toString());
    console.info(' GRUPO C: ' + GrupoC.toString());
    console.info(' GRUPO D: ' + GrupoD.toString());
    console.info(' GRUPO E: ' + GrupoE.toString());
    console.info(' GRUPO F: ' + GrupoF.toString());
    console.info(' GRUPO G: ' + GrupoG.toString());
    console.info(' GRUPO H: ' + GrupoH.toString());
    console.info(' ');
    console.info(' Sorteo realizado');
    console.info(' ');
    console.info('comienzan los partidos de fase de grupo ');
    console.info(' ');
    var EstadisticasDeEquipos = []
    console.info('PARTIDOS DEL GRUPO A')
    var PrimerGrupo = GanadoresDeGrupo(GrupoA[0], GrupoA[1], GrupoA[2], GrupoA[3], jugadores, paises);
    EstadisticasDeEquipos.push(PrimerGrupo[2])
    EstadisticasDeEquipos.push(PrimerGrupo[3])
    myArray = PrimerGrupo[4]
    console.info(' ');
    console.info('PARTIDOS DEL GRUPO B');
    var SegundoGrupo = GanadoresDeGrupo(GrupoB[0], GrupoB[1], GrupoB[2], GrupoB[3], jugadores, paises);
    EstadisticasDeEquipos.push(SegundoGrupo[2])
    EstadisticasDeEquipos.push(SegundoGrupo[3])
    myArray = SegundoGrupo[4]
    console.info(' ');
    console.info('PARTIDOS DEL GRUPO C');
    var TercerGrupo = GanadoresDeGrupo(GrupoC[0], GrupoC[1], GrupoC[2], GrupoC[3], jugadores, paises);;
    EstadisticasDeEquipos.push(TercerGrupo[2])
    EstadisticasDeEquipos.push(TercerGrupo[3])
    myArray = TercerGrupo[4]
    console.info(' ');
    console.info('PARTIDOS DEL GRUPO D');
    var CaurtoGrupo = GanadoresDeGrupo(GrupoD[0], GrupoD[1], GrupoD[2], GrupoD[3], jugadores, paises);
    EstadisticasDeEquipos.push(CaurtoGrupo[2])
    EstadisticasDeEquipos.push(CaurtoGrupo[3])
    myArray = CaurtoGrupo[4]
    console.info(' ');
    console.info('PARTIDOS DEL GRUPO E');
    var QuintoGrupo = GanadoresDeGrupo(GrupoE[0], GrupoE[1], GrupoE[2], GrupoE[3], jugadores, paises);
    EstadisticasDeEquipos.push(QuintoGrupo[2])
    EstadisticasDeEquipos.push(QuintoGrupo[3])
    myArray = QuintoGrupo[4]
    console.info(' ');
    console.info('PARTIDOS DEL GRUPO F')
    var SextoGrupo = GanadoresDeGrupo(GrupoF[0], GrupoF[1], GrupoF[2], GrupoF[3], jugadores, paises)
    EstadisticasDeEquipos.push(SextoGrupo[2])
    EstadisticasDeEquipos.push(SextoGrupo[3])
    myArray = SextoGrupo[4]
    console.info(' ');
    console.info('PARTIDOS DEL GRUPO G');
    var SeptimoGrupo = GanadoresDeGrupo(GrupoG[0], GrupoG[1], GrupoG[2], GrupoG[3], jugadores, paises);
    EstadisticasDeEquipos.push(SeptimoGrupo[2])
    EstadisticasDeEquipos.push(SeptimoGrupo[3])
    myArray = SeptimoGrupo[4]
    console.info(' ');
    console.info('PARTIDOS DEL GRUPO H');
    var OctavoGrupo = GanadoresDeGrupo(GrupoH[0], GrupoH[1], GrupoH[2], GrupoH[3], jugadores, paises);
    EstadisticasDeEquipos.push(OctavoGrupo[2])
    EstadisticasDeEquipos.push(OctavoGrupo[3])
    myArray = OctavoGrupo[4]
    console.info(' ');
    console.info('Fase de Grupos finalizada  ');
    console.info(' ');
    console.info('comienzan los partidos de OCTAVOS DE FINAL')
    var GanadorOctavos1 = OctavosDeFinal(PrimerGrupo, SegundoGrupo, jugadores, paises);
    EstadisticasDeEquipos.push(GanadorOctavos1[2])
    EstadisticasDeEquipos.push(GanadorOctavos1[3])
    var GanadorOctavos2 = OctavosDeFinal(TercerGrupo, CaurtoGrupo, jugadores, paises);
    EstadisticasDeEquipos.push(GanadorOctavos2[2])
    EstadisticasDeEquipos.push(GanadorOctavos2[3])
    var GanadorOctavos3 = OctavosDeFinal(QuintoGrupo, SextoGrupo, jugadores, paises);
    EstadisticasDeEquipos.push(GanadorOctavos3[2])
    EstadisticasDeEquipos.push(GanadorOctavos3[3])
    var GanadorOctavos4 = OctavosDeFinal(SeptimoGrupo, OctavoGrupo, jugadores, paises);
    EstadisticasDeEquipos.push(GanadorOctavos4[2])
    EstadisticasDeEquipos.push(GanadorOctavos4[3])
    console.info(' ');
    console.info('octavos de final terminados');
    console.info(' ');
    console.info('comienzan los CUARTOS DE FINAL');
    console.info(' ');

    var CuartosDeFinal1 = LlavesFinales(GanadorOctavos1, GanadorOctavos2, jugadores, paises);
    EstadisticasDeEquipos.push(CuartosDeFinal1[2])
    EstadisticasDeEquipos.push(CuartosDeFinal1[3])
    var CuartosDeFinal2 = LlavesFinales(GanadorOctavos3, GanadorOctavos4, jugadores, paises);
    EstadisticasDeEquipos.push(CuartosDeFinal2[2])
    EstadisticasDeEquipos.push(CuartosDeFinal2[3])
    console.info(' ');
    console.info('cuartos de final terminados  ');
    console.info(' ');
    console.info('comienzan las SEMIFINALES')
    console.info(' ');
    var semifinal = LlavesFinales(CuartosDeFinal1, CuartosDeFinal2, jugadores, paises);
    console.info(' ');
    console.info('Semifinales Terminadas ');
    console.info(' ');
    var final = Final(semifinal, jugadores, paises);
    EstadisticasDeEquipos.push(final[0])
    EstadisticasDeEquipos.push(final[1])
    EstadisticasDeEquipos.push(final[2])
    EstadisticasDeEquipos.push(final[3])
    

    console.info(EstadisticasDeEquipos)
    console.info(final[5])
Resultados(final, EstadisticasDeEquipos, final[5]);
}

function GanadoresDeGrupo(selec1, selec2, selec3, selec4, jugadores, paises) {
    var team1 = 0
    var team2 = 0
    var team3 = 0
    var team4 = 0
    var golesteam1 = 0
    var golesteam2 = 0
    var golesteam3 = 0
    var golesteam4 = 0
    var golesrecibidosteam1 = 0
    var golesrecibidosteam2 = 0
    var golesrecibidosteam3 = 0
    var golesrecibidosteam4 = 0
    var faltasteam1 = 0
    var faltasteam2 = 0
    var faltasteam3 = 0
    var faltasteam4 = 0

    var PrimeroSegundoTerceroYCuarto = []
    console.info('fecha1');
    console.info(selec1 + ' vs ' + selec2);

    var equipos = partidos(selec1, selec2, jugadores, paises);
    var equipo1 = equipos[0];
    var equipo2 = equipos[1];
    team1 = team1 + equipo1[0];
    golesteam1 = golesteam1 + equipo1[1];
    faltasteam1 = faltasteam1 + equipo1[2];
    golesrecibidosteam1 = golesrecibidosteam1 + equipo2[1];
    team2 = team2 + equipo2[0];
    golesteam2 = golesteam2 + equipo2[1];
    golesrecibidosteam2 = golesrecibidosteam2 + equipo1[1];
    faltasteam2 = faltasteam2 + equipo2[2];

    console.info(selec3 + ' vs ' + selec4);
    var equipos = partidos(selec3, selec4, jugadores, paises);
    var equipo1 = equipos[0];
    var equipo2 = equipos[1];
    team3 = team3 + equipo1[0];
    golesteam3 = golesteam3 + equipo1[1];
    golesrecibidosteam3 = golesrecibidosteam3 + equipo2[1];
    faltasteam3 = faltasteam3 + equipo1[2];
    team4 = team4 + equipo2[0];
    golesteam4 = golesteam4 + equipo2[1];
    golesrecibidosteam4 = golesrecibidosteam4 + equipo1[1];
    faltasteam4 = faltasteam4 + equipo2[2];

    console.info(' TABLA DE PUNTOS');
    console.info(' ' + selec1 + ' ' + team1);
    console.info(' ' + selec2 + ' ' + team2);
    console.info(' ' + selec3 + ' ' + team3);
    console.info(' ' + selec4 + ' ' + team4);

    console.info('fecha2');
    console.info(selec1 + ' vs ' + selec3);

    var equipos = partidos(selec1, selec3, jugadores, paises);
    var equipo1 = equipos[0];
    var equipo2 = equipos[1];
    team1 = team1 + equipo1[0];
    golesteam1 = golesteam1 + equipo1[1];
    golesrecibidosteam1 = golesrecibidosteam1 + equipo2[1];
    faltasteam1 = faltasteam1 + equipo1[2];
    team3 = team3 + equipo2[0];
    golesteam3 = golesteam3 + equipo2[1];
    golesrecibidosteam3 = golesrecibidosteam3 + equipo1[1];
    faltasteam3 = faltasteam3 + equipo2[2];
    console.info(selec2 + ' vs ' + selec4);

    var equipos = partidos(selec2, selec4, jugadores, paises);
    var equipo1 = equipos[0];
    var equipo2 = equipos[1];
    team2 = team2 + equipo1[0];
    golesteam2 = golesteam2 + equipo1[1];
    golesrecibidosteam2 = golesrecibidosteam2 + equipo2[1];
    faltasteam2 = faltasteam2 + equipo1[2];
    team4 = team4 + equipo2[0];
    golesteam4 = golesteam4 + equipo2[1];
    golesrecibidosteam4 = golesrecibidosteam4 + equipo1[1];
    faltasteam4 = faltasteam4 + equipo2[2];

    console.info(' TABLA DE PUNTOS');
    console.info(' ' + selec1 + ' ' + team1);
    console.info(' ' + selec2 + ' ' + team2);
    console.info(' ' + selec3 + ' ' + team3);
    console.info(' ' + selec4 + ' ' + team4);

    console.info('fecha3');
    console.info(selec1 + ' vs ' + selec4);

    var equipos = partidos(selec1, selec4, jugadores, paises);
    var equipo1 = equipos[0];
    var equipo2 = equipos[1];
    team1 = team1 + equipo1[0];
    golesteam1 = golesteam1 + equipo1[1];
    golesrecibidosteam1 = golesrecibidosteam1 + equipo2[1];
    faltasteam1 = faltasteam1 + equipo1[2];
    team4 = team4 + equipo2[0];
    golesteam4 = golesteam4 + equipo2[1];
    golesrecibidosteam4 = golesrecibidosteam4 + equipo1[1];
    faltasteam4 = faltasteam4 + equipo2[2];
    console.info(selec2 + ' vs ' + selec3);

    var equipos = partidos(selec2, selec3, jugadores, paises);
    var equipo1 = equipos[0];
    var equipo2 = equipos[1];
    team2 = team2 + equipo1[0];
    golesteam2 = golesteam2 + equipo1[1];
    golesrecibidosteam2 = golesrecibidosteam2 + equipo2[1];
    faltasteam2 = faltasteam2 + equipo1[2];
    team3 = team3 + equipo2[0];
    golesteam3 = golesteam3 + equipo2[1];
    golesrecibidosteam3 = golesrecibidosteam3 + equipo1[1];
    faltasteam3 = faltasteam3 + equipo2[2];

    console.info(' TABLA DE PUNTOS');
    console.info(' ' + selec1 + ' ' + team1);
    console.info(' ' + selec2 + ' ' + team2);
    console.info(' ' + selec3 + ' ' + team3);
    console.info(' ' + selec4 + ' ' + team4);

    var ganadores = GanadorDeGrupo(team1, team2, golesteam1, golesteam2, faltasteam1, faltasteam2, selec1, selec2, golesrecibidosteam1, golesrecibidosteam2);
    var ganadores1 = GanadorDeGrupo(team3, team4, golesteam3, golesteam4, faltasteam3, faltasteam4, selec3, selec4, golesrecibidosteam3, golesrecibidosteam4);

    var gan1 = ganadores[0];
    var gan2 = ganadores1[0];
    var per1 = ganadores[1];
    var per2 = ganadores1[1];

    var ganadores3 = GanadorDeGrupo(gan1[0], gan2[0], gan1[2], gan2[2], gan1[3], gan2[3], gan1[1], gan2[1], gan1[4], gan2[4]);
    var gan3 = ganadores3[0];
    var per3 = ganadores3[1];

    var ganadores4 = GanadorDeGrupo(per1[0], per2[0], per1[2], per2[2], per1[3], per2[3], per1[1], per2[1], per1[4], per2[4]);
    var gan4 = ganadores4[0];
    var per4 = ganadores4[1];
    var ganadores5 = GanadorDeGrupo(per3[0], gan4[0], per3[2], gan4[2], per3[3], gan4[3], per3[1], gan4[1], per3[4], gan4[4]);
    var gan5 = ganadores5[0];
    var per5 = ganadores5[1]
    var equipo1 = {}
    equipo1['nombre'] = gan3[1]
    equipo1['goles'] = gan3[2]
    equipo1['golesencontra'] = gan3[4]
    var equipo2 = {}
    equipo2['nombre'] = gan5[1]
    equipo2['goles'] = gan5[2]
    equipo2['golesencontra'] = gan5[4]
    var equipo3 = {}
    equipo3['nombre'] = per5[1]
    equipo3['goles'] = per5[2]
    equipo3['golesencontra'] = per5[4]
    var equipo4 = {}
    equipo4['nombre'] = per4[1]
    equipo4['goles'] = per4[2]
    equipo4['golesencontra'] = per4[4]

    PrimeroSegundoTerceroYCuarto.push(equipo1);
    PrimeroSegundoTerceroYCuarto.push(equipo2);
    PrimeroSegundoTerceroYCuarto.push(equipo3);
    PrimeroSegundoTerceroYCuarto.push(equipo4);
    PrimeroSegundoTerceroYCuarto.push(equipos[2]);
    PrimeroSegundoTerceroYCuarto.push(equipos[3]);

    

    console.info(equipo1);
    console.info(equipo2);
    return PrimeroSegundoTerceroYCuarto
}
function GanadorDeGrupo(team1, team2, goles1, goles2, faltas1, faltas2, selec1, selec2, golesrecibidos1, golesrecibidos2) {
    var perdedor = [];
    var ganador = [];
    var resultado = [];

    if (team1 > team2) {
        ganador.push(team1);
        ganador.push(selec1);
        ganador.push(goles1);
        ganador.push(faltas1);
        ganador.push(golesrecibidos1);
        perdedor.push(team2);
        perdedor.push(selec2);
        perdedor.push(goles2);
        perdedor.push(faltas2);
        perdedor.push(golesrecibidos2);
        resultado.push(ganador);
        resultado.push(perdedor);
        return resultado;
    }
    else if (team2 > team1) {
        ganador.push(team2);
        ganador.push(selec2);
        ganador.push(goles2);
        ganador.push(faltas2);
        ganador.push(golesrecibidos2);
        perdedor.push(team1);
        perdedor.push(selec1);
        perdedor.push(goles1);
        perdedor.push(faltas1);
        perdedor.push(golesrecibidos1);
        resultado.push(ganador);
        resultado.push(perdedor);
        return resultado;
    }
    else if (team1 = team2) {

        if (goles1 > goles2) {
            ganador.push(team1);
            ganador.push(selec1);
            ganador.push(goles1);
            ganador.push(faltas1);
            ganador.push(golesrecibidos1);
            perdedor.push(team2);
            perdedor.push(selec2);
            perdedor.push(goles2);
            perdedor.push(faltas2);
            perdedor.push(golesrecibidos2);
            resultado.push(ganador);
            resultado.push(perdedor);
            return resultado;

        }
        else if (goles1 < goles2) {
            ganador.push(team2);
            ganador.push(selec2);
            ganador.push(goles2);
            ganador.push(faltas2);
            ganador.push(golesrecibidos2);
            perdedor.push(team1);
            perdedor.push(selec1);
            perdedor.push(goles1);
            perdedor.push(faltas1);
            perdedor.push(golesrecibidos1);
            resultado.push(ganador);
            resultado.push(perdedor);
            return resultado;

        }
        else {

            if (faltas1 < faltas2) {
                ganador.push(team1);
                ganador.push(selec1);
                ganador.push(goles1);
                ganador.push(faltas1);
                ganador.push(golesrecibidos1);
                perdedor.push(team2);
                perdedor.push(selec2);
                perdedor.push(goles2);
                perdedor.push(faltas2);
                perdedor.push(golesrecibidos2);

                resultado.push(ganador);
                resultado.push(perdedor);
                return resultado;
            }
            else if (faltas1 > faltas2) {
                ganador.push(team2);
                ganador.push(selec2);
                ganador.push(goles2);
                ganador.push(faltas2);
                ganador.push(golesrecibidos2);
                perdedor.push(team1);
                perdedor.push(selec1);
                perdedor.push(goles1);
                perdedor.push(faltas1);
                perdedor.push(golesrecibidos1);
                resultado.push(ganador);
                resultado.push(perdedor);
                return resultado;

            }
            else {
                ganador.push(team1);
                ganador.push(selec1);
                ganador.push(goles1);
                ganador.push(faltas1);
                ganador.push(golesrecibidos1);
                perdedor.push(team2);
                perdedor.push(selec2);
                perdedor.push(goles2);
                perdedor.push(faltas2);
                perdedor.push(golesrecibidos2);

                resultado.push(ganador);
                resultado.push(perdedor);
                return resultado;
            }
        }

    }

}

function validarNumero(num) {
    if (isNaN(parseInt(num)) === true || parseInt(num) < 0) {
        return false;
    }

    return true;
};
function validarNumeroDeSelecciones(num) {
    if (isNaN(parseInt(num)) === true || parseInt(num) <= 0 || parseInt(num) > 32) {
        return false;
    }

    return true;
};

function validarComienzo(num) {
    if (isNaN(parseInt(num)) === true || parseInt(num) <= 0 || parseInt(num) > 1) {
        return false;
    }

    return true;
};



function OctavosDeFinal(Lista1, Lista2, jugadores, paises) {

    var valores1 = Lista1[0];
    var valores2 = Lista2[1];
    var valores3 = Lista2[0];
    var valores4 = Lista1[1];
    var golesequipo1 = valores1.goles
    var golesequipo2 = valores2.goles
    var golesequipo3 = valores3.goles
    var golesequipo4 = valores4.goles
    var golesEncontra1 = valores1.golesencontra
    var golesEncontra2 = valores2.golesencontra
    var golesEncontra3 = valores3.golesencontra
    var golesEncontra4 = valores4.golesencontra
    var equipo1 = {}
    var equipo2 = {}
    var equipo3 = {}
    var equipo4 = {}
    var equipos = []

    console.info(valores1.nombre + ' ' + 'vs' + ' ' + valores2.nombre);
    var selec1y2 = PartidosFinales(valores1, valores2, golesequipo1, golesequipo2, golesEncontra1, golesEncontra2, jugadores, paises)

    equipo1 = selec1y2[0]
    equipo2 = selec1y2[1]

    console.info(valores4.nombre + ' ' + 'vs' + ' ' + valores3.nombre);
    var selec3y4 = PartidosFinales(valores3, valores4, golesequipo3, golesequipo4, golesEncontra3, golesEncontra4, jugadores, paises)
    equipo3 = selec3y4[0]
    equipo4 = selec3y4[1]

    equipos.push(equipo1)
    equipos.push(equipo3)
    equipos.push(equipo2)
    equipos.push(equipo4)
    equipos.push(paises)
    equipos.push(jugadores)
    
    return equipos
}
function LlavesFinales(Lista1, Lista2, jugadores, paises) {

    var valores1 = Lista1[0]
    var valores2 = Lista1[1]
    var valores3 = Lista2[1]
    var valores4 = Lista2[0]
    var golesequipo1 = valores1.goles
    var golesequipo2 = valores2.goles
    var golesequipo3 = valores3.goles
    var golesequipo4 = valores4.goles
    var golesEncontra1 = valores1.golesencontra
    var golesEncontra2 = valores2.golesencontra
    var golesEncontra3 = valores3.golesencontra
    var golesEncontra4 = valores4.golesencontra
    var equipo1 = {}
    var equipo2 = {}
    var equipo3 = {}
    var equipo4 = {}
    var equipos = []

    console.info(valores1.nombre + ' ' + 'vs' + ' ' + valores4.nombre);
    var selec1y4 = PartidosFinales(valores1, valores4, golesequipo1, golesequipo4, golesEncontra1, golesEncontra4, jugadores, paises)

    equipo1 = selec1y4[0]
    equipo4 = selec1y4[1]
    console.info(valores2.nombre + ' ' + 'vs' + ' ' + valores3.nombre);
    var selec2y3 = PartidosFinales(valores2, valores3, golesequipo2, golesequipo3, golesEncontra2, golesEncontra3, jugadores, paises)

    equipo2 = selec2y3[0]
    equipo3 = selec2y3[1]

    equipos.push(equipo1);
    equipos.push(equipo2);
    equipos.push(equipo3);
    equipos.push(equipo4);
    equipos.push(paises);
    equipos.push(jugadores);
    
    return equipos
}
function Final(finalista, jugadores, paises) {

    valores1 = finalista[0];
    valores2 = finalista[1];
    valores3 = finalista[2];
    valores4 = finalista[3];
    var golesequipo1 = valores1.goles
    var golesequipo2 = valores2.goles
    var golesequipo3 = valores3.goles
    var golesequipo4 = valores4.goles
    var golesEncontra1 = valores1.golesencontra
    var golesEncontra2 = valores2.golesencontra
    var golesEncontra3 = valores3.golesencontra
    var golesEncontra4 = valores4.golesencontra
    var equipo1 = {}
    var equipo2 = {}
    var equipo3 = {}
    var equipo4 = {}
    var equipos = []

    console.info('TERCER Y CUARTO PUESTO')
    console.info(' ');
    console.info(valores3.nombre + ' ' + 'vs' + ' ' + valores4.nombre);
    var selec3y4 = PartidosFinales(valores3, valores4, golesequipo3, golesequipo4, golesEncontra3, golesEncontra4, jugadores, paises)
    console.info(' ');
    equipo3 = selec3y4[0]
    equipo4 = selec3y4[1]
    console.info(' ');
    console.info('FINAL')
    console.info(' ');
    console.info(valores1.nombre + ' ' + 'vs' + ' ' + valores2.nombre);
    var selec1y2 = PartidosFinales(valores1, valores2, golesequipo1, golesequipo2, golesEncontra1, golesEncontra2, jugadores, paises)
    console.info(' ');
    equipo1 = selec1y2[0]
    equipo2 = selec1y2[1]

    equipos.push(equipo1)
    equipos.push(equipo2)
    equipos.push(equipo3)
    equipos.push(equipo4)
    equipos.push(paises)
    equipos.push(jugadores)
    return equipos
}

function crearPais(id, nombre, continente, Federacion, cantidadDeParticipaciones) {
    var nuevoPais = {};
    nuevoPais["id"] = id;
    nuevoPais["nombre"] = nombre;
    nuevoPais["continente"] = continente;
    nuevoPais["Federacion"] = Federacion;
    nuevoPais["cantidadDeParticipaciones"] = cantidadDeParticipaciones;
    return nuevoPais;
}

function crearJugador(id, nombre, edad, pais, altura, posicion) {
    var nuevoJugador = {};
    nuevoJugador["id"] = id;
    nuevoJugador["nombre"] = nombre;
    nuevoJugador["edad"] = edad;
    nuevoJugador["pais"] = pais;
    nuevoJugador["altura"] = altura;
    nuevoJugador["posicion"] = posicion;
    nuevoJugador["goles"] = 0

    return nuevoJugador;
}

function mostrarPaises(listaPaises) {
    listaPaises.forEach(pais => {
        console.info(pais["id"] + " - " + pais["nombre"]);
    });
}


function registro() {

    var retorno = [];
    var paises = [];

    for (i = 1; i <= 32; i++) {
        var nombrePais = read("Ingrese el nombre de la seleccion : ");
        var continentePais = read("Ingrese el continente de la seleccion: ");
        var Federacion = read("Ingrese el federacion de la seleccion: ");
        do {
            var cantidadDeParticipaciones = parseInt(read("Ingrese participaciones de la seleccion: "));
        } while (validarNumero(cantidadDeParticipaciones) === false);
        var nuevoPais = crearPais(i, nombrePais, continentePais, Federacion, cantidadDeParticipaciones);
        paises.push(nuevoPais);
        
        console.clear();
    console.info('Seleccion' + ' '+ i + ' '+ ' de 32 registrada ')
    console.info('  ')
    console.info(' selecciones ya registradas ')
    console.info('  ')
    paises.forEach(pais => {
        console.info(pais.nombre)
    });
    console.info('  ')
}
console.info('  ')
console.info(' Registro De Selecciones finalizada  ')
console.info('  ')
console.info(' Comienza el registro de jugadores  ')
console.info('  ')

var jugadores = [];
    for (i = 1; i <= 64; i++) {
        var nombre = read("Ingrese un nombre del jugador: ");
        do {
            var edad = read("Ingrese edad del jugador : ");
        } while (validarNumero(edad) === false);
        do {
            var altura = read("Ingrese altura del jugador : ");
        } while (validarNumero(altura) === false);

        var posicion = read("Ingrese posicion del jugador : ");

        console.info("Seleccione una seleccion: ");
        mostrarPaises(paises);
        do {
            var pais = parseInt(read(""));
        } while (validarNumeroDeSelecciones(pais) === false);
        var nuevojugador = crearJugador(i, nombre, edad, pais, altura, posicion);
        jugadores.push(nuevojugador);
        console.clear();
        console.info('jugador' + ' '+ i + ' '+ ' de 64 registrado ')
        console.info('  ')
    }
    console.info('  ')
    console.info(' Registro De jugadores finalizada  ')
    console.info('  ')
    console.info(' Procedemos al sorteo de la copa del mundo   ')
    console.info('  ')
    
    retorno.push(paises);
    retorno.push(jugadores);
    return retorno
}
function selecciones(registro) {

    var nombres = [];
    var selecciones = registro[0];

    for (i = 0; i < selecciones.length; i++) {

        nombres.push((selecciones[i].nombre));
    }
    return nombres;
}
function partidos(selec1, selec2, jugadores, paises) {
    var equipo1 = [];
    var equipo2 = [];
    var equipos = [];
    var team1 = 0;
    var team2 = 0;



    do {
        var pais1 = parseInt(read(' goles de ' + selec1 + ' '));
    } while (validarNumero(pais1) === false);
    jugadores = golesdejugadores(pais1, paises, selec1, jugadores)

    do {
        var faltas1 = parseInt(read(' faltas de  ' + selec1 + ' '));
    } while (validarNumero(faltas1) === false);
    do {
        var pais2 = parseInt(read(' goles de ' + selec2 + ' '));
    } while (validarNumero(pais2) === false);
    jugadores = golesdejugadores(pais2, paises, selec2, jugadores)
    do {
        var faltas2 = parseInt(read(' faltas de  ' + selec2 + ' '));
    } while (validarNumero(faltas2) === false);

    if (pais1 > pais2) {
        team1 = team1 + 3;
        equipo1.push(team1);
        equipo1.push(pais1);
        equipo1.push(faltas1);

        team2 = team2 + 0
        equipo2.push(team2);
        equipo2.push(pais2);
        equipo2.push(faltas2);
        equipos.push(equipo1);
        equipos.push(equipo2);
    }

    else if (pais1 < pais2) {
        team2 = team2 + 3;
        equipo2.push(team2);
        equipo2.push(pais2);
        equipo2.push(faltas2);

        team1 = team1 + 0;
        equipo1.push(team1);
        equipo1.push(pais1);
        equipo1.push(faltas1);
        equipos.push(equipo1);
        equipos.push(equipo2);
    }

    else {
        team2 = team2 + 1;
        equipo2.push(team2);
        equipo2.push(pais2);
        equipo2.push(faltas2);

        team1 = team1 + 1;
        equipo1.push(team1);
        equipo1.push(pais1);
        equipo1.push(faltas1);
    }


    equipos.push(equipo1);
    equipos.push(equipo2);
    equipos.push(jugadores)
    equipos.push(paises)

    return equipos;
}
function Resultados(Finalistas, EstadisticasDeEquipos, Jugadores) {

    console.info('el campeon del mundo es ' + ':' + Finalistas[0].nombre)
    console.info('el segundo es ' + ':' + Finalistas[1].nombre)
    console.info('el tercero es ' + ':' + Finalistas[2].nombre)
    console.info('el cuarto es ' + ':' + Finalistas[3].nombre)
    var GolesEnContra = SeleccionConMasGolesRecibidos(EstadisticasDeEquipos)
    var Goles = SeleccionConMasGoles(EstadisticasDeEquipos)
    var golesaFavor = SeleccionConMasGolesAfavor(EstadisticasDeEquipos)
    var goleador = GoleadorDelCampeonato(Jugadores)

    console.info('la seleccion con mas goles realizados es ' + ' : ' + Goles.nombre + ' ' + 'con' + ' ' + Goles.goles + ' ' + 'goles')
    console.info('la seleccion con mas goles en contra es ' + ' : ' + GolesEnContra.nombre + ' ' + 'con' + ' ' + GolesEnContra.golesencontra + ' ' + 'goles')
    console.info('la seleccion con mas goles a favor es ' + ' : ' + golesaFavor[0] + ' ' + 'con' + ' ' + golesaFavor[1] + ' ' + 'goles')
    console.info('el goleador del cameponato es  ' + ' : ' + goleador.nombre + ' ' + 'con' + ' ' + goleador.goles + ' ' + 'goles')
}
function SeleccionConMasGoles(estadisticas) {
    var mayorCantidadDeGoles = 0
    var mayorIndice;

    for (i = 0; i < estadisticas.length; i++) {
        if (estadisticas[i].goles > mayorCantidadDeGoles) {
            mayorCantidadDeGoles = estadisticas[i].goles;
            mayorIndice = estadisticas[i]
        }
    }
    return mayorIndice;
}

function SeleccionConMasGolesRecibidos(estadisticas) {
    var mayorCantidadDeGoles = 0
    var mayorIndice;

    for (i = 0; i < estadisticas.length; i++) {
        if (estadisticas[i].golesencontra > mayorCantidadDeGoles) {
            mayorCantidadDeGoles = estadisticas[i].golesencontra;
            mayorIndice = estadisticas[i]
        }
    }

    return mayorIndice;
}
function SeleccionConMasGolesAfavor(estadisticas) {
    var GolesAfavor = 0
    var mayorIndice;
    var datos = []
    for (i = 0; i < estadisticas.length; i++) {

        var diferenciaDeGoles = estadisticas[i].goles - estadisticas[i].golesencontra
        if (diferenciaDeGoles > GolesAfavor) {
            GolesAfavor = diferenciaDeGoles
            mayorIndice = estadisticas[i].nombre
        }
    }
    datos.push(mayorIndice)
    datos.push(GolesAfavor)
    return datos
}

function GoleadorDelCampeonato(Jugadores) {
    var mayorCantidadDeGoles = 0
    var mayorIndice;

    for (i = 0; i < Jugadores.length; i++) {
        if (Jugadores[i].goles > mayorCantidadDeGoles) {
            mayorCantidadDeGoles = Jugadores[i].goles;
            mayorIndice = Jugadores[i]
        }
    }
    return mayorIndice;
}






function golesdejugadores(goles, paises, selec1, jugadores) {

    for (i = 1; i <= goles; i++) {

        for (e = 0; e < paises.length; e++) {

            if (paises[e].nombre === selec1) {

                jugadores.forEach(jug => {

                    if (paises[e].id === jug.pais) {
                        console.info(jug.id + ' ' + jug.nombre)
                    }
                });
                do {
                    var NombreDelJugador = parseInt(read("ingrese el numero relacionado al Jugador "));
                } while (validarNumero(NombreDelJugador) === false);

                jugadores.forEach(juga => {
                    if (NombreDelJugador === juga.id) {

                        juga.goles = juga.goles + 1


                    }

                });


         }   
        }



    }

    return jugadores
}

function sorteo(Grupo, r, NombreDeSelecciones, posicionesElegibles) {

    for (i = 0; i < 4; i++) {
        r = Math.floor(Math.random() * posicionesElegibles.length);
        Grupo.push(NombreDeSelecciones[posicionesElegibles[r]]);
        posicionesElegibles.splice(r, 1);
    }
    return Grupo
}

function PartidosFinales(valores1, valores2, golesequipo1, golesequipo2, golesEncontra1, golesEncontra2, jugadores, paises) {
    var equipo1 = {}
    var equipo2 = {}
    var equipos = []


    do {
        var golesteam1 = parseInt(read(' goles de ' + valores1.nombre + ' '));
    } while (validarNumero(golesteam1) === false);
    jugadores = golesdejugadores(golesteam1, paises, valores1.nombre, jugadores)
    do {
        var golesteam2 = parseInt(read(' goles de ' + valores2.nombre + ' '));
    } while (validarNumero(golesteam2) === false);
    jugadores = golesdejugadores(golesteam2, paises, valores2.nombre, jugadores)

    golesequipo1 = golesequipo1 + golesteam1
    golesequipo2 = golesequipo2 + golesteam2
    golesEncontra1 = golesEncontra1 + golesteam2
    golesEncontra2 = golesEncontra2 + golesteam1

    if (golesteam1 > golesteam2) {

        equipo1['nombre'] = valores1.nombre
        equipo1['goles'] = golesequipo1
        equipo1['golesencontra'] = golesEncontra1
        equipo2['nombre'] = valores2.nombre
        equipo2['goles'] = golesequipo2
        equipo2['golesencontra'] = golesEncontra2

    }
    else if (golesteam1 < golesteam2) {

        equipo1['nombre'] = valores2.nombre
        equipo1['goles'] = golesequipo2
        equipo1['golesencontra'] = golesEncontra2
        equipo2['nombre'] = valores1.nombre
        equipo2['goles'] = golesequipo1
        equipo2['golesencontra'] = golesEncontra1

    }
    else {
        do {
            do {
                var penalesteam1 = parseInt(read(' penales de ' + valores1.nombre + ' '));
            } while (validarNumero(penalesteam1) === false);
            do {
                var penalesteam2 = parseInt(read('penales de ' + valores2.nombre + ' '));
            } while (validarNumero(penalesteam2) === false);
        } while ((penalesteam1 == penalesteam2));

        if (penalesteam1 > penalesteam2) {
            equipo1['nombre'] = valores1.nombre
            equipo1['goles'] = golesequipo1
            equipo1['golesencontra'] = golesEncontra1
            equipo2['nombre'] = valores2.nombre
            equipo2['goles'] = golesequipo2
            equipo2['golesencontra'] = golesEncontra2
        }
        else if (penalesteam1 < penalesteam2) {

            equipo1['nombre'] = valores2.nombre
            equipo1['goles'] = golesequipo2
            equipo1['golesencontra'] = golesEncontra2
            equipo2['nombre'] = valores1.nombre
            equipo2['goles'] = golesequipo1
            equipo2['golesencontra'] = golesEncontra1

        }

    }
    equipos.push(equipo1)
    equipos.push(equipo2)
    equipos.push(paises)
    equipos.push(jugadores)


    return equipos
}


main();