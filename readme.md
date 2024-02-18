# Learning JS - Week 0 - Bootcamp 2024-01

Documentación y código de la semana 0 del bootcamp de Desarrollo Web Full Stack de ISDI-Coders.

## Dia 1 - L 12/02

### Entorno de desarrollo

- Browser - Herramientas de desarrollo
- Node.js & npm
- Visual Studio Code
  - configuración básica
    - "editor.formatOnSave": true,
    - "editor.defaultFormatter": "esbenp.prettier-vscode",
    - "editor.codeActionsOnSave": {"source.fixAll.eslint": true}
  - Extensiones
    - ESLint
    - Prettier
    - Live Server
    - Code Spell Checker
    - Markdown All in One
    - Markdown Lint
- Git -> control de versiones
  - configuración básica
    - git config --global user.name "Tu Nombre"
    - git config --global user.email "Tu correo"
    - git config --global core.editor "code --wait"
    - git config --global core.autocrlf false
    - git config --global init.defaultBranch main

### Primer proyecto

- Crear un proyecto con `npm init -y` -> package.json
  - "type": "module",
  - "prettier": {"singleQuote": true}
- archivo readme.md (markdown)
- .editorconfig
  
  ```editorconfig
  indent_style = space
  indent_size = 2
  end_of_line = lf
  charset = utf-8
  trim_trailing_whitespace = false
  insert_final_newline = true
  ```

### JavaScript (1): Datos y variables

- Entornos de ejecución
  - Navegadores -> `<script scr="fichero.js"></script>`
  - Node.js _> `node fichero.js`
  
- JS aparece en 1995
  - Estandarizado en 1997 por ECMA International
  - ECMAScript es el nombre oficial del lenguaje
  - ES6 es la versión reciente más importante
  - ES6+ -> ES2015 .... ES2023

- Tipos de datos
  - number
  - string
  - boolean
  - undefined
  - null
  - symbol
  - bigint
  - object
  - function (object)

- Variables
  - Tipado débil (implícito) y dinámico (puede cambiar de tipo)
  - Declaración: `var`, `let`, `const`

### Challenge 1. Revisar las instalaciones y los conceptos básicos de JS vistos en clase

## Día 2 - M 13/02

### Git / Github

Conceptos básicos

- Control de versiones
- Repositorio
- Commit
  - Git status
  - Git add
  - Git commit
- Repositorio remoto: Github
  - Conexión al repositorio remoto
  - Push
  
Ejemplo practico

- Crear un archivo `package.json` y subirlo a Github
- Crear un archivo `.gitignore` y subirlo a Github
- Crear un archivo `.editorconfig` y subirlo a Github
- Crear un archivo `README.md` y subirlo a Github
- Git 'Initial commit'

- Crear una cuenta en Github
- Crear un repositorio en Github
- Añadirlo como remoto el repositorio en local
  
- Crear archivos y añadirlos en un nuevo commit
- Subirlo a Github

### JavaScript (2)

Continuación de los conceptos básicos

- Hasta ahora vistos datos y variables
- Sentencias y expresiones
- Coercion (implícita) y Casting (explícita)
  - String(), Number(), Boolean()
- Funciones:
  - declaración y ejecución
  - parámetros (=variables) y argumentos (expresiones => valores)
- Ámbitos (scopes) de variables
  - Global
  - Local -> Bloque

### Ejercicios básicos

- Funciones: declaración, asignación. Ejecución: parámetros y argumentos
- Cálculos sencillos con variables y funciones: cubo, área de un rectángulo, etc.
- Números aleatorios

### Challenge 2. Repo en Github con los ejercicios básicos

- Completar los ejercicios básicos
- Incluirlos en un repo y subirlo a Github

## Día 3 - X 14/02

### Code Review: ejercicios básicos y nuevos ejercicios

- Code Review de los ejercicios del día 2
- Hechos en clase todos los ejercicios básicos:
  - Adivinar un número
  - Pares e impares
  - Reverse string
  - Tabla de multiplicar
  - comprobar si un número es primo
- Ejercicios nuevos:
  - Factorial
  - Fibonacci

### Modelos mentales (Dan Abramov)

- Representación mental de los conceptos del lenguaje
- Datos primitivos y objetos (+ funciones)
- Variables como etiquetas o alambres
- Asignación por valor y por referencia
- Mutabilidad e inmutabilidad
- Contexto de ejecución y ámbito de variables
- Comparación de variables: primitivos y objetos
- Object.is frente a ===
  
### Challenge 3. Strict Equals

- Crear un módulo propio con una función `strictEquals(a, b)` que devuelva el mismo valor que `a === b` sin usar los operadores `===` ni `!==`
- Testar la función con un set de pruebas

## Día 4 - J 15/02

### Code Review: Strict Equals

- Code Review del challenge del día 3: Strict Equals

### JavaScript (3)

Continuación de los conceptos básicos

- Revisión: Sentencias y expresiones
- Operadores
  - Aritméticos
  - Asignación
  - Comparación
  - Lógicos
  - Concatenación
  - Ternario
  - Precedencia
- Revisión: Funciones
  - Declaración y asignación. Funciones anónimas. Arrow functions
  - Invocación o ejecución
  - Parámetros
  - Argumentos
  - Retorno
  - Ámbito de variables

### Ejercicios en clase

- Function que reciba n números y devuelva media aritmética.
- Función que calcula la suma de los cuadrados

Planteados otros ejemplos

- function que reciba n números y devuelva el mayor.
- function que reciba n números y devuelva el menor.
- function que reciba n números y devuelva el número que más se repite.

### Challenge 4. Ejercicios intermedios

- Ejercicios intermedios de JS. Modificar strings, palíndromos, contar vocales, pangramas, etc.funciones con fechas, simular un dado, etc.

## Dia 5 - V 16/02

### Code Review y nuevos ejercicios

- Code Review de los ejercicios del día 4. Hacemos en clase la mayoría de los ejercicios

### JavaScript (4)

- Funciones (2)
  - Funciones anidadas
  - Funciones de orden superior
  - Callbacks

- Estructuras de control
  - if
  - switch
  - while
  - do-while
  - for
  - for-in
  - for-of
  - break
  - continue

- Objetos de los tipos de datos primitivos
  - Number
  - String
  - Boolean
- Arrays
  - Creación
  - Acceso a elementos
  - Modificación
  - Métodos
    - push, pop, shift, unshift
    - splice
    - slice
    - join
    - split
    - reverse
    - sort
    - includes
    - indexOf
    - lastIndexOf


### Challenge 5 (Fin de Semana) - Ejercicios avanzados de JS

- Ejercicios avanzados de JS: pirámides de asteriscos, contraseñas aleatorias, filtrar arrays, sumar y calcular estadísticas, contar palabras, ordenar arrays, generador de números pares e impares, convertir kebab-case a camelCase, etc.

## Previsto para la semana 0b

## Dia 6 - L 19/02

### Code Review: ejercicios avanzados

### JavaScript (Review)

- Entornos de ejecución
  - Navegadores -> `<script scr="fichero.js"></script>`
  - Node.js _> `node fichero.js`
  
- JS aparece en 1995
  - Estandarizado en 1997 por ECMA International
  - ECMAScript es el nombre oficial del lenguaje
  - ES6 es la versión reciente más importante
  - ES6+ -> ES2015 .... ES2023

- Tipos de datos
  - number
  - string
  - boolean
  - undefined
  - null
  - symbol
  - bigint
  - object
  - function (object)

- Variables
  - Tipado débil (implícito) y dinámico (puede cambiar de tipo)
  - Declaración: `var`, `let`, `const`

- Sentencias y expresiones
- Operadores
  - Aritméticos
  - Asignación
  - Comparación
  - Lógicos
  - Concatenación
  - Ternario
  - Precedencia

- Modelos mentales (Dan Abramov)

  - Representación mental de los conceptos del lenguaje
  - Datos primitivos y objetos (+ funciones)
  - Variables como etiquetas o alambres
  - Asignación por valor y por referencia
  - Mutabilidad e inmutabilidad

- Coercion (implícita) y Casting (explícita)
  - String(), Number(), Boolean()
- Funciones:
  - declaración y asignación. Funciones anónimas. Arrow functions
  - Invocación o ejecución. Retorno
  - parámetros (=variables) y argumentos (expresiones => valores)
- Ámbitos (scopes) de variables
  - Global
  - Local -> Bloque

- Modelos mentales (Dan Abramov)
  - Contexto de ejecución y ámbito de variables
  - Comparación de variables: primitivos y objetos
  - Object.is frente a ===
  
- Funciones como objetos
  - Funciones anidadas
  - Funciones de orden superior
  - Callbacks

- Estructuras de control
  - if
  - switch
  - while
  - do-while
  - for
  - for-in
  - for-of
  - break
  - continue

- Objetos de los tipos de datos primitivos
  - Number
  - String
  - Boolean
- Arrays
  - Creación
  - Acceso a elementos
  - Modificación
  - Métodos
    - push, pop, shift, unshift
    - splice
    - slice
    - join
    - split
    - reverse
    - sort
    - includes
    - indexOf
    - lastIndexOf

## Día 7 - M 20/02

### Git / Github (2)

Conceptos básicos

- Branch
- Merge
- Pull Request
- Fork

### JavaScript en la Web. DOM
