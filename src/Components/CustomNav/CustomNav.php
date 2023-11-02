<?php

namespace Ejgandelaberon\LaravelTinySlider\Components\CustomNav;

use Closure;
use Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Concerns\HasName;
use Filament\Support\Components\ViewComponent;
use Filament\Support\Concerns\HasExtraAttributes;

class CustomNav extends ViewComponent
{
    use HasName;
    use HasExtraAttributes;

    protected string $view = 'tiny-slider::custom-nav';

    protected string $evaluationIdentifier = 'tnsNavInstance';

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

    protected ?int $elements = null;

    public function elements(int|Closure|null $elements): static
    {
        $this->elements = $this->evaluate($elements);

        return $this;
    }

    public function getElements(): ?int
    {
        return $this->elements;
    }
}
