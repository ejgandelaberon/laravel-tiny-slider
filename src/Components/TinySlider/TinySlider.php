<?php

namespace Ejgandelaberon\LaravelTinySlider\Components\TinySlider;

use Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Concerns\CanCustomizeNav;
use Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Concerns\CanCustomizeSliderControl;
use Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Concerns\ExtractsTinySliderOptions;
use Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Concerns\HasCustomEvents;
use Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Concerns\HasImages;
use Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Concerns\HasName;
use Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Concerns\HasTinySliderOptions;
use Filament\Support\Components\ViewComponent;
use Filament\Support\Concerns\HasExtraAttributes;

class TinySlider extends ViewComponent
{
    use HasName;
    use HasExtraAttributes;
    use HasTinySliderOptions;
    use HasCustomEvents;
    use ExtractsTinySliderOptions;
    use HasImages;
    use CanCustomizeSliderControl;
    use CanCustomizeNav;

    protected string $view = 'tiny-slider::tiny-slider';

    protected string $evaluationIdentifier = 'tnsInstance';

    public static function make(string $name): static
    {
        $static = app(static::class, ['name' => $name]);
        $static->configure();

        return $static;
    }

    public function __construct(string $name)
    {
        $this->name($name);
    }
}
