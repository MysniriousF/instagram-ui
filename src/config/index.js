import { development } from './development'
import { prodction } from './production'

let environment = development;
if (process.env.NODE_ENV === 'production'){
    environment = prodction;
}


export default environment;