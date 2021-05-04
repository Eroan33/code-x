Código de ejemplo de la primera sesión

Modelo de clasificación entrenado para reconocer rostros en 4 categorías

Para entrenar el modelo se utilizo el UTKFace Large Scale Face Dataset: 
https://susanqq.github.io/UTKFace/

Esta biblioteca contiene más de 20,000 imágenes de rostros (solo detecta rostros) con anotaciones de edad, genéro, etnicidad.

Se emplearon las etiquetas de la biblioteca para clasificar la etnicidad tal como se mencionan en su página oficial:
"White, Black, Asian, Inidan y others (like Hispanic, Latino, Middle Eastern)"

Se filtro el data set para optimizar el tiempo de entrenamiento ominiento las imágenes de menores de edad de 0-17 años.
Dataset filtrado: https://drive.google.com/file/d/1GGed3fmDt0vHfvxoIqSd8lQOKgLAploy/view?usp=sharing

El modelo se entreno utilizando: https://teachablemachine.withgoogle.com/

Las dependencias de código del proyecto están incluidas en el ejemplo: 
p5.js (https://p5js.org/es/) 
ml5.js (https://ml5js.org/)

Para ejecutar el ejercicio se sugiere descargar el editor de código visual studio code (https://code.visualstudio.com/) e instalar la extensión liveserver: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

1. Una vez instalado abrir la carpeta del proyecto en visual studio code y en la barra inferior hacer clic en el botón go live

2. Para agregar nuevas imágenes se requiere primero copiar la imagen del rostro a la carpeta img del proyecto.

3. Por ultimo para que la imagen sea carge se tiene que agregar el nombre completo de la imagen ej."rostro01.jpg" al archivo img_names.txt ubicado en la raíz del proyecto. Evitar nombres de imágenes con espacios o símbolos que no sean alfanúmericos.

Si quieres crear nuevos proyectos se sugiere instalar la siguiente extensión para facilitar el proceso (https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode) Una vez abierta una carpeta nueva para almacenar tu proyecto solo hay que abrir la paleta de commandos de vscode (Ctrl-shift-p) y buscar el comando Create p5.js Project.

Links
Revisar la documentación de ml5.js (https://ml5js.org/)
Revisar la documentación de p5.js (https://p5js.org/es/)
Revisar la página https://teachablemachine.withgoogle.com/
Curso intro a ml5.js:
https://thecodingtrain.com/learning/ml5/0.1-introduction.html
