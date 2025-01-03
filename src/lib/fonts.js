import { cache } from 'react'
import { readFile } from 'node:fs/promises'

export const getRegularFont = cache(async () => {
    const response = await readFile('src/assets/fonts/Geist-Regular.otf')
    const font = Uint8Array.from(response).buffer

    return font
})

export const getBoldFont = cache(async () => {
    const response = await readFile('src/assets/fonts/Geist-Medium.otf')
    const font = Uint8Array.from(response).buffer
    return font
})