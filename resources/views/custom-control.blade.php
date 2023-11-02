<div id="{{ $getName() }}" {{
    $attributes
        ->merge($getExtraAttributes(), escape: false)
        ->class([
            'custom-tns-control',
        ])
}}>
    <button style="display: inline-flex; align-items: center">
        @if($getIconFirst()) @svg($getPreviousButtonIcon() ?? 'heroicon-o-chevron-left', 'w-5 h-5') @endif
        @if($getShowLabels()) {{ $getPreviousButtonLabel() ?? 'Previous' }} @endif
        @if(! $getIconFirst()) @svg($getPreviousButtonIcon() ?? 'heroicon-o-chevron-left', 'w-5 h-5') @endif
    </button>

    <button style="display: inline-flex; align-items: center">
        @if(! $getIconFirst()) @svg($getNextButtonIcon() ?? 'heroicon-o-chevron-right', 'w-5 h-5') @endif
        @if($getShowLabels()) {{ $getNextButtonLabel() ?? 'Next' }} @endif
        @if($getIconFirst()) @svg($getNextButtonIcon() ?? 'heroicon-o-chevron-right', 'w-5 h-5') @endif
    </button>
</div>
