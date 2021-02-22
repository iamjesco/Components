# SASS reset/normalize hybrid

This one is more of a personal taste. Personally I like to have everything unstyled before I start developing a website. But there are some stylings that Normalize offers that I like to have in place as well. Things like **border-box** and **box-sizing**. So I copied and mashed them both into one file.

# SASS Reset code source
[https://gist.github.com/joshvermaire/1102033](https://gist.github.com/joshvermaire/1102033)

```
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video
	margin: 0
	padding: 0
	border: 0
	font-size: 100%
	font: inherit
	vertical-align: baseline

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section
	display: block

body
	line-height: 1
	font-family: sans-serif

ol, ul
	list-style: none

blockquote, q
	quotes: none

blockquote:before, blockquote:after, q:before, q:after
	content: ''
	content: none

table
	border-collapse: collapse
	border-spacing: 0
```


# Normalize.CSS code source
[https://github.com/necolas/normalize.css/](https://github.com/necolas/normalize.css/)

# Normalize code added to Reset

```
html
	box-sizing: border-box 
	-ms-overflow-style: scrollbar 

html, body
	height: 100% 

body
	line-height: 1
	font-family: sans-serif 

h1, h2, h3, h4, h5, h6
	font-weight: bold

textarea
	overflow: auto
	resize: none

label
	display: inline-block

img
	vertical-align: middle
	border-style: none

svg
	overflow: hidden
	vertical-align: middle

a
	text-decoration: none

hr
	box-sizing: content-box
	height: 0
	overflow: visible
```

# Author

Jurgen Schoobaar

# Acknowledgements

* Josh Vermaire for a SASS version of the CSS Reset Code
* Necolas for the Normalize.css code









