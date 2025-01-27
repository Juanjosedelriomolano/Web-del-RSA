// Modelo (ejemplo simplificado)
function extendedEuclidean(a, b, l) {
    let message;
    ed = b*l;

    switch (true) {
        case a === 4 && b === 3:
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes x e y tal que:

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos x e y tal que:
            
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
            `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes x e y tal que: 

            a(x) + b(y) = MCD(a,b)

            En este caso, buscamos x e y tal que: 

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
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes x e y tal que: 

            a(x) + b(y) = MCD(a,b)

            En este caso, buscamos x e y tal que: 

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
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes x e y tal que: 

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos x e y tal que: 
            
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
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes x e y tal que: 

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos x e y tal que: 
            
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
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes x e y tal que: 

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos x e y tal que: 
            
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
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes x e y tal que:

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos x e y tal que:
            
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
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes x e y tal que:

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos x e y tal que:
            
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
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes x e y tal que:

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos x e y tal que:
            
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
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes x e y tal que: 
            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos x e y tal que: 
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
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes x e y tal que: 
            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos x e y tal que: 
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
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes x e y tal que: 
            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos x e y tal que: 
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
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes x e y tal que: 
            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos x e y tal que: 
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
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes x e y tal que: 
            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos x e y tal que: 
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
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes x e y tal que: 
            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos x e y tal que: 
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
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes x e y tal que: 

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos x e y tal que: 
            
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
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes x e y tal que: 

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos x e y tal que: 
            
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
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes x e y tal que: 

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos x e y tal que: 
            
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
            message = `El Algoritmo de Euclides Extendido no solo encuentra el MCD, sino también los coeficientes x e y tal que: 

            a(x) + b(y) = MCD(a,b)
            
            En este caso, buscamos x e y tal que: 
            
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
            message = "The second number is greater than the first.";
            break;
        case a=== 8 && b ===3:
            message = "The second number is greater than the first.";
            break;
        case a=== 8 && b ===3:
            message = "The second number is greater than the first.";
            break;
        case a=== 8 && b ===3:
            message = "The second number is greater than the first.";
            break;
        case a=== 8 && b ===3:
            message = "The second number is greater than the first.";
            break;
        case a=== 8 && b ===3:
            message = "The second number is greater than the first.";
            break;
        case a=== 8 && b ===3:
            message = "The second number is greater than the first.";
            break;
        case a=== 8 && b ===3:
            message = "The second number is greater than the first.";
            break;
    }

    return { gcdMessage: message, y, ed}; // Adjust to return steps if extended Euclidean is implemented.
}


module.exports ={
    extendedEuclidean
};