function resultadopechovolumen() {
document.getElementById("titulopechorutina").innerHTML ="Rutina de Pecho"






// Crear la tabla dinámicamente
var tabla = `
<h3 class = "principiante_rutina_pecho">Rutina Nivel Principiante</h3>
<table class="tabla-principiante">
    <thead>
        <tr>
            <th>Ejercicio</th>
            <th>Series</th>
            <th>Repeticiones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Flexiones</td>
            <td>3</td>
            <td>10-12</td>
        </tr>
        <tr>
            <td>Press de banca con mancuernas</td>
            <td>3</td>
            <td>8-12</td>
        </tr>
        <tr>
            <td>Aperturas con mancuernas</td>
            <td>3</td>
            <td>8-12</td>
        </tr>
    </tbody>
</table>

<h3 class = "avanzado_rutina_pecho">Rutina Nivel Intermedio - Avanzado</h3>
<table class="tabla-intermedio">
    <thead>
        <tr>
            <th>Ejercicio</th>
            <th>Series</th>
            <th>Repeticiones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Press plano con barra</td>
            <td>3</td>
            <td>6-8</td>
        </tr>
        <tr>
            <td>Press inclinado con barra</td>
            <td>3</td>
            <td>6-8</td>
        </tr>
        <tr>
            <td>Aperturas en polea o con mancuernas</td>
            <td>3</td>
            <td>6-8</td>
        </tr>
    </tbody>
</table>
`;

// Insertar la tabla en el div con id 'tabla-rutina'
document.getElementById("tabla-rutina").innerHTML = tabla;

document.getElementById("recomendaciones_pecho_titulo_principiante").innerHTML="Recomendaciones Para Principiante:"

document.getElementById("recomendaciones_pecho_principiante").innerHTML = `
   - No lleves las series al fallo en esta etapa. Como principiante, es fundamental que tu cuerpo se adapte a los nuevos estímulos sin sobrecargarlo para evitar lesiones.<br><br>

   - Antes de comenzar la rutina, realiza un calentamiento de 5 a 10 minutos para preparar tus músculos y prevenir lesiones.<br><br>

   - Descansa entre 2 y 3 minutos entre cada serie.<br><br>

   - No utilices pesos demasiado elevados. Recuerda que tu cuerpo aún se está adaptando al ejercicio.<br><br>

   - A medida que vayas ganando fuerza y tu cuerpo se acostumbre, puedes aumentar gradualmente el peso. Si sientes que ya has alcanzado una etapa de adaptación, considera avanzar a la siguiente rutina.
`;

document.getElementById("recomendaciones_pecho_titulo_avanzado").innerHTML="Recomendaciones Para Intermedios y Avanzados:"
document.getElementById("recomendaciones_pecho_avanzado").innerHTML = `

-Realiza un calentamiento de 5 a 10 minutos antes de empezar para preparar tus músculos y evitar lesiones.<br><br>

-Lleva todos tus ejercicios al fallo muscular. Descansa entre 3 y 4 minutos entre cada serie para asegurar una recuperación adecuada.<br><br>

-Utiliza pesos pesados, pero siempre asegurándote de poder controlarlos bien. El objetivo es realizar entre 6 y 8 repeticiones con la máxima intensidad.<br><br>

-A medida que te vayas sintiendo más fuerte y tu cuerpo se adapte, aumenta gradualmente el peso para seguir progresando.
`;

}








