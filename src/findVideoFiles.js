import { join } from 'path'
import { readdirSync, writeFileSync } from 'fs'
import { config } from 'dotenv'
import { seasons, videoPath } from './config'

config()

const main = () => {
  const files = []
  for (let i = 0; i < seasons; i++) {
    const seasonPath = join(videoPath, `The 100 S0${i + 1}`)
    files[i] = []
    readdirSync(seasonPath).forEach(file => {
      if (file.split('.').pop() === 'mp4') {
        files[i].push(file)
      }
    })
  }

  writeFileSync(join(__dirname, 'videos.json'), JSON.stringify(files, null, 2))
}

main()
