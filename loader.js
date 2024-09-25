'use client'

export default function myImageLoader({ src, width, quality }) {
    return `https://jagadeeshdevportfolio.vercel.app/${src}?w=${width}&q=${quality || 75}`
}