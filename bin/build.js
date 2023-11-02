import * as esbuild from 'esbuild';

esbuild.build({
    entryPoints: ['./resources/js/tiny-slider.js'],
    outfile: './resources/dist/tiny-slider.js',
    bundle: true,
    mainFields: ['module', 'main'],
    platform: 'neutral',
    treeShaking: true,
    target: ['es2020'],
    minify: true,
})
