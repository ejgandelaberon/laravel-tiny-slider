<?php

namespace Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Concerns;

trait HasName
{
    protected string $name;

    public function name(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getName(): string
    {
        return $this->name;
    }
}
