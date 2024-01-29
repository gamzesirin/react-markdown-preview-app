import './App.css'

import React, { useState } from 'react'

import marked from 'marked'

function App() {
	const [markdownText, setMarkdownText] = useState('')
	const [previewHtml, setPreviewHtml] = useState('')

	const handleMarkdownChange = (event) => {
		const text = event.target.value
		setMarkdownText(text)
	}

	const handlePreviewClick = () => {
		const htmlText = marked(markdownText)
		setPreviewHtml(htmlText)
	}

	const handleExampleClick = () => {
		const exampleMarkdown = `# Başlık
**Kalın** *italik* [Bağlantı](https://www.example.com)

\`\`\`javascript
console.log("Merhaba, dünya!");
\`\`\`

1. Liste öğesi
2. Liste öğesi

- Madde işareti
- Madde işareti

![Resim](https://via.placeholder.com/150)`
		setMarkdownText(exampleMarkdown)
		handlePreviewClick()
	}

	return (
		<div className="App">
			<div className="editor">
				<textarea
					id="markdown-input"
					rows="10"
					placeholder="Markdown metnini buraya yazın..."
					value={markdownText}
					onChange={handleMarkdownChange}
				></textarea>
				<button onClick={handlePreviewClick}>Ön İzle</button>
				<button onClick={handleExampleClick}>Örnek Markdown</button>
			</div>
			<div className="preview" dangerouslySetInnerHTML={{ __html: previewHtml }}></div>
		</div>
	)
}

export default App
