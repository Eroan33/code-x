Código de ejemplo de la primera sesión

Modelo de clasificación entrenado para reconocer rostros en 4 categorías

Para entrenar el modelo se utilizo el UTKFace Large Scale Face Dataset: 
https://susanqq.github.io/UTKFace/

Esta biblioteca contiene más de 20,000 imágenes de rostros (solo detecta rostros) con anotaciones de edad, genéro, etnicidad.

Las etiquetas de la biblioteca para clasificar la etnicidad tal cual se mencionan en su página oficial son:
"White, Black, Asian, Inidan y others (like Hispanic, Latino, Middle Eastern)"

Se filtro el data set para optimizar el tiempo de entrenamiento ominiento las imágenes de menores de edad de 0-17 años.

El modelo se entreno utilizando: https://teachablemachine.withgoogle.com/

Dependencias de código del proyecto incluidas en el ejemplo: 
p5.js (https://p5js.org/es/) 
ml5.js (https://ml5js.org/)

Para ejecutar el ejercicio se sugiere descargar el editor de código visual studio code (https://code.visualstudio.com/) e instalar la extensión liveserver: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

1. Una vez instalado abrir la carpeta del proyecto en visual studio code y en la barra inferior hacer clic en el botón go live

2. Para agregar nuevas imágenes solo se requiere copiar la imagen del rostro a la carpeta img del proyecto.

3. Por ultimo para que la imagen sea carge se tiene que agregar el nombre completo de la imagen ej."rostro01.jpg" al archivo img_names.txt ubicado en la raíz del proyecto. De preferencia evitar nombres de imágenes con espacios o símbolos que no sean alfanúmericos.

Por último si quieres crear nuevos proyectos se sugiere instalar la siguiente extensión para facilitar el proceso (https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode) Una vez abierta una carpeta nueva para almacenar tu proyecto solo hay que abrir la paleta de commandos de vscode (Ctrl-shift-p) y buscar el comando Create p5.js Project.


 


 







