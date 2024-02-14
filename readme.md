# Learning JS - Week 0 - Bootcamp 2024-01

Documentación y código de la semana 0 del bootcamp de Desarrollo Web Full Stack de ISDI-Coders.

## Dia 1

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

### JavaScript

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
