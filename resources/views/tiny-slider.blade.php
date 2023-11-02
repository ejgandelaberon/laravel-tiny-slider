<div
    ax-load
    ax-load-src="{{ asset('vendor/tiny-slider/tiny-slider.js') }}"
    x-data="tinySlider({
        options: {{ $options() }},
        onInit: {{ $getOnInit() }},
        onTransitionEndCallback: {{ $getOnTransitionEndCallback() }},
        offTransitionEndCallback: {{ $getOffTransitionEndCallback() }}
    })"
    {{ $attributes->merge($getExtraAttributes(), escape: false) }}
>
    @if($getCustomSliderControl() && $getControls()) {{ $getCustomSliderControl() }} @endif
    @if($getCustomNav() && $getNav()) {{ $getCustomNav() }} @endif

    <div x-ref="tinySlider">
        @foreach($getImages() as $image)
            <div>
                {{ $image }}
            </div>
        @endforeach
    </div>
</div>
