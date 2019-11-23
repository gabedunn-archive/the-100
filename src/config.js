import { join } from 'path'
import { config } from 'dotenv'

config()

export const seasons = process.env.SEASONS || 6
export const videoPath = process.env.VIDEO_PATH || join(__dirname, '..', '..', 'The 100')
