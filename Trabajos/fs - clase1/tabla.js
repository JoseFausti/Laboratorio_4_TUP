const { log } = require('console')
const fs = require('fs')

const args = process.argv.slice(2)
// const base_arg = args.find(arg => arg.startsWith('--base=')) || '--base=5'
// const base = Number(base_arg.split('=')[1]) || 5

const [,, base_arg] = args
const base = base_arg ? Number(base_arg.split('=')[1]) : 5

try {
    const data = []

    for (let index = 1; index <= 10; index++) {
        data.push(`${base} x ${index} = ${base * index}`)
    }

    if (!fs.existsSync('data')) fs.mkdirSync('data')

    fs.writeFileSync(`data/tabla-${base}.txt`, `-- Tabla del ${base} --\n${data.join('\n')}`)

    log(`Archivo "tabla-${base}.txt" creado con éxito en la carpeta "data".`)
} catch (error) {
    log('Ocurrió un error:', error)
}


