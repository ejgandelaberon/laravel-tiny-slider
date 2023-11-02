<?php

namespace Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Concerns;

use BackedEnum;
use Illuminate\Support\Js;
use Illuminate\Support\Str;
use JsonException;
use ReflectionClass;
use ReflectionException;

trait ExtractsTinySliderOptions
{
    /**
     * @throws JsonException
     * @throws ReflectionException
     */
    public function options(): string
    {
        $extractedPublicMethods = $this->extractPublicMethods();

        $tinySliderGetters = array_map(
            fn($method) => $method->getName(),
            array_filter(
                (new ReflectionClass($this))->getTraits()[HasTinySliderOptions::class]->getMethods(),
                fn($method) => str_contains($method->getName(), 'get') && $method->getName() !== 'getOnInit',
            )
        );

        $options = collect($extractedPublicMethods)->mapWithKeys(function ($getter, $key) use ($tinySliderGetters) {
            if (!in_array($key, $tinySliderGetters)) {
                return [];
            }

            $key = Str::of($key)->remove('get')->camel()->toString();
            $option = $getter();

            if (is_null($option)) {
                return [];
            }

            if ($option instanceof BackedEnum) {
                return [$key => $option->value];
            }

            return [$key => $option];
        })->toArray();

        return Js::encode($options);
    }
}
