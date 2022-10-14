# GEEK GROUP test

## About the test task

It took me 4 days to complete this test task (the first commit was 11.10, and the last commit was 14.10)
Implementation was phased:
1. Layout of the layout in such a way that it is quite easy to add a mobile version
2. Adaptability of the layout
3. Adding some animations and scripts

In addition to Bootstrap5 I used the noUiSlider plugin to create a price slider. It was a new experience for me.
https://refreshless.com/nouislider/

The picture on the tab is chosen randomly - just in case

#### Animations (with a screen width of more than 767px):

1. When hovering the mouse cursor over the product card
2. When hovering the mouse cursor over a menu item

## About the code


All scripts are described in the file "script.js".
The other files in the "js" folder are auxiliary.

Among the CSS files, there are several main ones - style.css, adaptive.css, and nullstyle.css.
Auxiliary files - bootstrap.min.css and nouislider.min.css

#### Used scripts:

1. Adding product cards using the <template> and template generator Mustache.js
2. Dependence of the price value on the position of the slider handle
3. Collapsing the menu into a "burger menu" in the mobile version

