const util = require("util");

const objeto=(`
    Argumentos de entrada:
    Sitema operativo: ${process.platform}
    Version de Node: ${process.version}
    Uso de la memoria: ${util.inspect(process.memoryUsage().rss)}
    Path de ejecucion: ${process.execPath}
    ID del proceso: ${process.pid}
    Carpeta del proyecto:${process.cwd()}
    Titulo del proceso: ${process.title}
`);


module.exports=objeto