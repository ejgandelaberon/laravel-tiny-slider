<?php

namespace Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Concerns;

use Closure;
use Ejgandelaberon\LaravelTinySlider\Components\CustomSliderControl\CustomControl;

trait CanCustomizeSliderControl
{
    /**
     * @var CustomControl|null $customControl
     */
    protected ?CustomControl $customControl = null;

    public function customControl(CustomControl|Closure $customControl): static
    {
        $this->customControl = $this->evaluate($customControl);

        $this->controlsContainer("#{$this->customControl->getName()}");

        return $this;
    }

    public function getCustomSliderControl(): CustomControl|null
    {
        return $this->customControl;
    }
}
