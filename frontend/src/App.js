import React, { useState } from 'react'
import UrlList from './components/UrlList'
import api from './api/backend'
import { toIndexedSet } from './helpers'

function App() {

    const [url, setUrl] = useState('')
    const [slug, setSlug] = useState('')
    const [urls, setUrls] = useState([])

    const addUrl = (url) => {
        urls.push(url)
        setUrls(Object.values(toIndexedSet(urls)))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await api.post('/', { url, slug })
            const newUrl = res.data
            addUrl(newUrl)
            urls.push(newUrl)
            console.log('[urls]', urls)
        } catch (e) {
            console.error('[handleSubmit.e]', e)
        }
    }

    const handleInputUrlChange = (event) => {
        setUrl(event.target.value)
    }

    const handleInputSlugChange = (event) => {
        setSlug(event.target.value)
    }

    return (
        <div>
            <header>
                <h1>URL Shortener</h1>
            </header>
            <section>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="inputUrl">Url*:</label>
                    <input type="text" name="inputUrl" required value={url} onChange={handleInputUrlChange} placeholder="https://www.google.es/"/>
                    <label htmlFor="inputSlug">Custom Slug (optional):</label>
                    <input type="text" name="inputSlug" value={slug} onChange={handleInputSlugChange} placeholder="google"/>
                    <button>Submit</button>
                </form>
            </section>
            <section>
                <UrlList urls={urls}/>
            </section>
            <footer>
                Made with ❤ by <a href="https://github.com/Totti619">Antonio Ortiz.</a>
            </footer>
        </div>
    )
}

export default App

