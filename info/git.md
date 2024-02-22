# Git

Git: Sistema de control de versiones distribuido, diseñado para manejar todo, desde proyectos pequeños hasta muy grandes con velocidad y eficiencia

GitHub: Plataforma de desarrollo colaborativo de software para alojar proyectos utilizando el sistema de control de versiones Git - Hosting de repositorios de Git

Alternativas a GitHub: GitLab, Bitbucket, SourceForge, entre otros

## Comandos básicos de Git

- `git init`: Inicializa un repositorio local de Git
- `git clone`: Clona un repositorio de Git
- `git add`: Agrega un archivo al área de preparación (stagedArea)
- `git status`: Muestra el estado de los archivos en el directorio de trabajo (workArea) y el área de preparación
- `git commit`: Guarda los cambios en el repositorio

## Comandos de conexión  y uso del repositorio remoto

- `git remote add origin https://github.com/alce65/nombre_del_repo.git`
- `git push -u origin main`
- `git push`: Sube todos los cambios locales al repositorio remoto
- `git pull`: Descarga los cambios del repositorio remoto al repositorio local

## Elementos de un repositorio de Git

- `Working Directory`: Directorio de trabajo
- `Staging Area`: Área de preparación
- `Repository`: Repositorio -> conjunto de commits y etiquetas

- Cada Commit tiene un SHA (Secure Hash Algorithm) que es un identificador único
- Cada Commit tiene un autor y un mensaje
- Cada Commit tiene un padre (excepto el primer commit)
- Cada Commit tiene un árbol cambios en los archivos y directorios
- Cada Commit tiene un mensaje que describe los cambios realizados
- Cada Commit tiene una fecha y hora de creación

- Etiquetas (Tags): Pueden ser anotadas o ligeras
  - HEAD: Puntero a la rama actual
  - Rama: puntero al commit actual (normalmente el ultimo)
  
## Comandos para trabajar con ramas

- `git branch`: Lista las ramas locales
- `git branch nombre_rama`: Crea una nueva rama
- `git checkout nombre_rama`: Cambia a la rama especificada
- `git checkout -b nombre_rama`: Crea una nueva rama y cambia a ella
- `git merge nombre_rama`: Fusiona la rama especificada con la rama actual
