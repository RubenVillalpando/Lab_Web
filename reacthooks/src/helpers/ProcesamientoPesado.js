//Creamos una función para simular un procesamiento pesado.
export const procesamientoPesado = (iteraciones) => {
    for (let i = 0; i < iteraciones; i++) {
    console.log('Procesando iteración...');
    }
    return iteraciones + ' iteraciones realizadas';
   }