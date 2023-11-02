<?php

namespace Ejgandelaberon\LaravelTinySlider\Components\CustomSliderControl;

use Closure;
use Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Concerns\HasName;
use Filament\Support\Components\ViewComponent;
use Filament\Support\Concerns\HasExtraAttributes;

class CustomControl extends ViewComponent
{
    use HasName;
    use HasExtraAttributes;

    protected string $view = 'tiny-slider::custom-control';

    protected string $evaluationIdentifier = 'tnsControlInstance';

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

    protected ?string $previousButtonLabel = null;

    public function previousButtonLabel(string|Closure|null $previousButtonLabel): static
    {
        $this->previousButtonLabel = $this->evaluate($previousButtonLabel);

        return $this;
    }

    public function getPreviousButtonLabel(): ?string
    {
        return $this->previousButtonLabel;
    }

    protected ?string $nextButtonLabel = null;

    public function nextButtonLabel(string|Closure|null $nextButtonLabel): static
    {
        $this->nextButtonLabel = $this->evaluate($nextButtonLabel);

        return $this;
    }

    public function getNextButtonLabel(): ?string
    {
        return $this->nextButtonLabel;
    }

    protected ?string $previousButtonIcon = null;

    public function previousButtonIcon(string|Closure|null $previousButtonIcon): static
    {
        $this->previousButtonIcon = $this->evaluate($previousButtonIcon);

        return $this;
    }

    public function getPreviousButtonIcon(): ?string
    {
        return $this->previousButtonIcon;
    }

    protected ?string $nextButtonIcon = null;

    public function nextButtonIcon(string|Closure|null $nextButtonIcon): static
    {
        $this->nextButtonIcon = $this->evaluate($nextButtonIcon);

        return $this;
    }

    public function getNextButtonIcon(): ?string
    {
        return $this->nextButtonIcon;
    }

    protected bool $iconFirst = true;

    public function iconFirst(bool|Closure $iconFirst = true): static
    {
        $this->iconFirst = $this->evaluate($iconFirst);

        return $this;
    }

    public function getIconFirst(): bool
    {
        return $this->iconFirst;
    }

    protected bool $showLabels = true;

    public function showLabels(bool|Closure $showLabels = true): static
    {
        $this->showLabels = $this->evaluate($showLabels);

        return $this;
    }

    public function getShowLabels(): bool
    {
        return $this->showLabels;
    }
}
