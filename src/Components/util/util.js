const config = require('../../Config/config')

export function createUrl(path) {
    return `${config.serverUrl}/${path}`
}

