<?php

namespace Ejgandelaberon\LaravelTinySlider\Facades;

use Ejgandelaberon\LaravelTinySlider\AssetManager;
use Illuminate\Support\Facades\Facade;

class TinySliderAsset extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return AssetManager::class;
    }
}
