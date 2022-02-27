const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('src/js/min.js', 'public/js')
    .css('src/css/min.css', 'css')
    .options({
        postCss: [tailwindcss('./tailwind.config.js')]
    })
    .setPublicPath('public');