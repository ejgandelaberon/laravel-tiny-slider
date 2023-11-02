<?php

namespace Ejgandelaberon\LaravelTinySlider;

use Illuminate\Support\HtmlString;

class AssetManager
{
    public function styles(): HtmlString
    {
        $src = asset('vendor/tiny-slider/tiny-slider.css');

        return new HtmlString("
            <link rel='stylesheet' href=\"$src\">
        ");
    }
}
