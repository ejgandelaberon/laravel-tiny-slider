<div>
    <img {{ $attributes->merge($getExtraAttributes(), escape: false) }}>

    <div class="tns-image-description">
        @if($getTitle())
            <h2>{{ $getTitle() }}</h2>
        @endif

        @if($getDescription())
            <p>{{ $getDescription() }}</p>
        @endif
    </div>
</div>
