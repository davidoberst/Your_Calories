function prompt(){

const prompt = document.getElementById('input_prompt').value.toLowerCase();

const gymbot_says = document.getElementById('gymbot_says')

const respuesta = document.getElementById('respuesta_prompt');

//PECHO
if (prompt.includes("pecho")) {
    gymbot_says.innerHTML = "Gymbot Dice:";

    respuesta.innerHTML = "Claro, aquí tienes una rutina de pecho. Primero, realiza un calentamiento de 5 a 10 minutos, es importante calentar antes de entrenar para evitar lesiones.<br><br>" +
    "Si eres principiante:<br><br>" +
    "1. Empieza con 3 series de flexiones, de 10 a 12 repeticiones.<br>" +
    "2. Press de banca con mancuernas, de 10 a 12 repeticiones.<br>" +
    "3. Aperturas con mancuernas, de 10 a 12 repeticiones.<br><br>" +
    
    "Si eres avanzado o intermedio:<br><br>" +
    "1. Empieza con 3 series de Press banca, de 6 a 8 repeticiones.<br>" +
    "2. Press Inclinado de 6 a 8 repeticiones.<br>" +
    "3. Aperturas con mancuernas o Peck Deck, de 6 a 8 repeticiones.";
}

// Espalda
else if (prompt.includes("espalda")) {
    gymbot_says.innerHTML = "Gymbot Dice:";

    respuesta.innerHTML = "Claro, aquí tienes una rutina para trabajar toda la espalda. Realiza un calentamiento de 5 a 10 minutos antes de comenzar el entrenamiento.<br><br>" +
    "Si eres principiante:<br><br>" +
    "1. Jalones en polea al pecho, 3 series de 10 a 12 repeticiones.<br>" +
    "2. Remo con mancuernas, 3 series de 10 a 12 repeticiones.<br>" +
    "3. Pull over (polea alta), 3 series de 12 a 15 repeticiones.<br><br>" +
    
    "Si eres avanzado o intermedio:<br><br>" +
    "1. Jalones en polea al pecho, 3 series de 6 a 8 repeticiones.<br>" +
    "2. Remo con barra, 3 series de 6 a 8 repeticiones.<br>" +
    "3. Pull Over, 3 series de 8 a 10 repeticiones.<br>" +
    "4. Face pull con cuerda (polea alta), 4 series de 10 a 12 repeticiones.";
}

//BRAZOS

else if (prompt.includes("brazo")){
    gymbot_says.innerHTML = "Gymbot Dice:";

respuesta.innerHTML = "Claro, aquí tienes una rutina para brazos. Realiza un calentamiento de 5 a 10 minutos antes de comenzar el entrenamiento.<br><br>" +
"Si Eres Principante:<br><br>" +

"-Bíceps<br><br>" +

"Ejercicio: Curl con Barra o Mancuernas<br>" +
"Series: 3<br>" +
"Repeticiones: 10-12<br><br>" +

"Ejercicio: Curl Martillo con Mancuernas<br>" +
"Series: 3<br>" +
"Repeticiones: 10-12<br><br>" +


"-Tríceps<br><br>" +

"Ejercicio: Fondos en Banco (con el peso corporal)<br>" +
"Series: 3<br>" +
"Repeticiones: 10-12<br><br>" +

"Ejercicio: Extensiones de Tríceps con Mancuerna<br>" +
"Series: 3<br>" +
"Repeticiones: 10-12<br><br>" +

"Ejercicio: Press Frances <br>" +
"Series: 3<br>" +
"Repeticiones: 10-12<br><br>" +

"Si Eres Intermedio o Avanzado:<br><br>" +

"-Bíceps<br><br>" +

"Ejercicio: Curl con Barra (en banco recto o Z)<br>" +
"Series: 3<br>" +
"Repeticiones: 6-9<br><br>" +

"Ejercicio: Curl en Banco Inclinado con Mancuernas<br>" +
"Series: 3<br>" +
"Repeticiones: 6-9<br><br>" +

"Ejercicio: Curl Martillo<br>" +
"Series: 3<br>" +
"Repeticiones: 6-9<br><br>" +

"-Tríceps<br><br>" +

"Ejercicio:Press Frances" +
"Series: 3<br>" +
"Repeticiones: 6-8<br><br>" +

"Ejercicio: Extensiones de Tríceps en Polea Alta (Agarre V)<br>" +
"Series: 3<br>" +
"Repeticiones: 6-8<br><br>" +

"Ejercicio: Fondos en paralela<br>" +
"Series: 3<br>" +
"Repeticiones: 6-8<br>";


}
//BICEPS
else if (prompt.includes("bicep")) {
    gymbot_says.innerHTML = "Gymbot Dice:";

    respuesta.innerHTML = "Claro, aquí tienes una rutina para bíceps. Realiza un calentamiento de 5 a 10 minutos antes de comenzar el entrenamiento.<br><br>" +
    "Si eres principiante:<br><br>" +
    "1. Curl de Biceps, 3 series de 10 a 12 repeticiones.<br>" +
    "2. Curl martillo, 3 series de 10 a 12 repeticiones.<br><br>" +
    
    "Si eres avanzado o intermedio:<br><br>" +
    "1. Curl con barra , 3 series de 6 a 8 repeticiones.<br>" +
    "2. Curl inclinado con mancuernas, 3 series de 6 a 8 repeticiones.<br>" +
    "3. Curl Martillo, 3 series de 6 a 8 repeticiones.";
}
//TICEPS
else if (prompt.includes("tricep")) {
    gymbot_says.innerHTML = "Gymbot Dice:";

    respuesta.innerHTML = "Claro, aquí tienes una rutina para tríceps. Realiza un calentamiento de 5 a 10 minutos antes de comenzar el entrenamiento.<br><br>" +
    "Si eres principiante:<br><br>" +
    "1. Fondos en banco, 3 series de 10 a 12 repeticiones.<br>" +
    "2. Extensiones de tríceps con mancuernas, 3 series de 10 a 12 repeticiones.<br>" +
    "3. Press Frances, 3 series de 10 a 12 repeticiones.<br><br>" +
    
    "Si eres avanzado o intermedio:<br><br>" +
    "1. Press Frances, 3 series de 6 a 8 repeticiones.<br>" +
    "2. Extensiones de tríceps en cuerda (polea alta), 3 series de 6 a 8 repeticiones.<br>" +
    "3. Fondos en Paralela, 3 series de 6 a 8 repeticiones";
}
//HOMBROS
else if (prompt.includes("hombro")) {
    gymbot_says.innerHTML = "Gymbot Dice:";

    respuesta.innerHTML = "Claro, aquí tienes una rutina para hombros. Realiza un calentamiento de 5 a 10 minutos antes de comenzar el entrenamiento.<br><br>" +
    "Si eres principiante:<br><br>" +
    "1. Elevaciones laterales con mancuernas, 3 series de 10 a 12 repeticiones.<br>" +
    "2. Press militar con barra o mancuernas, 3 series de 10 a 12 repeticiones.<br>" +
    "3. Elevaciones frontales con mancuernas, 3 series de 10 a 12 repeticiones.<br><br>" +
    
    "Si eres avanzado o intermedio:<br><br>" +
    "1. Press militar con barra, 3 series de 6 a 8 repeticiones.<br>" +
    "2. Elevaciones laterales con mancuernas (aumento de peso), de 3 a 4 series, de 8 a 12 repeticiones.<br>" +
    "3. Elevaciones posteriores en máquina o con mancuernas, 3 a 4 series de 8 a 12 repeticiones.";
}
//ABDOMEN
else if (prompt.includes("abdomen") || prompt.includes("abdominales")) {
    gymbot_says.innerHTML = "Gymbot Dice:";

    respuesta.innerHTML = "Claro, aquí tienes una rutina para abdomen. Realiza un calentamiento de 5 a 10 minutos antes de comenzar el entrenamiento.<br><br>" +
    "Si eres principiante:<br><br>" +
    "1. Crunches, 3 series de 15 a 20 repeticiones.<br>" +
    "2. Elevación de piernas, 3 series de 15 a 20 repeticiones.<br>" +
    "3. Plancha, 3 series de 30 segundos.<br><br>" +
    
    "Si eres avanzado o intermedio:<br><br>" +
    "1. Crunches con peso, 4 series de 12 a 15 repeticiones.<br>" +
    "2. Elevación de piernas en barra, 4 series de 12 a 15 repeticiones.<br>" +
    "3. Plancha con toque de hombros, 4 series de 45 segundos.<br>";
}
//CUADRICEP
else if (prompt.includes("cuadricep")) {

    gymbot_says.innerHTML = "Gymbot Dice:";

    respuesta.innerHTML = "Claro, aquí tienes una rutina para cuádriceps. Realiza un calentamiento de 5 a 10 minutos antes de comenzar el entrenamiento.<br><br>" +
    "Si eres principiante:<br><br>" +
    "1. Sentadillas con el peso corporal, 3 series de 10 a 12 repeticiones.<br>" +
    "2. Prensa de pierna, 3 series de 10 a 12 repeticiones.<br>" +
    "3. Extensiones de Cuadriceps, 4 series de 10 a 12 repeticiones.<br><br>" +
    
    "Si eres avanzado o intermedio:<br><br>" +
    "1. Sentadilla Hack, 3 series de 6 a 8 repeticiones.<br>" +
    "2. Prensa de piernas, 3 series de 6 a 8 repeticiones.<br>" +
    "3. Extensiones cuadriceps, 3 series de 6 a 8 repeticiones.";
}
//FEMORAL
else if (prompt.includes("femoral") || prompt.includes("femorales")) {
    gymbot_says.innerHTML = "Gymbot Dice:";

    respuesta.innerHTML = "Claro, aquí tienes una rutina para femoral. Realiza un calentamiento de 5 a 10 minutos antes de comenzar el entrenamiento.<br><br>" +
    "Si eres principiante:<br><br>" +
    "1. Curl femoral tumbado, 3 series de 12 a 15 repeticiones.<br>" +
    "2. Peso muerto, 3 series de 10 a 12 repeticiones.<br>" +
    "3. Curl femoral sentado, 3 series de 12 a 15 repeticiones.<br><br>" +
    
    "Si eres avanzado o intermedio:<br><br>" +
    "1. Curl femoral tumbado, 3 series de 6 a 8 repeticiones.<br>" +
    "2. Peso muerto rumano, 3 series de 6 a 8 repeticiones.<br>" +
    "3. Peso muerto Convencional, 3 series de 6 a 8 repeticiones.";
}
//PANTORRILAAS
else if (prompt.includes("pantorrillas") || prompt.includes("pantoriilla")) {
    gymbot_says.innerHTML = "Gymbot Dice:";

    respuesta.innerHTML = "Claro, aquí tienes una rutina para pantorrillas. Realiza un calentamiento de 5 a 10 minutos antes de comenzar el entrenamiento.<br><br>" +
    "Si eres principiante:<br><br>" +
    "1. Elevación de talones de pie, 3 series de 15 a 20 repeticiones.<br>" +
    "2. Elevación de talones sentado, 3 series de 15 a 20 repeticiones.<br>" +
    "3. Elevación de talones en prensa, 3 series de 15 a 20 repeticiones.<br><br>" +
    
    "Si eres avanzado o intermedio:<br><br>" +
    "1. Elevación de talones de pie con barra, 4 series de 12 a 15 repeticiones.<br>" +
    "2. Elevación de talones sentado con peso, 4 series de 12 a 15 repeticiones.<br>" +
    "3. Elevación de talones en prensa a una pierna, 4 series de 12 a 15 repeticiones.";
}

//GLUTEOS
else if (prompt.includes("gluteo") || prompt.includes("cola") || prompt.includes("culo")) {
    gymbot_says.innerHTML = "Gymbot Dice:";

    respuesta.innerHTML = "Claro, aquí tienes una rutina para glúteos. Realiza un calentamiento de 5 a 10 minutos antes de comenzar el entrenamiento.<br><br>" +
    "Si eres rincipiante:<br><br>" +
    "1. Sentadillas con peso corporal: 4 series de 10 a 12 repeticiones.<br>" +
    "2. Patadas de glúteo en máquina o con banda elástica: 4 series de 10 a 12 repeticiones por pierna.<br>" +
    "3. Hip thrust (con barra ligera o sin peso): 4 series de 10 a 12 repeticiones.<br><br>" +
    
    "Si eres intermedio o avanzado:<br><br>" +
    "1. Sentadillas con barra: 3 series de 6 a 8 repeticiones.<br>" +
    "2. Hip thrust con barra pesada: 3 series de 6 a 8 repeticiones.<br>" +
    "3. Peso muerto rumano con barra o mancuernas: 3 series de 6 a 8 repeticiones.<br>" +
    "4. Patadas de glúteo con mancuernas: 3 series de 6 a 8 repeticiones por pierna.";
    
}


//PIERNA COMPLETA
else if (prompt.includes("pierna")){
    gymbot_says.innerHTML = "Gymbot Dice:";

    respuesta.innerHTML = "Claro, aquí tienes una rutina completa de pierna. Realiza un calentamiento de 5 a 10 minutos antes de comenzar el entrenamiento.<br><br>" +
"Nivel Principiante<br><br>" +

"-Cuádriceps y Glúteos<br><br>" +

"Ejercicio: Sentadillas (con peso corporal o con barra ligera)<br>" +
"Series: 3<br>" +
"Repeticiones: 12-15<br><br>" +

"Ejercicio: Prensa de Pierna (máquina)<br>" +
"Series: 3<br>" +
"Repeticiones: 12-15<br><br>" +


"-Femoral<br><br>" +

"Ejercicio: Peso Muerto Rumano con Mancuernas o Barra<br>" +
"Series: 3<br>" +
"Repeticiones: 12-15<br><br>" +

"Ejercicio: Curl de Pierna Acostado (máquina)<br>" +
"Series: 3<br>" +
"Repeticiones: 12-15<br><br>" +

"Pantorrillas<br><br>" +

"Ejercicio: Elevaciones de Talón de Pie (con peso corporal o en máquina)<br>" +
"Series: 3<br>" +
"Repeticiones: 15-20<br><br>" +

"Ejercicio: Elevaciones de Talón Sentado (en máquina)<br>" +
"Series: 3<br>" +
"Repeticiones: 15-20<br><br>" +

"Nivel Intermedio - Avanzado<br><br>" +

"-Cuádriceps y Glúteos<br><br>" +

"Ejercicio: Sentadillas con Barra <br>" +
"Series: 3<br>" +
"Repeticiones: 6-8<br><br>" +

"Ejercicio: Prensa de Pierna (máquina, carga alta)<br>" +
"Series: 3<br>" +
"Repeticiones: 6-8<br><br>" +

"-Femoral<br><br>" +

"Ejercicio: Peso Muerto Rumano con Barra <br>" +
"Series: 3<br>" +
"Repeticiones: 6-8<br><br>" +

"Ejercicio: Curl de Pierna Acostado <br>" +
"Series: 3<br>" +
"Repeticiones: 6-8<br><br>" +

"-Pantorrillas<br><br>" +

"Ejercicio: Elevaciones de Talón de Pie (con barra o máquina)<br>" +
"Series: 3<br>" +
"Repeticiones: 6-12<br><br>" +

"Ejercicio: Elevaciones de Talón Sentado (En Maquina) <br>" +
"Series: 6-12<br>" +
"Repeticiones: 6--15<br>";

}

//DORSAL
else if (prompt.includes("dorsal")){
    gymbot_says.innerHTML = "Gymbot Dice:";


    respuesta.innerHTML = "Claro, aquí tienes una rutina para dorsales. Realiza un calentamiento de 5 a 10 minutos antes de comenzar el entrenamiento.<br><br>" +
    "Si eres principiante:<br><br>" +
    "1. Jalones en polea al pecho, 3 series de 12 a 15 repeticiones.<br>" +
    "2. Remo sentado en polea, 3 series de 12 a 15 repeticiones.<br>" +
    "3. Pull-over con mancuerna o barra, 3 series de 12 a 15 repeticiones.<br><br>" +
    
    "Si eres avanzado o intermedio:<br><br>" +
    "1. Jalones al pecho en polea, 3 series de 6 a 8 repeticiones.<br>" +
    "2. Remo con barra o mancuernas, 3 series de 6 a 8 repeticiones.<br>" +
    "3. Pull-over en polea alta, 3 series de 8 a 10 repeticiones.";
    

}

//TRAPECIOS
else if (prompt.includes("trapecio")){
    gymbot_says.innerHTML = "Gymbot Dice:";


    respuesta.innerHTML = "Claro, aquí tienes una rutina para trapecio. Realiza un calentamiento de 5 a 10 minutos antes de comenzar el entrenamiento.<br><br>" +
    "**Nivel Principiante**<br><br>" +
    
    "Ejercicio: Encogimientos de Hombros con Mancuernas<br>" +
    "Series: 3<br>" +
    "Repeticiones: 12-15<br><br>" +
    
    "Ejercicio: Remo al Cuello con Barra o Polea Baja<br>" +
    "Series: 3<br>" +
    "Repeticiones: 12-15<br><br>" +
    
    
    "**Nivel Intermedio - Avanzado**<br><br>" +
    
    "Ejercicio: Encogimientos de Hombros con Barra o Mancuernas (carga alta)<br>" +
    "Series: 3<br>" +
    "Repeticiones: 6-8<br><br>" +
    
    "Ejercicio: Remo al Cuello con Barra o Polea Baja (con enfoque en trapecios)<br>" +
    "Series: 3<br>" +
    "Repeticiones: 6-8<br><br>" +
    
    "Ejercicio: Remo con Barra o Mancuernas (enfocado en parte superior de la espalda)<br>" +
    "Series: 3<br>" +
    "Repeticiones: 6-8<br><br>";
    }
   
    //Conversaciones

else if (prompt.includes ("hola") || prompt.includes ("hey") || prompt.includes("que tal") || prompt.includes("buenas"))     {
     
    gymbot_says.innerHTML = "Gymbot Dice:";
   
   
    respuesta.innerHTML = "¡Hola! Espero que estés muy bien. Por favor pideme una rutina de cualquier musculo ¡Estoy aquí para ayudarte a lograr tus metas y que disfrutes del proceso! "
   


}else{
  
    gymbot_says.innerHTML = "Gymbot Dice:";
respuesta.innerHTML="¡Lo siento! Parece que no pude encontrar ese músculo en tu mensaje. Tal vez sea un pequeño error tipográfico o alguna palabra se haya escrito de forma diferente. Intenta escribirlo de nuevo."

}



}