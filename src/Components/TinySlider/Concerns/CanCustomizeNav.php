<?php

namespace Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Concerns;

use Closure;
use Ejgandelaberon\LaravelTinySlider\Components\CustomNav\CustomNav;

trait CanCustomizeNav
{
    protected ?CustomNav $customNav = null;

    public function customNav(CustomNav|Closure|null $customNav): static
    {
        $this->customNav = $this->evaluate($customNav);

        $this->navContainer("#{$this->customNav->getName()}");

        return $this;
    }

    public function getCustomNav(): ?CustomNav
    {
        return $this->customNav;
    }
}
