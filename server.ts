const port: number = +process.env.PORT || 3000

import * as express from 'express'

const app = express()

app.listen(port, () => console.log(`СЕрвер запущен -p ${port}`))