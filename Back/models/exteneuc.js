// Modelo (ejemplo simplificado)
function extendedEuclidean(a, b, l) {
    let message;
    ed = b*l;

    switch (true) {
        case a === 4 && b === 3:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que:

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos "x" e "y" tal que:
            
            4(x) + 3(y) = 1
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 4 y 3:
            
            Despejamos el resto la última ecuación no trivial del algoritmo de Euclides:
            4 = 3(1) + 1
            
            Ahora tenemos:
            
            1 = 4 − 3(1)
            
            Esto ya es la forma que queremos, ya que hemos expresado 1 como una combinación lineal de 4 y 3. A partir de aquí, podemos satisfacer la ecuación de Bézout:
            
            4(1) + 3(−1) = 1
            
            x = 1 e y = −1`;

            y = '-1';

            break;
        case a === 6 && b ===5:
           message= `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que: 

            a(x) + b(y) = MCD(a,b)

            En este caso, buscamos "x" e "y" tal que: 

            6(x) + 5(y) = 1

            Deshacemos los pasos para expresar 1 como una combinación lineal de 6 y 5:

            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 6 = 5(1) + 1 

            Ahora tenemos:

            1 = 6 − 5(1)

            Esto ya es la forma que queremos, ya que hemos expresado 1 como una combinación lineal de 6 y 5. A partir de aquí, podemos satisfacer la ecuación de Bézout:

            6(1) + 5(−1) = 1

            x = 1 e y = −1`;

            y = '-1';
            break;
        case a === 10 && b ===3:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que: 

            a(x) + b(y) = MCD(a,b)

            En este caso, buscamos "x" e "y" tal que: 

            10(x) + 3(y) = 1

            Deshacemos los pasos para expresar 1 como una combinación lineal de 10 y 3:

            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 10 = 3(3) + 1 

            Ahora tenemos:

            1 = 10 − 3(3)

            Esto ya es la forma que queremos, ya que hemos expresado 1 como una combinación lineal de 10 y 3. A partir de aquí, podemos satisfacer la ecuación de Bézout:

            10(1) + 3(−3) = 1

            x = 1 e y = −3`;

            y = '-3';

            break;
        case a===10 && b===7:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que: 

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos "x" e "y" tal que: 
            
            10(x) + 7(y) = 1
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 10 y 7:
            
            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 7 = 3(2) + 1
            
            Ahora tenemos:
            
            1 = 7 − 3(2)
            
            Despejamos el resto de la primera ecuación del algoritmo de Euclides: 10 = 7(1) + 3:
            
            Ahora tenemos:
            
            3 = 10 − 7(1)
            
            Sustituimos el 3 en: 1 = 7 − 3(2) por: 10 − 7
            
            1 = 7 − 2(10 − 7)
            
            Distribuimos:
            
            1 = 7 − 2(10) + 2(7)
            
            Agrupamos los términos semejantes para simplificar la expresión:
            
            1 = 3(7) − 2(10)
            
            Así que hemos encontrado que:
            
            1 = 3(7) − 2(10)
            
            Esto significa que los coeficientes x = -2 e y = 3 son los que satisfacen la ecuación de Bézout:
            
            10(-2) + 7(3) = 1`;
            
            y = '3';            
            break;
        case a===10 && b === 9:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que: 

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos "x" e "y" tal que: 
            
            10(x) + 9(y) = 1
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 10 y 9:
            
            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 10 = 9(1) + 1
            
            Ahora tenemos:
            
            1 = 10 − 9(1)
            
            Esto ya es la forma que queremos, ya que hemos expresado 1 como una combinación lineal de 10 y 9. A partir de aquí, podemos satisfacer la ecuación de Bézout:
            
            10(1) + 9(−1) = 1
            
            x = 1 e y = −1`;
            
            y = '-1';            
            break;
        case a=== 8 && b ===3:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que: 

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos "x" e "y" tal que: 
            
            8(x) + 3(y) = 1
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 8 y 3:
            
            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 3 = 2(1) + 1
            
            Ahora tenemos:
            
            1 = 3 − 2(1)
            
            Despejamos el resto de la primera ecuación del algoritmo de Euclides: 8 = 3(2) + 2:
            
            Ahora tenemos:
            
            2 = 8 − 3(2)
            
            Sustituimos el 2 en: 1 = 3 − 2(1) por: 8 − 3(2)
            
            1 = 3 − 1(8 − 3(2))
            
            Distribuimos:
            
            1 = 3 − 1(8) + 3(2)
            
            Agrupamos los términos semejantes para simplificar la expresión:
            
            1 = 3(3) − 1(8)
            
            Así que hemos encontrado que:
            
            1 = 3(3) − 1(8)
            
            Esto significa que los coeficientes x = -1 e y = 3 son los que satisfacen la ecuación de Bézout:
            
            8(−1) + 3(3) = 1`;
            
            y = '3'; 
            break;
        case a=== 8 && b ===5:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que:

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos "x" e "y" tal que:
            
            8(x) + 5(y) = 1
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 8 y 5:
            
            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 3 = 2(1) + 1
            
            Ahora tenemos:
            
            1 = 3 − 2(1)
            
            Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 5 = 3(1) + 2:
            
            Ahora tenemos:
            
            2 = 5 − 3(1)
            
            Sustituimos el 2 en: 1 = 3 − 2(1) por: 5 − 3
            
            1 = 3 − 1(5 − 3)
            
            Distribuimos:
            
            1 = 3 − 1(5) + 3(1)
            
            Agrupamos los términos semejantes para simplificar la expresión:
            
            1 = 3(2) − 1(5)
            
            Despejamos el resto de la primera ecuación del algoritmo de Euclides: 8 = 5(1) + 3:
            
            Ahora tenemos:
            
            3 = 8 − 5(1)
            
            Sustituimos el 3 en: 1 = 3(2) − 1(5) por: 8 − 5
            
            1 = 2(8 − 5) − 1(5)
            
            1 = 2(8) − 2(5) − 1(5)
            
            1 = 2(8) − 3(5)
            
            Así que hemos encontrado que:
            
            1 = 2(8) − 3(5)
            
            Esto significa que los coeficientes x = 2 e y = -3 son los que satisfacen la ecuación de Bézout:
            
            8(2) + 5(-3) = 1`;
            
            y = '-3';            
            break;
        case a=== 8 && b ===7:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que:

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos "x" e "y" tal que:
            
            8(x) + 7(y) = 1
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 8 y 7:
            
            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 8 = 7(1) + 1
            
            Ahora tenemos:
            
            1 = 8 − 7(1)
            
            Esto ya es la forma que queremos, ya que hemos expresado 1 como una combinación lineal de 8 y 7. A partir de aquí, podemos satisfacer la ecuación de Bézout:
            
            8(1) + 7(−1) = 1
            
            x = 1 e y = −1`;
            
            y = '-1';            
            break;
        case a=== 12 && b ===5:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que:

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos "x" e ""y" tal que:
            
            12(x) + 5(y) = 1
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 12 y 5:
            
            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 5 = 2(2) + 1
            
            Ahora tenemos:
            
            1 = 5 − 2(2)
            
            Despejamos el resto de la primera ecuación del algoritmo de Euclides: 12 = 5(2) + 2:
            
            Ahora tenemos:
            
            2 = 12 − 5(2)
            
            Sustituimos el 2 en: 1 = 5 − 2(2) por: 12 − 2(5)
            
            1 = 5 − 2(12 − 2(5))
            
            Distribuimos:
            
            1 = 5 − 2(12) + 4(5)
            
            Agrupamos los términos semejantes para simplificar la expresión:
            
            1 = 5(5) − 2(12)
            
            Así que hemos encontrado que:
            
            1 = 5(5) − 2(12)
            
            Esto significa que los coeficientes x = -2 e y = 5 son los que satisfacen la ecuación de Bézout:
            
            12(-2) + 5(5) = 1`;
            
            y = '5';            
            break;
        case a=== 12 && b ===7:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que: 
            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos "x" e "y" tal que: 
            12(x) + 7(y) = 1
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 12 y 7:
            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 5 = 2(2) + 1 
            
            Ahora tenemos:
            1 = 5 − 2(2)
            
            Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 7 = 5(1) + 2:
            Ahora tenemos:
            2 = 7 − 5(1)
            
            Sustituimos el 2 en: 1 = 5 − 2(2) por: 7 − 5
            1 = 5 − 2(7 − 5)
            
            Distribuimos:
            1 = 5 − 2(7) + 2(5)
            
            Agrupamos los términos semejantes para simplificar la expresión:
            1 = 3(5) − 2(7)
            
            Despejamos el resto de la primera ecuación del algoritmo de Euclides: 12 = 7(1) + 5:
            Ahora tenemos:
            5 = 12 − 7(5)
            
            Sustituimos el 5 en: 1 = 3(5) − 2(7) por: 12 − 7(5)
            1 = 5(12 − 7(1)) - 2(7)
            1 = 3(12) - 3(7) - 2(7)
            1 = 3(12) - 5(7)
            
            Así que hemos encontrado que:
            1 = 3(12) − 5(7)
            
            Esto significa que los coeficientes x = 3 e y = -5 son los que satisfacen la ecuación de Bézout:
            12(3) + 7(-5) = 1`;
            
            y = `-5`;            
            break;
        case a=== 12 && b ===11:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que: 
            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos "x" e "y" tal que: 
            12(x) + 11(y) = 1
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 12 y 11:
            Despejamos el resto de la primera ecuación del algoritmo de Euclides: 12 = 11(1) + 1:
            
            Ahora tenemos:
            1 = 12 − 11(1)
            
            Esto ya es la forma que queremos, ya que hemos expresado 1 como una combinación lineal de 12 y 11. A partir de aquí, podemos satisfacer la ecuación de Bézout:
            12(1) + 11(−1) = 1`;
            
            y = `-1`;            
            break;
        case a=== 20 && b ===3:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que: 
            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos "x" e "y" tal que: 
            20(x) + 3(y) = 1
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 20 y 3:
            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 3 = 2(1) + 1 
            
            Ahora tenemos:
            1 = 3 − 2(1)
            
            Despejamos el resto de la primera ecuación del algoritmo de Euclides: 20 = 3(6) + 2:
            Ahora tenemos:
            2 = 20 − 3(6)
            
            Sustituimos el 2 en: 1 = 3 − 2(1) por: 20 − 6(3)
            1 = 3 − 1(20 − 6(3))
            
            Distribuimos:
            1 = 3 − 1(20) + 6(3)
            
            Agrupamos los términos semejantes para simplificar la expresión:
            1 = 7(3) − 1(20)
            
            Así que hemos encontrado que:
            1 = 7(3) − 1(20)
            
            Esto significa que los coeficientes x = -1 e y = 7 son los que satisfacen la ecuación de Bézout:
            20(-1) + 3(7) = 1`;
            
            y = `7`;            
            break;
        case a=== 20 && b ===7:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que: 
            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos "x" e "y" tal que: 
            20(x) + 7(y) = 1
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 20 y 7:
            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 7 = 6(1) + 1 
            
            Ahora tenemos:
            1 = 7 − 6(1)
            
            Despejamos el resto de la primera ecuación del algoritmo de Euclides: 20 = 7(2) + 6:
            Ahora tenemos:
            6 = 20 − 7(2)
            
            Sustituimos el 6 en: 1 = 7 − 6(1) por: 20 − 2(7)
            1 = 7 − 1(20 − 2(7))
            
            Distribuimos:
            1 = 7 − 1(20) + 2(7)
            
            Agrupamos los términos semejantes para simplificar la expresión:
            1 = 3(7) − 1(20)
            
            Así que hemos encontrado que:
            1 = 3(7) − 1(20)
            
            Esto significa que los coeficientes x = -1 e y = 3 son los que satisfacen la ecuación de Bézout:
            20(-1) + 7(3) = 1`;
            
            y = `3`;            
            break;
        case a=== 20 && b ===9:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que: 
            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos "x" e "y" tal que: 
            20(x) + 9(y) = 1
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 20 y 9:
            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 9 = 2(4) + 1 
            
            Ahora tenemos:
            1 = 9 − 2(4)
            
            Despejamos el resto de la primera ecuación del algoritmo de Euclides: 20 = 9(2) + 2:
            Ahora tenemos:
            2 = 20 − 9(2)
            
            Sustituimos el 2 en: 1 = 9 − 2(4) por: 20 − 2(9)
            1 = 9 − 4(20 − 2(9))
            
            Distribuimos:
            1 = 9 − 4(20) + 8(9)
            
            Agrupamos los términos semejantes para simplificar la expresión:
            1 = 9(9) − 4(20)
            
            Así que hemos encontrado que:
            1 = 9(9) − 4(20)
            
            Esto significa que los coeficientes x = -4 e y = 9 son los que satisfacen la ecuación de Bézout:
            20(-4) + 9(9) = 1`;
            
            y = `9`;            
            break;
        case a=== 20 && b ===11:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que: 
            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos "x" e "y" tal que: 
            20(x) + 11(y) = 1
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 20 y 11:
            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 9 = 2(4) + 1
            
            Ahora tenemos:
            1 = 9 − 2(4)
            
            Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 11 = 9(1) + 2:
            Ahora tenemos:
            2 = 11 − 9(1)
            
            Sustituimos el 2 en: 1 = 9 − 2(4) por: 11 − 9
            1 = 9 − 4(11 − 9)
            
            Distribuimos:
            1 = 9 − 4(11) + 4(9)
            
            Agrupamos los términos semejantes para simplificar la expresión:
            1 = 5(9) − 4(11)
            
            Despejamos el resto de la primera ecuación del algoritmo de Euclides: 20 = 11(1) + 9:
            Ahora tenemos:
            9 = 20 − 11(1)
            
            Sustituimos el 9 en: 1 = 5(9) − 4(11) por: 20 − 11
            1 = 5(20 − 11) - 4(11)
            
            1 = 5(20) - 5(11) - 4(11)
            
            1 = 5(20) - 9(11)
            
            Así que hemos encontrado que:
            1 = 5(20) − 9(11)
            
            Esto significa que los coeficientes x = 5 e y = -9 son los que satisfacen la ecuación de Bézout:
            20(5) + 11(-9) = 1`;
            
            y = `5`;            
            break;
        case a=== 20 && b ===13:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que: 

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos "x" e "y" tal que: 
            
            20(x) + 13(y) = 1
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 20 y 13:
            
            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 7 = 6(1) + 1
            
            Ahora tenemos:
            
            1 = 7 − 6(1)
            
            Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 13 = 7(1) + 6:
            
            Ahora tenemos:
            
            6 = 13 − 7(1)
            
            Sustituimos el 6 en: 1 = 7 − 6(1) por: 13 − 7
            
            1 = 7 − 1(13 − 7)
            
            Distribuimos:
            
            1 = 7 − 1(13) + 1(7)
            
            Agrupamos los términos semejantes para simplificar la expresión:
            
            1 = 2(7) − 1(13)
            
            Despejamos el resto de la primera ecuación del algoritmo de Euclides: 20 = 13(1) + 7:
            
            Ahora tenemos:
            
            7 = 20 − 13(1)
            
            Sustituimos el 7 en: 1 = 2(7) − 1(13) por: 20 − 13
            
            1 = 2(20 − 13) - 1(13)
            
            1 = 2(20) - 2(13) - 1(13)
            
            1 = 2(20) - 3(13)
            
            Así que hemos encontrado que:
            
            1 = 2(20) − 3(13)
            
            Esto significa que los coeficientes x = 2 e y = -3 son los que satisfacen la ecuación de Bézout:
            
            20(2) + 13(-3) = 1`;
            
            y = `-3`;            
            break;
        case a=== 20 && b ===17:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que: 

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos "x" e "y" tal que: 
            
            20(x) + 17(y) = 1
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 20 y 17:
            
            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 3 = 2(1) + 1
            
            Ahora tenemos:
            
            1 = 3 − 2(1)
            
            Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 17 = 3(5) + 2:
            
            Ahora tenemos:
            
            2 = 17 − 3(5)
            
            Sustituimos el 2 en: 1 = 3 − 2(1) por: 17 − 5(3)
            
            1 = 3 − 1(17 − 5(3))
            
            Distribuimos:
            
            1 = 3 − 1(17) + 5(3)
            
            Agrupamos los términos semejantes para simplificar la expresión:
            
            1 = 6(3) − 1(17)
            
            Despejamos el resto de la primera ecuación del algoritmo de Euclides: 20 = 17(1) + 3:
            
            Ahora tenemos:
            
            3 = 20 − 17(1)
            
            Sustituimos el 3 en: 1 = 6(3) − 1(17) por: 20 − 17
            
            1 = 6(20 − 17) - 1(17)
            
            1 = 6(20) - 6(17) - 1(17)
            
            1 = 6(20) - 7(17)
            
            Así que hemos encontrado que:
            
            1 = 6(20) − 7(17)
            
            Esto significa que los coeficientes x = 6 e y = -7 son los que satisfacen la ecuación de Bézout:
            
            20(6) + 17(-7) = 1`;
            
            y = `-7`;            
            break;
        case a=== 20 && b ===19:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que: 

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos "x" e "y" tal que: 
            
            20(x) + 19(y) = 1
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 20 y 19:
            
            Despejamos el resto la última ecuación no trivial del algoritmo de Euclides: 20 = 19(1) + 1
            
            Ahora tenemos:
            
            1 = 20 − 19(1)
            
            Esto ya es la forma que queremos, ya que hemos expresado 1 como una combinación lineal de 20 y 19. A partir de aquí, podemos satisfacer la ecuación de Bézout:
            
            20(1) + 19(−1) = 1
            
            x = 1 e y = −1`;
            
            y = `−1`;            
            break;
        case a=== 24 && b ===5:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que: 

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos "x" e "y" tal que: 
            
            24(x) + 5(y) = 1
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 24 y 5:
            
            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 5 = 4(1) + 1 
            
            Ahora tenemos:
            
            1 = 5 − 4(1)
            
            Despejamos el resto de la primera ecuación del algoritmo de Euclides: 24 = 5(4) + 4:
            
            Ahora tenemos:
            
            4 = 24 − 5(4)
            
            Sustituimos el 4 en: 1 = 5 − 4(1) por: 24 − 4(5)
            
            1 = 5 − 1(24 − 4(5))
            
            Distribuimos:
            
            1 = 5 − 1(24) + 4(5)
            
            Agrupamos los términos semejantes para simplificar la expresión:
            
            1 = 5(5) − 1(24)
            
            Así que hemos encontrado que:
            
            1 = 5(5) − 1(24)
            
            Esto significa que los coeficientes x = -1 e y = 5 son los que satisfacen la ecuación de Bézout:
            
            24(-1) + 5(5) = 1`;
            
            y = `5`;            
            break;
        case a=== 24 && b ===7:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que: 

            a(x) + b(y) = MCD(a,b)

            En este caso, buscamos "x" e "y" tal que: 

            24(x) + 7(y) = 1

            Deshacemos los pasos para expresar 1 como una combinación lineal de 24 y 7:

            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 7 = 3(2) + 1 

            Ahora tenemos:

            1 = 7 − 3(2)

            Despejamos el resto de la primera ecuación del algoritmo de Euclides: 24 = 7(3) + 3:

            Ahora tenemos:

            3 = 24 − 7(3)


            Sustituimos el 3 en: 1 = 7 − 3(2) por: 24 − 3(7)

            1 = 7 − 2(24 − 3(7))

            Distribuimos:

            1 = 7 − 2(24) + 6(7)

            Agrupamos los términos semejantes para simplificar la expresión:

            1 = 7(7) − 2(24)


            Así que hemos encontrado que:

            1 = 7(7) − 2(24)

            Esto significa que los coeficientes x = -2 e y = 7 son los que satisfacen la ecuación de Bézout:

            24(-2) + 7(7) = 1`;

            y =`7`;

            break;
        case a=== 24 && b ===11:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que: 

                a(x) + b(y) = MCD(a,b)

                En este caso, buscamos "x" e "y" tal que: 

                24(x) + 11(y) = 1

                Deshacemos los pasos para expresar 1 como una combinación lineal de 24 y 11:

                Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 11 = 2(5) + 1 

                Ahora tenemos:

                1 = 11 − 2(5)

                Despejamos el resto de la primera ecuación del algoritmo de Euclides: 24 = 11(2) + 2:

                Ahora tenemos:

                2 = 24 − 11(2)


                Sustituimos el 2 en: 1 = 11 − 2(5) por: 24 − 2(11)

                1 = 11 − 5(24 − 2(11))

                Distribuimos:

                1 = 11 − 5(24) + 10(11)

                Agrupamos los términos semejantes para simplificar la expresión:

                1 = 11(11) − 5(24)


                Así que hemos encontrado que:

                1 = 11(11) − 5(24)

                Esto significa que los coeficientes x = -5 e y = 11 son los que satisfacen la ecuación de Bézout:

                24(-5) + 11(11) = 1`;

            y=`11`;
            break;
        case a=== 24 && b ===13:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que: 

            a(x) + b(y) = MCD(a,b)

            En este caso, buscamos "x" e "y" tal que: 

            24(x) + 13(y) = 1

            Deshacemos los pasos para expresar 1 como una combinación lineal de 24 y 13:

            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 11 = 2(5) + 1

            Ahora tenemos:

            1 = 11 − 2(5)

            Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 13 = 11(1) + 2:

            Ahora tenemos:

            2 = 13 − 11(1)

            Sustituimos el 2 en: 1 = 11 − 2(5) por: 13 − 11

            1 = 11 − 5(13 − 11)

            Distribuimos:

            1 = 11 − 5(13) + 5(11)

            Agrupamos los términos semejantes para simplificar la expresión:

            1 = 6(11) − 5(13)

            Despejamos el resto de la primera ecuación del algoritmo de Euclides: 24 = 13(1) + 11:

            Ahora tenemos:

            11 = 24 − 13(1)

            Sustituimos el 11 en: 1 = 6(11) − 5(13) por: 24 − 13

            1 = 6(24 − 13) - 5(13)
            1 = 6(24) - 6(13) - 5(13)
            1 = 6(24) - 11(13)

            Así que hemos encontrado que:

            1 = 6(24) − 11(13)

            Esto significa que los coeficientes x = 6 e y = -11 son los que satisfacen la ecuación de Bézout:

            24(6) + 13(-11) = 1`;

            y=`-11`;
            break;
        case a=== 24 && b ===17:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos "x" e "y" tal que:  
            
            24(x) + 17(y) = 1 
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 24 y 17: 
            
            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 7 = 3(2) + 1 
            
            Ahora tenemos: 
            
            1 = 7 − 3(2) 
            
            Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 17 = 7(2) + 3: 
            
            Ahora tenemos: 
            
            3 = 17 − 7(2) 
            
            Sustituimos el 3 en: 1 = 7 − 3(2) por: 17 − 2(7) 
            
            1 = 7 − 2(17 − 2(7)) 
            
            Distribuimos: 
            
            1 = 7 − 2(17) + 4(7) 
            
            Agrupamos los términos semejantes para simplificar la expresión: 
            
            1 = 5(7) − 2(17) 
            
            Despejamos el resto de la primera ecuación del algoritmo de Euclides: 24 = 17(1) + 7: 
            
            Ahora tenemos: 
            
            7 = 24 − 17(1) 
            
            
            Sustituimos el 11 en: 1 = 5(7) − 2(17) por: 24 − 17 
            
            1 = 5(24 − 17) - 2(17) 
            1 = 5(24) - 5(17) - 2(17) 
            1 = 5(24) - 7(17) 
            
            
            Así que hemos encontrado que: 
            
            1 = 5(24) − 7(17) 
            
            Esto significa que los coeficientes x = 5 e y = -7 son los que satisfacen la ecuación de Bézout: 
            
            24(5) + 17(-7) = 1 `;

            y=`-7`;
            break;
        case a=== 24 && b ===19:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos "x" e "y" tal que:  
            
            24(x) + 19(y) = 1 
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 24 y 19: 
            
            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 5 = 4(1) + 1 
            
            Ahora tenemos: 
            
            1 = 5 − 4(1) 
            
            Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 19 = 5(3) + 4: 
            
            Ahora tenemos: 
            
            4 = 19 − 5(3) 
            
            Sustituimos el 4 en: 1 = 5 − 4(1) por: 19 − 3(5) 
            
            1 = 5 − 1(19 − 3(5)) 
            
            Distribuimos: 
            
            1 = 5 − 1(19) + 3(5) 
            
            Agrupamos los términos semejantes para simplificar la expresión: 
            
            1 = 4(5) − 1(19) 
            
            Despejamos el resto de la primera ecuación del algoritmo de Euclides: 24 = 19(1) + 5: 
            
            Ahora tenemos: 
            
            5 = 24 − 19(1) 
            
            
            Sustituimos el 5 en: 1 = 4(5) − 1(19) por: 24 − 19 
            
            1 = 4(24 − 19) - 1(19) 
            1 = 4(24) - 4(19) - 1(19) 
            1 = 4(24) - 5(19) 
            
            
            Así que hemos encontrado que: 
            
            1 = 4(24) − 5(19) 
            
            Esto significa que los coeficientes x = 4 e y = -5 son los que satisfacen la ecuación de Bézout: 
            
            24(4) + 19(-5) = 1`;

            y=`-5`;
            break;
        case a=== 24 && b ===23:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes "x" e "y" tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos "x" e "y" tal que:  
            
            24(x) + 23(y) = 1 
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 24 y 23: 
            
            Despejamos el resto la última ecuación no trivial del algoritmo de Euclides: 24 = 23(1) + 1 
            
            Ahora tenemos: 
            
            1 = 24 − 23(1) 
            
            Esto ya es la forma que queremos, ya que hemos expresado 1 como una combinación lineal de 24 y 23. A partir de aquí, podemos satisfacer la ecuación de Bézout: 
            
            24(1) + 23(−1) = 1 
            
            x = 1 e y = −1`;

            y=`-1`;
            break;
        case a=== 40 && b ===3:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
            40(x) + 3(y) = 1 
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 40 y 3: 
            
            Despejamos el resto la última ecuación no trivial del algoritmo de Euclides: 40 = 3(13) + 1 
            
            Ahora tenemos: 
            
            1 = 40 − 3(13) 
            
            Esto ya es la forma que queremos, ya que hemos expresado 1 como una combinación lineal de 40 y 3. A partir de aquí, podemos satisfacer la ecuación de Bézout: 
            
            40(1) + 3(−13) = 1 
            
            x = 1 e y = −13 `;

            y=`-13`;
            break;
        case a=== 40 && b ===7:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
            40(x) + 7(y) = 1 
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 40 y 7: 
            
            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 5 = 2(2) + 1 
            
            Ahora tenemos: 
            
            1 = 5 − 2(2) 
            
            Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 7 = 5(1) + 2: 
            
            Ahora tenemos: 
            
            2 = 7 − 5(1) 
            
            Sustituimos el 2 en: 1 = 5 − 2(2) por: 7 − 5 
            
            1 = 5 − 2(7 − 5) 
            
            Distribuimos: 
            
            1 = 5 − 2(7) + 2(5) 
            
            Agrupamos los términos semejantes para simplificar la expresión: 
            
            1 = 3(5) − 2(7) 
            
            Despejamos el resto de la primera ecuación del algoritmo de Euclides: 40 = 7(5) + 5: 
            
            Ahora tenemos: 
            
            5 = 40 − 7(5) 
            
            
            Sustituimos el 5 en: 1 = 3(5) − 2(7) por: 40 − 5(7) 
            
            1 = 3(40 − 5(7)) - 2(7) 
            1 = 3(40) - 15(7) - 2(7) 
            1 = 3(40) - 17(7) 
            
            
            Así que hemos encontrado que: 
            
            1 = 3(40) − 17(7) 
            
            Esto significa que los coeficientes x = 3 e y = -17 son los que satisfacen la ecuación de Bézout: 
            
            40(3) + 7(-17) = 1`;

            y=`-17`;
            break;

        case a=== 40 && b ===9:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
            40(x) + 9(y) = 1 
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 40 y 9: 
            
            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 9 = 4(2) + 1  
            
            Ahora tenemos: 
            
            1 = 9 − 4(2) 
            
            Despejamos el resto de la primera ecuación del algoritmo de Euclides: 40 = 9(4) + 4: 
            
            Ahora tenemos: 
            
            4 = 40 − 9(4) 
            
            
            Sustituimos el 4 en: 1 = 9 − 4(2) por: 40 − 4(9) 
            
            1 = 9 − 2(40 − 4(9)) 
            
            Distribuimos: 
            
            1 = 9 − 2(40) + 8(9) 
            
            Agrupamos los términos semejantes para simplificar la expresión: 
            
            1 = 9(9) − 2(40) 
            
            
            Así que hemos encontrado que: 
            
            1 = 9(9) − 2(40) 
            
            Esto significa que los coeficientes x = -2 e y = 9 son los que satisfacen la ecuación de Bézout: 
            
            40(-2) + 9(9) = 1`;

            y=`9`;
            break;
        case a=== 40 && b ===11:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
           40(x) + 11(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 40 y 11: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 4 = 3(1) + 1 
            
           Ahora tenemos: 
            
           1 = 4 − 3(1) 
            
           Despejamos el resto de la tercera ecuación del algoritmo de Euclides: 7 = 4(1) + 3: 
            
           Ahora tenemos: 
            
           3 = 7 − 4(1) 
            
           Sustituimos el 3 en: 1 = 4 − 3(1) por: 7 − 4 
            
           1 = 4 − 1(7 − 4) 
            
           Distribuimos: 
            
           1 = 4 − 1(7) + 1(4) 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 2(4) − 1(7) 
            
           Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 11 = 7(1) + 4: 
            
           Ahora tenemos: 
            
           4 = 11 − 7(1) 
            
            
           Sustituimos el 4 en: 1 = 2(4) − 1(7) por: 11− 7 
            
           1 = 2(11 − 7)) - 1(7) 
           1 = 2(11) - 2(7) - 1(7) 
           1 = 2(11) - 3(7) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 40 = 11(3) + 7: 
            
           Ahora tenemos: 
            
           7 = 40 − 11(3) 
            
            
           Sustituimos el 7 en: 1 = 2(11) − 3(7) por: 40− 3(11) 
            
           1 = 2(11) - 3(40 – 3(11)) 
           1 = 2(11) - 3(40) - 9(11) 
           1 = 11(11) - 3(40) 
            
            
           Así que hemos encontrado que: 
            
           1 = 11(11) − 3(40) 
            
           Esto significa que los coeficientes x = -3 e y = 11 son los que satisfacen la ecuación de Bézout: 
            
           40(-3) + 11(11) = 1`; 
           
             
           
            y=`11`; 
            break;

        case a=== 40 && b ===13:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
           40(x) + 13(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 40 y 13: 
            
           Despejamos el resto la última ecuación no trivial del algoritmo de Euclides: 40 = 13(3) + 1 
            
           Ahora tenemos: 
            
           1 = 40 − 13(3) 
            
           Esto ya es la forma que queremos, ya que hemos expresado 1 como una combinación lineal de 40 y 13. A partir de aquí, podemos satisfacer la ecuación de Bézout: 
            
           40(1) + 13(−3) = 1 
            
           x = 1 e y = −3`; 
           
             
           
            y =`−3`; 
            break;
        
        case a=== 40 && b ===17:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
            40(x) + 17(y) = 1 
            
            Deshacemos los pasos para expresar 1 como una combinación lineal de 40 y 17: 
            
            Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 6 = 5(1) + 1 
            
            Ahora tenemos: 
            
            1 = 6 − 5(1) 
            
            Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 17 = 6(2) + 5: 
            
            Ahora tenemos: 
            
            5 = 17 − 6(2) 
            
            Sustituimos el 5 en: 1 = 6 − 5(1) por: 17 − 2(6) 
            
            1 = 6 − 1(17 − 2(6)) 
            
            Distribuimos: 
            
            1 = 6 − 1(17) + 2(6) 
            
            Agrupamos los términos semejantes para simplificar la expresión: 
            
            1 = 3(6) − 1(17) 
            
            Despejamos el resto de la primera ecuación del algoritmo de Euclides: 40 = 17(2) + 6: 
            
            Ahora tenemos: 
            
            6 = 40 − 17(2) 
            
            
            Sustituimos el 6 en: 1 = 3(6) − 1(17) por: 40 − 2(17) 
            
            1 = 3(40 − 2(17)) - 1(17) 
            1 = 3(40) - 6(17) - 1(17) 
            1 = 3(40) - 7(17) 
            
            
            Así que hemos encontrado que: 
            
            1 = 3(40) − 7(17) 
            
            Esto significa que los coeficientes x = 3 e y = -7 son los que satisfacen la ecuación de Bézout: 
            
            40(3) + 17(-7) = 1`; 

            y=`-7`; 
            break;


        case a=== 40 && b ===19:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
            40(x) + 19(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 40 y 19: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 19 = 2(9) + 1  
            
           Ahora tenemos: 
            
           1 = 19 − 2(9) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 40 = 19(2) + 2: 
            
           Ahora tenemos: 
            
           2 = 40 − 19(2) 
            
            
           Sustituimos el 2 en: 1 = 19 − 2(9) por: 40 − 2(19) 
            
           1 = 19 − 9(40 − 2(19)) 
            
           Distribuimos: 
            
           1 = 19 − 9(40) + 18(19) 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 19(19) − 9(40) 
            
            
           Así que hemos encontrado que: 
            
           1 = 19(9) − 9(40) 
            
           Esto significa que los coeficientes x = -9 e y = 19 son los que satisfacen la ecuación de Bézout: 
            
           40(-9) + 19(19) = 1`; 
           
             
           
            y=`19`; 
            break;


        case a=== 40 && b ===21:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
           40(x) + 17(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 40 y 17: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 6 = 5(1) + 1 
            
           Ahora tenemos: 
            
           1 = 6 − 5(1) 
            
           Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 17 = 6(2) + 5: 
            
           Ahora tenemos: 
            
           5 = 17 − 6(2) 
            
           Sustituimos el 5 en: 1 = 6 − 5(1) por: 17 − 2(6) 
            
           1 = 6 − 1(17 − 2(6)) 
            
           Distribuimos: 
            
           1 = 6 − 1(17) + 2(6) 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 3(6) − 1(17) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 40 = 17(2) + 6: 
            
           Ahora tenemos: 
            
           6 = 40 − 17(2) 
            
            
           Sustituimos el 6 en: 1 = 3(6) − 1(17) por: 40 − 2(17) 
            
           1 = 3(40 − 2(17)) - 1(17) 
           1 = 3(40) - 6(17) - 1(17) 
           1 = 3(40) - 7(17) 
            
            
           Así que hemos encontrado que: 
            
           1 = 3(40) − 7(17) 
            
           Esto significa que los coeficientes x = 3 e y = -7 son los que satisfacen la ecuación de Bézout: 
            
           40(3) + 17(-7) = 1`; 
           
             
           
            y=`-7`; 
            break;


        case a=== 40 && b ===23:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
           40(x) + 23(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 40 y 23: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 6 = 5(1) + 1 
            
           Ahora tenemos: 
            
           1 = 6 − 5(1) 
            
           Despejamos el resto de la tercera ecuación del algoritmo de Euclides: 17 = 6(2) + 5: 
            
           Ahora tenemos: 
            
           5 = 17 − 6(2) 
            
           Sustituimos el 5 en: 1 = 6 − 5(1) por: 17 − 2(6) 
            
           1 = 6 − 1(17 − 2(6)) 
            
           Distribuimos: 
            
           1 = 6 − 1(17) + 2(6) 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 3(6) − 1(17) 
            
           Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 23 = 17(1) + 6: 
            
           Ahora tenemos: 
            
           6 = 23 − 17(1) 
            
            
           Sustituimos el 6 en: 1 = 3(6) − 1(17) por: 23− 17 
            
           1 = 3(23 − 17)) - 1(17) 
           1 = 3(23) - 3(17) - 1(17) 
           1 = 3(23) - 4(17) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 40 = 23(1) + 17: 
            
           Ahora tenemos: 
            
           17 = 40 − 23(1) 
            
            
           Sustituimos el 17 en: 1 = 3(23) − 4(17) por: 40− 23 
            
           1 = 3(23) - 4(40 – 23) 
           1 = 3(23) - 4(40) + 4(23) 
           1 = 7(23) - 4(40) 
            
            
           Así que hemos encontrado que: 
            
           1 = 7(23) − 4(40) 
            
           Esto significa que los coeficientes x = -4 e y = 7 son los que satisfacen la ecuación de Bézout: 
            
           40(-4) + 23(7) = 1`; 
           
             
           
            y=`7`; 
            break;

        case a=== 40 && b ===27:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
            40(x) + 27(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 40 y 27: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 27 = 13(2) + 1 
            
           Ahora tenemos: 
            
           1 = 27 − 13(2) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 40 = 27(1) + 13: 
            
           Ahora tenemos: 
            
           13 = 40 − 27(1)  
            
           Sustituimos el 13 en: 1 = 27 − 13(2) por: 40 − 1(27) 
            
           1 = 27 − 2(40 − 1(27) 
            
           Distribuimos: 
            
           1 = 27 − 2(40) + 2(27) 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 3(27) − 2(40) 
            
            
           Así que hemos encontrado que: 
            
           1 = 3(27) − 2(40) 
            
           Esto significa que los coeficientes x = -2 e y = 3 son los que satisfacen la ecuación de Bézout: 
            
           40(-2) + 27(3) = 1`; 
           
             
           
            y=`3`; 
            break;

        case a=== 40 && b ===29:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
           40(x) + 29(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 40 y 29: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 4 = 3(1) + 1 
            
           Ahora tenemos: 
            
           1 = 4 − 3(1) 
            
           Despejamos el resto de la cuarta ecuación del algoritmo de Euclides: 7 = 4(1) + 3: 
            
           Ahora tenemos: 
            
           3 = 7 − 4(1) 
            
           Sustituimos el 3 en: 1 = 4 − 3(1) por: 7 − 4 
            
           1 = 4 − 1(7 − 4) 
            
           Distribuimos: 
            
           1 = 4 − 1(7) + 4 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 2(4) − 1(7) 
            
           Despejamos el resto de la tercera ecuación del algoritmo de Euclides: 11 = 7(1) + 4: 
            
           Ahora tenemos: 
            
           4 = 11 − 7(1) 
            
            
           Sustituimos el 4 en: 1 = 2(4) − 1(7) por: 11− 1(7) 
            
           1 = 2(11 − 1(7)) - 1(7) 
           1 = 2(11) - 2(7) - 1(7) 
           1 = 2(11) - 3(7) 
            
           Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 29 = 11(2) + 7: 
            
           Ahora tenemos: 
            
           7 = 29 − 11(2) 
            
            
           Sustituimos el 7 en: 1 = 2(11) − 3(7) por: 29 − 2(11) 
            
           1 = 2(11) - 3(29 – 2(11)) 
           1 = 2(11) - 3(29) + 6(11) 
           1 = 8(11) - 3(29) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 40 = 29(1) + 11: 
            
           Ahora tenemos: 
            
           11 = 40 − 29(1) 
            
            
           Sustituimos el 11 en: 1 = 8(11) − 3(29) por:40 − 1(29) 
            
           1 = 8(40 – 1(29)) - 3(29) 
           1 = 8(40) + 8(29) - 3(29) 
           1 = 8(40) - 11(29) 
            
            
           Así que hemos encontrado que: 
            
           1 = 8(40) − 11(29) 
            
           Esto significa que los coeficientes x = 8 e y = -11 son los que satisfacen la ecuación de Bézout: 
            
           40(8) + 29(-11) = 1`; 
           
             
           
            y=`-11`; 
            break;

        case a=== 40 && b ===31:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
           40(x) + 31(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 40 y 31: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 9 = 4(2) + 1  
            
           Ahora tenemos: 
            
           1 = 9 − 4(2) 
            
           Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 31 = 9(3) + 4: 
            
           Ahora tenemos: 
            
            4 = 31 − 9(3) 
            
           Sustituimos el 4 en: 1 = 9 − 4(2) por:  31 − 3(9)  
            
           1 = 9 − 2(31 − 3(9)) 
            
           Distribuimos: 
            
           1 = 9 − 2(31) + 6(9) 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 7(9) − 2(31) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 40 = 31(1) + 9: 
            
           Ahora tenemos: 
            
           9 = 40 − 31(1) 
            
            
           Sustituimos el 9 en: 1 = 7(9) − 2(31) por: 40 − 1(31) 
            
           1 = 7(40 − 1(31)) - 2(31) 
           1 = 7(40) + 7(31) - 2(31) 
           1 = 7(40) - 9(31) 
            
            
           Así que hemos encontrado que: 
            
           1 = 7(40) − 9(31) 
            
           Esto significa que los coeficientes x = 7 e y = -9 son los que satisfacen la ecuación de Bézout: 
            
           40(7) + 31(-9) = 1`; 
           
             
           
            y=`-9`; 
            break;

        case a=== 40 && b ===33:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
           40(x) + 33(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 40 y 33: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 5 = 2(2) + 1 
            
           Ahora tenemos: 
            
           1 = 5 − 2(2) 
            
           Despejamos el resto de la tercera ecuación del algoritmo de Euclides: 7 = 5(1) + 2: 
            
           Ahora tenemos: 
            
           2 = 7 − 5(1) 
            
           Sustituimos el 2 en: 1 = 5 − 2(2) por: 7 − 1(5) 
            
           1 = 5 − 2(7 − 1(5)) 
            
           Distribuimos: 
            
           1 = 5 − 2(7) + 2(5) 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 3(5) − 2(7) 
            
           Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 33 = 7(4) + 5: 
            
           Ahora tenemos: 
            
           5 = 33 − 7(4) 
            
            
           Sustituimos el 5 en: 1 = 3(5) − 2(7) por: 33− 4(7) 
            
           1 = 3(33 − 4(7)) - 2(7) 
           1 = 3(33) - 12(7) - 2(7) 
           1 = 3(33) - 14(7) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 40 = 33(1) + 7: 
            
           Ahora tenemos: 
            
           7 = 40 − 33(1) 
            
            
           Sustituimos el 7 en: 1 = 3(33) − 14(7) por: 40− 1(33) 
            
           1 = 3(33) - 14(40 – 1(33)) 
           1 = 3(33) - 14(40) + 14(33) 
           1 = 17(33) - 14(40) 
            
            
           Así que hemos encontrado que: 
            
           1 = 17(33) − 14(40) 
            
           Esto significa que los coeficientes x = -14 e y = 17 son los que satisfacen la ecuación de Bézout: 
            
           40(-14) + 33(17) = 1`; 
           
             
           
            y=`17`; 
            break;

        case a=== 40 && b ===37:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
            40(x) + 37(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 40 y 37: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 37 = 3(12) + 1 
            
           Ahora tenemos: 
            
           1 = 37 − 3(12) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 40 = 37(1) + 3: 
            
           Ahora tenemos: 
            
           3 = 40 − 37(1)  
            
           Sustituimos el 3 en: 1 = 37 − 3(12) por: 40 − 1(37) 
            
           1 = 37 − 12(40 − 1(37)) 
            
           Distribuimos: 
            
           1 = 37 − 12(40) + 12(37) 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 13(37) − 12(40) 
            
            
           Así que hemos encontrado que: 
            
           1 = 13(37) − 12(40) 
            
           Esto significa que los coeficientes x = -12 e y = 13 son los que satisfacen la ecuación de Bézout: 
            
           40(-12) + 37(13) = 1`; 
           
             
           
            y=`13`; 
            break;

        case a=== 40 && b ===39:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
            40(x) + 39(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 40 y 39: 
            
           Despejamos el resto la última ecuación no trivial del algoritmo de Euclides: 40 = 39(1) + 1 
            
           Ahora tenemos: 
            
           1 = 40 − 39(1) 
            
           Esto ya es la forma que queremos, ya que hemos expresado 1 como una combinación lineal de 40 y 39. A partir de aquí, podemos satisfacer la ecuación de Bézout: 
            
           40(1) + 39(−1) = 1 
            
           x = 1 e y = −1`; 
           
             
           
            y=`-1`; 
            break;

        case a=== 60 && b ===7:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
           60(x) + 7(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 60 y 7: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 4 = 3(1) + 1  
            
           Ahora tenemos: 
            
           1 = 4 − 3(1) 
            
           Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 7 = 4(1) + 3: 
            
           Ahora tenemos: 
            
            3 = 7 − 4(1) 
            
           Sustituimos el 3 en: 1 = 4 − 3(1) por:  7 − 1(4)  
            
           1 = 4 − 1(7 − 1(4)) 
            
            Distribuimos: 
            
           1 = 4 − 1(7) + 4 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 2(4) − 1(7) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 60 = 7(8) + 4: 
            
           Ahora tenemos: 
            
           4 = 60 − 7(8) 
            
            
           Sustituimos el 4 en: 1 = 2(4) − 1(7) por: 60 − 8(7) 
            
           1 = 2(60 − 8(7)) - 1(7) 
           1 = 2(60) - 16(7) - 1(7) 
           1 = 2(60) - 17(7) 
            
            
           Así que hemos encontrado que: 
            
           1 = 2(60) − 17(7) 
            
           Esto significa que los coeficientes x = 2 e y = -17 son los que satisfacen la ecuación de Bézout: 
            
           60(2) + 7(-17) = 1`; 
           
             
           
            y=`-17`; 
            break;

        case a=== 60 && b ===11:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
            60(x) + 11(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 60 y 11: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 11 = 5(2) + 1 
            
           Ahora tenemos: 
            
           1 = 11 − 5(2) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 60 = 11(5) + 5: 
            
           Ahora tenemos: 
            
           5 = 60 − 11(5)  
            
           Sustituimos el 5 en: 1 = 11 − 5(2) por: 60 − 5(11) 
            
           1 = 11 − 2(60 − 5(11)) 
            
           Distribuimos: 
            
           1 = 11 − 2(60) + 10(11) 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 11(11) − 2(60) 
            
            
           Así que hemos encontrado que: 
            
           1 = 11(11) − 2(60) 
            
           Esto significa que los coeficientes x = -2 e y = 11 son los que satisfacen la ecuación de Bézout: 
            
           60(-2) + 11(11) = 1`; 
           
             
           
            y=`11`; 
            break;

        case a=== 60 && b ===13:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
           60(x) + 13(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 60 y 13: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 3 = 2(1) + 1 
            
           Ahora tenemos: 
            
           1 = 3 − 2(1) 
            
           Despejamos el resto de la cuarta ecuación del algoritmo de Euclides: 5 = 3(1) + 2: 
            
           Ahora tenemos: 
            
           2 = 5 − 3(1) 
            
           Sustituimos el 2 en: 1 = 3 − 2(1) por: 5 − 1(3) 
            
           1 = 3 − 1(5 − 1(3)) 
            
           Distribuimos: 
            
           1 = 3 − 1(5) + 3 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 2(3) − 1(5) 
            
           Despejamos el resto de la tercera ecuación del algoritmo de Euclides: 8 = 5(1) + 3: 
            
           Ahora tenemos: 
            
           3 = 8 − 5(1) 
            
            
           Sustituimos el 3 en: 1 = 2(3) − 1(5) por: 8− 1(5) 
            
           1 = 2(8 − 1(5)) - 1(5) 
           1 = 2(8) - 2(5) - 1(5) 
           1 = 2(8) - 3(5) 
            
           Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 13 = 8(1) + 5: 
            
           Ahora tenemos: 
            
           5 = 13 − 8(1) 
            
            
           Sustituimos el 5 en: 1 = 2(8) − 3(5) por: 13 − 1(8) 
            
           1 = 2(8) - 3(13 – 1(8)) 
           1 = 2(8) - 3(13) + 3(8) 
           1 = 5(8) - 3(13) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 60 = 13(4) + 8: 
            
           Ahora tenemos: 
            
           8 = 60 − 13(4) 
            
            
           Sustituimos el 8 en: 1 = 5(8) − 3(13) por: 60 − 4(13) 
            
           1 =5(60 – 4(13)) - 3(13) 
           1 = 5(60) - 20(13) - 3(13) 
           1 = 5(60) - 23(13) 
            
            
           Así que hemos encontrado que: 
            
           1 = 5(60) − 23(13) 
            
           Esto significa que los coeficientes x = 5 e y = -23 son los que satisfacen la ecuación de Bézout: 
            
           60(5) + 13(-23) = 1`; 
           
             
           
            y=`-23`;
        break;

        case a=== 60 && b ===17:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
           60(x) + 17(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 60 y 17: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 9 = 8(1) + 1  
            
           Ahora tenemos: 
            
           1 = 9 − 8(1) 
            
           Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 17 = 9(1) + 8: 
            
           Ahora tenemos: 
            
            8 = 17 − 9(1) 
            
           Sustituimos el 8 en: 1 = 9 − 8(1) por:  17 − 9  
            
           1 = 9 − 1(17 − 9) 
            
           Distribuimos: 
            
           1 = 9 − 1(17) + 9 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 2(9) − 1(17) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 60 = 17(3) + 9: 
            
           Ahora tenemos: 
            
           9 = 60 − 17(3) 
            
            
           Sustituimos el 9 en: 1 = 2(9) − 1(17) por: 60 − 3(17) 
            
           1 = 2(60 − 3(17)) - 1(17) 
           1 = 2(60) - 6(17) - 1(17) 
           1 = 2(60) - 7(17) 
            
            
           Así que hemos encontrado que: 
            
           1 = 2(60) − 7(17) 
            
           Esto significa que los coeficientes x = 2 e y = -7 son los que satisfacen la ecuación de Bézout: 
            
           60(2) + 17(-7) = 1`; 
           
             
           
            y=`-7`; 
            break;

        case a=== 60 && b ===19:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
            60(x) + 19(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 60 y 19: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 19 = 3(6) + 1 
            
           Ahora tenemos: 
            
           1 = 19 − 3(6) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 60 = 19(3) + 3: 
            
           Ahora tenemos: 
            
           3 = 60 − 19(3)  
            
           Sustituimos el 3 en: 1 = 19 − 3(6) por: 60 − 3(19) 
            
           1 = 19 − 6(60 − 3(19)) 
            
           Distribuimos: 
            
           1 = 19 − 6(60) + 18(19) 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 19(19) − 6(60) 
            
            
           Así que hemos encontrado que: 
            
           1 = 19(19) − 6(60) 
            
           Esto significa que los coeficientes x = -6 e y = 19 son los que satisfacen la ecuación de Bézout: 
            
           60(-6) + 19(19) = 1`; 
           
             
           
            y=`19`; 
            break;

        case a=== 60 && b ===23:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
           60(x) + 23(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 60 y 23: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 5 = 4(1) + 1 
            
           Ahora tenemos: 
            
           1 = 5 − 4(1) 
            
           Despejamos el resto de la cuarta ecuación del algoritmo de Euclides: 9 = 5(1) + 4: 
            
           Ahora tenemos: 
            
           4 = 9 − 5(1) 
            
           Sustituimos el 4 en: 1 = 5 − 4(1) por: 9 − 5 
            
           1 = 5 − 1(9 − 5) 
            
           Distribuimos: 
            
           1 = 5 − 1(9) + 5 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 2(5) − 1(9) 
            
           Despejamos el resto de la tercera ecuación del algoritmo de Euclides: 14 = 9(1) + 5: 
            
           Ahora tenemos: 
            
           5 = 14 − 9(1) 
            
            
           Sustituimos el 5 en: 1 = 2(5) − 1(9) por: 14− 1(9) 
            
           1 = 2(14 − 1(9)) - 1(9) 
           1 = 2(14) - 2(9) - 1(9) 
           1 = 2(14) - 3(9) 
            
           Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 23 = 14(1) + 9: 
            
           Ahora tenemos: 
            
           9 = 23 − 14(1) 
            
            
           Sustituimos el 9 en: 1 = 2(14) − 3(9) por: 23 − 1(14) 
            
           1 = 2(14) - 3(23 – 1(14)) 
           1 = 2(14) - 3(23) + 3(14) 
           1 = 5(14) - 3(23) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 60 = 23(2) + 14: 
            
           Ahora tenemos: 
            
           14 = 60 − 23(2) 
            
            
           Sustituimos el 14 en: 1 = 5(14) − 3(23) por: 60 − 2(23) 
            
           1 = 5(60 – 2(23)) - 3(23) 
           1 = 5(60) - 10(23) - 3(23) 
           1 = 5(60) - 13(23) 
            
            
           Así que hemos encontrado que: 
            
           1 = 5(60) − 13(23) 
            
           Esto significa que los coeficientes x = 5 e y = -13 son los que satisfacen la ecuación de Bézout: 
            
           60(5) + 23(-13) = 1`; 
           
             
           
            y=`-13`; 
            break;

        case a=== 60 && b ===29:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
            60(x) + 29(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 60 y 29: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 29 = 2(14) + 1 
            
           Ahora tenemos: 
            
           1 = 29 − 2(14) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 60 = 29(2) + 2: 
            
           Ahora tenemos: 
            
           2 = 60 − 29(2)  
            
           Sustituimos el 2 en: 1 = 29 − 2(14) por: 60 − 2(29) 
            
           1 = 29 − 14(60 − 2(29)) 
            
           Distribuimos: 
            
           1 = 29 − 14(60) + 28(29) 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 29(29) − 14(60) 
            
            
           Así que hemos encontrado que: 
            
           1 = 29(29) − 14(60) 
            
           Esto significa que los coeficientes x = -14 e y = 29 son los que satisfacen la ecuación de Bézout: 
            
           60(-14) + 29(29) = 1`; 
           
             
           
            y=`29`;
            break;

        case a=== 60 && b ===31:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
           60(x) + 31(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 60 y 31: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 29 = 2(14) + 1  
            
           Ahora tenemos: 
            
           1 = 29 − 2(14) 
            
           Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 31 = 29(1) + 2: 
            
           Ahora tenemos: 
            
            2 = 31 − 29(1) 
            
           Sustituimos el 2 en: 1 = 29 − 2(14) por:  31 − 1(29)  
            
           1 = 29 − 14(31 − 1(29)) 
            
           Distribuimos: 
            
           1 = 29 − 14(31) + 14(29) 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 15(29) − 14(31) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 60 = 31(1) + 29: 
            
           Ahora tenemos: 
            
           29 = 60 − 31(1) 
            
            
           Sustituimos el 29 en: 1 = 15(29) − 14(31) por: 60 − 1(31) 
            
           1 = 15(60 − 1(31)) - 14(31) 
           1 = 15(60) + 15(31) - 14(31) 
           1 = 15(60) - 29(31) 
            
            
           Así que hemos encontrado que: 
            
           1 = 15(60) − 29(31) 
            
           Esto significa que los coeficientes x = 15 e y = -29 son los que satisfacen la ecuación de Bézout: 
            
           60(15) + 31(-29) = 1`; 
           
             
           
            y=`-29`; 
            break;

        case a=== 60 && b ===37:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
           60(x) + 37(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 60 y 37: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 5 = 4(1) + 1 
            
           Ahora tenemos: 
            
           1 = 5 − 4(1) 
            
           Despejamos el resto de la quinta ecuación del algoritmo de Euclides: 9 = 5(1) + 4: 
            
           Ahora tenemos: 
            
           4 = 9 − 5(1) 
            
           Sustituimos el 4 en: 1 = 5 − 1(4) por: 9 − 5 
            
           1 = 5 − 1(9 − 5) 
            
           Distribuimos: 
            
           1 = 5 − 1(9) + 5 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 2(5) − 1(9) 
            
           Despejamos el resto de la cuarta ecuación del algoritmo de Euclides: 14 = 9(1) + 5: 
            
           Ahora tenemos: 
            
           5 = 14 − 9(1) 
            
            
           Sustituimos el 5 en: 1 = 2(5) − 1(9) por: 14− 1(9) 
            
           1 = 2(14 − 1(9)) - 1(9) 
           1 = 2(14) - 2(9) - 1(9) 
           1 = 2(14) - 3(9) 
            
           Despejamos el resto de la tercera ecuación del algoritmo de Euclides: 23 = 14(1) + 9: 
            
           Ahora tenemos: 
            
           9 = 23 − 14(1) 
            
            
           Sustituimos el 9 en: 1 = 2(14) − 3(9) por: 23 − 1(14) 
            
           1 = 2(14) - 3(23 – 1(14)) 
           1 = 2(14) - 3(23) + 3(14) 
           1 = 5(14) - 3(23) 
            
           Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 37 = 23(1) + 14: 
            
           Ahora tenemos: 
            
           14 = 37 − 23(1) 
            
            
           Sustituimos el 14 en: 1 = 5(14) − 3(23) por: 37 − 1(23) 
            
           1 = 5(37 – 1(23)) - 3(23) 
           1 = 5(37) - 5(23) - 3(23) 
           1 = 5(37) - 8(23) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 60 = 37(1) + 23: 
            
           Ahora tenemos: 
            
           23 = 60 − 37(1) 
            
            
           Sustituimos el 23 en: 1 = 5(37) − 8(23) por: 60 − 1(37) 
            
           1 = 5(37) - 8(60 – 1(37)) 
           1 = 5(37) - 8(60) + 8(37) 
           1 = 13(37) - 8(60) 
            
            
           Así que hemos encontrado que: 
            
           1 = 13(37) − 8(60) 
            
           Esto significa que los coeficientes x = -8 e y = 13 son los que satisfacen la ecuación de Bézout: 
            
           60(-8) + 37(13) = 1`; 
           
             
           
            y=`13`; 
            break;

        case a=== 60 && b ===41:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
           8(x) + 5(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 60 y 41: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 19 = 3(6) + 1  
            
           Ahora tenemos: 
            
           1 = 19 − 3(6) 
            
           Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 41 = 19(2) + 3: 
            
           Ahora tenemos: 
            
           3 = 41 − 19(2) 
            
           Sustituimos el 3 en: 1 = 19 − 3(6) por:  41 − 2(19)  
            
           1 = 19 − 6(41 − 2(19)) 
            
           Distribuimos: 
            
           1 = 19 − 6(41) + 12(19) 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 13(19) − 6(41) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 60 = 41(1) + 19: 
            
           Ahora tenemos: 
            
           19 = 60 − 41(1) 
            
            
           Sustituimos el 19 en: 1 = 13(19) − 6(41) por: 60 − 1(41) 
            
           1 = 13(60 − 1(41)) - 6(41) 
           1 = 13(60) - 13(41) - 6(41) 
           1 = 13(60) - 19(41) 
            
            
           Así que hemos encontrado que: 
            
           1 = 13(60) − 19(41) 
            
           Esto significa que los coeficientes x = 13 e y = -19 son los que satisfacen la ecuación de Bézout: 
            
           60(13) + 41(-19) = 1`; 
           
             
           
            y=`-19`; 
            break;

        case a=== 60 && b ===43:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
           40(x) + 11(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 60 y 43: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 9 = 8(1) + 1 
            
           Ahora tenemos: 
            
           1 = 9 − 8(1) 
            
           Despejamos el resto de la tercera ecuación del algoritmo de Euclides: 17 = 9(1) + 8: 
            
           Ahora tenemos: 
            
           8 = 17 − 9(1) 
            
           Sustituimos el 8 en: 1 = 9 − 8(1) por: 17 − 9 
            
           1 = 9 − 1(17 − 9) 
            
           Distribuimos: 
            
           1 = 9 − 1(17) + 9 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 2(9) − 1(17) 
            
           Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 43 = 17(2) + 9: 
            
           Ahora tenemos: 
            
           9 = 43 − 17(2) 
            
            
           Sustituimos el 9 en: 1 = 2(9) − 1(17) por: 43− 2(17) 
            
           1 = 2(43 − 2(17)) - 1(17) 
           1 = 2(43) - 4(17) - 1(17) 
           1 = 2(43) - 5(17) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 60 = 43(1) + 17: 
            
           Ahora tenemos: 
            
           17 = 60 − 43(1) 
            
            
           Sustituimos el 17 en: 1 = 2(43) − 5(17) por: 60− 1(43) 
            
           1 = 2(43) - 5(60 – 1(43)) 
           1 = 2(43) - 5(60) + 5(43) 
           1 = 7(43) - 5(60) 
            
            
           Así que hemos encontrado que: 
            
           1 = 7(43) − 5(60) 
            
           Esto significa que los coeficientes x = -5 e y = 7 son los que satisfacen la ecuación de Bézout: 
            
           60(-5) + 43(7) = 1`; 
           
             
           
            y=`7`; 
            break;

        case a=== 60 && b ===47:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
           60(x) + 47(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 60 y 47: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 3 = 2(1) + 1 
            
           Ahora tenemos: 
            
           1 = 3 − 2(1) 
            
           Despejamos el resto de la quinta ecuación del algoritmo de Euclides: 5 = 3(1) + 2: 
            
           Ahora tenemos: 
            
           2 = 5 − 3(1) 
            
           Sustituimos el 2 en: 1 = 3 − 2(1) por: 5 − 3 
            
           1 = 3 − 1(5 − 1(3)) 
            
           Distribuimos: 
            
           1 = 3 − 1(5) + 3 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 2(3) − 1(5) 
            
           Despejamos el resto de la cuarta ecuación del algoritmo de Euclides: 8 = 5(1) + 3: 
            
           Ahora tenemos: 
            
           3 = 8 − 5(1) 
            
            
           Sustituimos el 3 en: 1 = 2(3) − 1(5) por: 8− 1(5) 
            
           1 = 2(8 − 1(5)) - 1(5) 
           1 = 2(8) - 2(5) - 1(5) 
           1 = 2(8) - 3(5) 
            
           Despejamos el resto de la tercera ecuación del algoritmo de Euclides: 13 = 8(1) + 5: 
            
           Ahora tenemos: 
            
           5 = 13 − 8(1) 
            
            
           Sustituimos el 5 en: 1 = 2(8) − 3(5) por: 13 − 1(8) 
            
           1 = 2(8) - 3(13 – 1(8)) 
           1 = 2(8) - 3(13) + 3(8) 
           1 = 5(8) - 3(13) 
            
           Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 47 = 13(3) + 8: 
            
           Ahora tenemos: 
            
           8 = 47 − 13(3) 
            
            
           Sustituimos el 8 en: 1 = 5(8) − 3(13) por: 47 − 3(13) 
            
           1 = 5(47 – 3(13)) - 3(13) 
           1 = 5(47) - 15(13) + 3(13) 
           1 = 5(47) - 18(13) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 60 = 47(1) + 13: 
            
           Ahora tenemos: 
            
           13 = 60 − 47(1) 
            
            
           Sustituimos el 13 en: 1 = 5(47) − 18(13) por: 60 − 1(47) 
            
           1 = 5(47) - 18(60 – 1(47)) 
           1 = 5(47) - 18(60) + 18(47) 
           1 = 23(47) - 18(60) 
            
            
           Así que hemos encontrado que: 
            
           1 = 23(47) − 18(60) 
            
           Esto significa que los coeficientes x = -18 e y = 23 son los que satisfacen la ecuación de Bézout: 
            
           60(-18) + 47(23) = 1`; 
            
             
           
            y=`23`; 
            break;

        case a=== 60 && b ===49:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
           60(x) + 49(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 60 y 49: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 11 = 5(2) + 1  
            
           Ahora tenemos: 
            
           1 = 11 − 5(2) 
            
           Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 49 = 11(4) + 5: 
            
           Ahora tenemos: 
            
            5 = 49 − 11(4) 
            
           Sustituimos el 5 en: 1 = 11 − 5(2) por:  49 − 4(11)  
            
           1 = 11 − 2(49 − 4(11)) 
            
           Distribuimos: 
            
           1 = 11 − 2(49) + 8(11) 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 9(11) − 2(49) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 60 = 49(1) + 11: 
            
           Ahora tenemos: 
            
           11 = 60 − 49(1) 
            
            
           Sustituimos el 11 en: 1 = 9(11) − 2(49) por: 60 − 1(49) 
            
           1 = 9(60 − 1(49)) - 2(49) 
           1 = 9(60) - 9(49) - 2(49) 
           1 = 9(60) - 11(49) 
            
            
           Así que hemos encontrado que: 
            
           1 = 9(60) − 11(49) 
            
           Esto significa que los coeficientes x = 9 e y = -11 son los que satisfacen la ecuación de Bézout: 
            
           60(9) + 49(-11) = 1`; 
            
           
             
           
            y=`-11`; 
            break;

        case a=== 60 && b ===53:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
           60(x) + 53(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 60 y 53: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 4 = (1) + 1 
            
           Ahora tenemos: 
            
           1 = 4 − 3(1) 
            
           Despejamos el resto de la tercera ecuación del algoritmo de Euclides: 7 = 4(1) + 3: 
            
           Ahora tenemos: 
            
           3 = 7 − 4(1) 
            
           Sustituimos el 3 en: 1 = 4 − 3(1) por: 7 − 4 
            
           1 = 4 − 1(7 − 4) 
            
           Distribuimos: 
            
           1 = 4 − 1(7) + 1(4) 
            
           Agrupamos los términos semejantes para simplificar la expresión: 
            
           1 = 2(4) − 1(7) 
            
           Despejamos el resto de la segunda ecuación del algoritmo de Euclides: 53 = 7(7) + 4: 
            
           Ahora tenemos: 
            
           4 = 53 − 7(7) 
            
            
           Sustituimos el 4 en: 1 = 2(4) − 1(7) por: 53− 7(7) 
            
           1 = 2(53 − 7(7)) - 1(7) 
           1 = 2(53) - 14(7) - 1(7) 
           1 = 2(53) - 15(7) 
            
           Despejamos el resto de la primera ecuación del algoritmo de Euclides: 60 = 53(1) + 7: 
            
           Ahora tenemos: 
            
           7 = 60 − 53(1) 
            
            
           Sustituimos el 7 en: 1 = 2(57) − 15(7) por: 60 − 1(53) 
            
           1 = 2(53) - 15(60 – 1(53)) 
           1 = 2(53) - 15(60) + 15(53) 
           1 = 17(53) - 15(60) 
            
            
           Así que hemos encontrado que: 
            
           1 = 17(53) − 15(60) 
            
           Esto significa que los coeficientes x = -15 e y = 17 son los que satisfacen la ecuación de Bézout: 
            
           60(-15) + 53(17) = 1`; 
           
             
           
            y=`17`; 
            break;

        case a=== 60 && b ===59:
            message = ` El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes “x” e “y” tal que:  
 
            a(x) + b(y) = MCD(a,b) 
            
            En este caso, buscamos “x” e “y” tal que:  
            
            60(x) + 59(y) = 1 
            
           Deshacemos los pasos para expresar 1 como una combinación lineal de 60 y 59: 
            
           Despejamos el resto de la última ecuación no trivial del algoritmo de Euclides: 60 = 59(1) + 1  
            
           Ahora tenemos: 
            
           1 = 60 − 59(1) 
            
           Esto ya es la forma que queremos, ya que hemos expresado 1 como una combinación lineal de 10 y 3. A partir de aquí, podemos satisfacer la ecuación de Bézout: 
            
           60(1) + 59(−1) = 1 
            
           x = 1 e y = −1`; 
                    
            y=`-1`;
            break;
    }

    return { gcdMessage: message, y, ed}; // Adjust to return steps if extended Euclidean is implemented.
}


module.exports ={
    extendedEuclidean
};