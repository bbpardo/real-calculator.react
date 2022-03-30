# Documentacion de la calculadora

El proyecto de la calculado consiste en un formato simple creado desde la herramienta React con el fin de profundizar en su uso y mejorar a nivel personal.

El cuerpo del documento consistira en:

- Un display
- Botones de operaciones
- Botones del 0 al 9

Lo primero que se ha creado en un conjunto de states y ref para el funcionamiento de la calculado

Lo necesario para mostrar numero en el display y usarlos

```js
const [inputNumber, setInputNumber] = useState("");
```

Un serie de ref para guardo los numeros que necesitomas almacenar:

```js
const firstNumberRef = useRef("");
const secondNumberRef = useRef("");
const resultRef = useRef("");
const resultTemp = useRef(0);
```

Otros ref para variar el determinara el funcionamiento

```
>const operator = useRef("");
>const temp = useRef(0);
```

Una vez creadas, el siguiente paso fue crear un componente para los botos del 0 al 9 e insertarla en return del App.js

```js
function NumberButtons(props) {
	const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0];
	const buttons = numbers.map((item, idx) => (
		<button
			key={idx}
			className="number-button"
			type="sumit"
			onClick={props.push}
			value={item}
		>
			{item}
		</button>
	));
	return <>{buttons}</>;
}
export default NumberButtons;
```

El siguiente paso despues fue empezar con las funciones, tales como:

- Una función para insertar los numeros en el display
  ```js
  function pushNumber(event) {
  	setFirstNumber(firstNumber + event.target.value);
  }
  ```
- Una función para almacenar la operacion a realizar y el numero que haya escrito en el display

  ```html
  #HTML(ejemplo de ejecucion)
  <button className='number-button1' type="sumit" onClick= {()=>changeOperationHandler((a,b)=>a+b)}>+</button>
  ```

  ```js
  #JS
  function changeOperationHandler(ev) {
    temp.current = 0;
    firstNumberRef.current =  parseFloat(firstNumber);
    operator.current = ev;
    setFirstNumber("");
  }
  ```

- Una función para ejecutar la operacion y mostrar el resultado en el display.

  ```js
  function resultado() {
  	if (temp.current === 0) {
  		temp.current = 1;
  		secondNumberRef.current = parseFloat(firstNumber);
  	}
  	resultRef.current = operator.current(
  		firstNumberRef.current,
  		secondNumberRef.current
  	);
  	setFirstNumber(resultRef.current);
  	firstNumberRef.current = parseFloat(resultRef.current);
  }
  ```

- Dos funciones con la finalidad de borrar el contenido el display solo o borrar dicho display y el resultado almacenado.

  ````js
  function clearNumberHandler() {
      temp.current = 0;
      setFirstNumber("");
  }

  function clearAllNumberHandler() {
      temp.current = 0;
      setFirstNumber("");
      resultRef.current = "";
  ```
  ````

- Dos ultimas funciones que sirven para guarda un resultado en un ref y poder volver a recuperarlos en el display

  ```js
  function resultMemory() {
  	resultTemp.current = parseFloat(resultRef.current);
  }

  function restoreResult() {
  	setFirstNumber(resultTemp.current);
  }
  ```

  Muchas gracias por su tiempo,espero que sea de su agrado.
