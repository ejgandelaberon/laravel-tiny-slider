<div id="{{ $getName() }}" {{
    $attributes
        ->merge($getExtraAttributes(), escape: false)
        ->class([
            'custom-tns-nav',
        ])
}}>
    @if($getElements())
        @for($i = 1; $i <= $getElements(); $i++)
            <button></button>
        @endfor
    @endif
</div>
