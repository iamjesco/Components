# Styling

## reset.sass
This is a copy from [Eric Meyer's](http://meyerweb.com/eric/tools/css/reset/) reset.css I changed for indented SASS use and added some of my own preferences to it. (some from [normalize.css](https://necolas.github.io/normalize.css/))

## queries.sass
These are the main mixins I use for layout responsiveness. Sure they could be more complex but I like to keep my code as simple as possible. I tend to use max-width. With min-width patterns, you're designing mobile-first. With max-width patterns, you're design desktop-first. Guess I'm more desktop-first. 

**Example:**

The header element will change color when the screen's smaller than 600px by adding the bp-small mixin to its properties.
```
@mixin bp-small 
  @media (max-width: 600px)
    @content

header
	background-color: #000 
	+bp-small    
		background-color: #3f0 
```

# Updates:  
**02/Sept/19**  
* Added the "only screen and" to the media queries as this used to prevent older browsers that do not support media queries with media features from applying the specified styles.
* Changed the syntax to [Media Queries Level 4](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Syntax_improvements_in_Level_4) and the units from **px** to **em**.
