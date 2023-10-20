<h1 align="center">My JSONS Storage</h1>

Proyecto personal el cual cosiste en almacenar registros en un base de datos, en formato JSON.

Dichos registros, son basados en estructuras creadas por los usuarios, dichas estructuras y registos,
pueden ser consultados mendiante la api proporsionada (acceso mediante tokens).

## Instalación.

Instalación de las dependencias para laravel.
```bash 
composer install
```
Instalción de las dependencias para ViteJs.
```bash 
npm i
```
Para crear las tablas en tu base de datos debes de configurar el archivo `.env`, que debes de copiar y pegar el archivo de `.env.example` para hacerlo más rapido.

```bash 
php artisan migrate
```

## Servidor de desarrollo.
Debes de tener en cuenta que ambos servidores deben de estar encendidos, tando el del back-end como el de front-end

```bash
//Back-end

php artisan serve
```

```bash
//Front-end

npm run dev
```
#### Iniciar el servicio de bases de datos.

Para iniciar el servicio de bases de datos de postgres en linux utilizamos el siguiente comando.
```bash
    sudo service postgresql start
```

Una vez iniciado el servicio debemos de ingresar a la shell para poder crear las bases de datos que necesitemos.

```bash
    sudo -u postgres psql
```
