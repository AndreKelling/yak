# Yak with Demo Base

Forked the yak redaxo setup for a SCSS workflow. Based on the [demo_base](https://github.com/FriendsOfREDAXO/demo_base) AddOn (Version 2.6.5).
Find in depth setup and deploy tool information on [yak base repo](https://github.com/yakamara/yak) readme.

## Motivation

This kind of a boilerplate shall give you a good starting point for a faster website creation with Redaxo CMS. As the original yak codebase does provide SCSS and JS with gulp, but no adquate template where functionalities and styles are mapped to. Which leads to starting at Zero. On the other side the demo base provides a good starting point template-wise. But no asset-automation like gulp.

So here the combined strength of them both.

## Requirements

* have your prepare your local apache server setup
* have node and npm installed

## Install

1. put your URL into `./.env.dist` file
   
   ```APP_HOST=project.localhost```
   
1. run `setup/presetup`

1. go through default redaxo setup in your browser

1. [activate demo content](https://github.com/FriendsOfREDAXO/demo_base#installation)

1. [demo_base](https://github.com/FriendsOfREDAXO/demo_base) AddOn, can get uninstalled afterwards

### Further requirements

* developer AddOn installed (should already in with setup)

## Development

Now to really use your SCSS and JS gulp workflow. You need to change the binded resources. This is with developer plugin activated and synced template.

1. in `src/templates/00 . Header [4]/template.php` replace all CSS integrations and set the created `resources/css/style.css` as single CSS resource. You can remove all other CSS files here.

1.  in `src/templates/03 . TEMPLATE [3]/template.php` replace all JS integrations and set the created `resources/js/main.js` as single JS resource. You can remove all other JS files here.
 
1. `npm run dev`

## Build

For production settings, without sourcemaps, you will need to build CSS and JS once.

1. `npm run build`

## Issues

* SCSS and JS are still unclean written
* I did not keep attention on the deployment tool of the original yak
