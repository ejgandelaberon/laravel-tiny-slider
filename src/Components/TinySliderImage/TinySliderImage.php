<?php

namespace Ejgandelaberon\LaravelTinySlider\Components\TinySliderImage;

use Closure;
use Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Concerns\HasName;
use Filament\Support\Components\ViewComponent;
use Filament\Support\Concerns\HasExtraAttributes;

class TinySliderImage extends ViewComponent
{
    use HasName;
    use HasExtraAttributes;

    protected string $view = 'tiny-slider::tiny-slider-image';

    protected string $evaluationIdentifier = 'tnsImageInstance';

    public static function make(string $name = ''): static
    {
        $static = app(static::class, ['name' => $name]);
        $static->configure();

        return $static;
    }

    public function __construct(string $name = '')
    {
        $this->name($name);
    }

    protected string $src;

    public function src(string|Closure $src): static
    {
        $this->src = $this->evaluate($src);
        $this->extraAttributes(['src' => $this->src], merge: true);

        return $this;
    }

    public function getSrc(): string
    {
        return $this->src;
    }

    protected string $alt = '';

    public function alt(string|Closure $alt): static
    {
        $this->alt = $this->evaluate($alt);
        $this->extraAttributes(['alt' => $this->alt], merge: true);

        return $this;
    }

    public function getAlt(): string
    {
        return $this->alt;
    }

    protected ?string $title = null;

    public function title(string|Closure $title): static
    {
        $this->title = $this->evaluate($title);

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    protected ?string $description = null;

    public function description(string|Closure $description): static
    {
        $this->description = $this->evaluate($description);

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }
}
