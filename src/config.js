import { join } from 'path'
import { config } from 'dotenv'

config()

export const seasons = process.env.SEASONS || 1
export const videoPath = process.env.VIDEO_PATH || join('/home', 'redxtech', 'media', 'tv', 'The 100')
