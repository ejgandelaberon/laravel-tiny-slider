<?php

namespace Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Concerns;

use Closure;

trait HasCustomEvents
{
    protected static string $onTransitionEndCallback = '(info, eventName) => {}';

    public function onTransitionEndCallback(string|Closure $callback): static
    {
        static::$onTransitionEndCallback = $this->evaluate($callback);

        return $this;
    }

    public function getOnTransitionEndCallback(): string
    {
        return static::$onTransitionEndCallback;
    }

    protected static string $offTransitionEndCallback = '(info, eventName) => {}';

    public function offTransitionEndCallback(string|Closure $callback): static
    {
        static::$offTransitionEndCallback = $this->evaluate($callback);

        return $this;
    }

    public function getOffTransitionEndCallback(): string
    {
        return static::$offTransitionEndCallback;
    }
}
