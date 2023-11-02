<?php

namespace Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Concerns;

use Closure;
use Ejgandelaberon\LaravelTinySlider\Components\TinySliderImage\TinySliderImage;

trait HasImages
{
    /**
     * @var array<TinySliderImage> $images
     */
    protected array $images = [];

    public function images(array|Closure $images): static
    {
        $this->images = $this->evaluate($images);

        return $this;
    }

    /**
     * @return array<TinySliderImage>
     */
    public function getImages(): array
    {
        return $this->images;
    }
}
