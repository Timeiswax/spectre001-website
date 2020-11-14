const fs = require('fs')
const globby = require('globby')
const axios = require('axios')

async function generateSiteMap() {
    const api = axios.create({
        baseURL: 'https://legume-heads-blog-api.herokuapp.com'
    })

    let items
    api.get('/posts')
        .then(res => {
        const indx = res.data
        items = Object.keys(indx).map(post => {
            return indx[post].title
            })
        })
    
    const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/**/[id].js',
    '!pages/api',
    'posts/*.md'
    ])

    const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
            .map(page => {
                const path = page
                .replace('pages', '')
                .replace('.js', '')
                .replace('.md', '')
                const route = path === '/index' ? '' : path
                return `
                        <url>
                            <loc>${`https://spectre001pod.com/${route}`}</loc>
                        </url>
                    `
            })
            .join('')}
        </urlset>
    `

    fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSiteMap()