<?php

namespace Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Concerns;

use Closure;
use Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Enums\AutoplayDirection;
use Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Enums\AutoplayPosition;
use Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Enums\Axis;
use Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Enums\ControlsPosition;
use Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Enums\Mode;
use Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Enums\NavPosition;
use Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Enums\Nested;
use Ejgandelaberon\LaravelTinySlider\Components\TinySlider\Enums\PreventScrollOnTouch;
use Ejgandelaberon\LaravelTinySlider\Exceptions\MustBePageStringValueException;
use Ejgandelaberon\LaravelTinySlider\Exceptions\MustBePositiveIntegerException;
use Exception;

/**
 * Refer to the Tiny Slider documentation for more information.
 *
 * @see https://github.com/ganlanyuan/tiny-slider#options
 */
trait HasTinySliderOptions
{
    protected Mode $mode = Mode::CAROUSEL;

    public function mode(Mode|Closure $mode): static
    {
        $this->mode = $this->evaluate($mode);

        return $this;
    }

    public function getMode(): Mode
    {
        return $this->mode;
    }

    protected Axis $axis = Axis::HORIZONTAL;

    public function axis(Axis|Closure $axis): static
    {
        $this->axis = $this->evaluate($axis);

        return $this;
    }

    public function getAxis(): Axis
    {
        return $this->axis;
    }

    protected int $items = 1;

    public function items(int|Closure $items): static
    {
        $this->items = $this->evaluate($items);

        return $this;
    }

    public function getItems(): int
    {
        return $this->items;
    }

    protected int $gutter = 0;

    public function gutter(int|Closure $gutter): static
    {
        $this->gutter = $this->evaluate($gutter);

        return $this;
    }

    public function getGutter(): int
    {
        return $this->gutter;
    }

    protected int $edgePadding = 0;

    public function edgePadding(int|Closure $edgePadding): static
    {
        $this->edgePadding = $this->evaluate($edgePadding);

        return $this;
    }

    public function getEdgePadding(): int
    {
        return $this->edgePadding;
    }

    protected ?int $fixedWidth = null;

    /**
     * @throws MustBePositiveIntegerException
     */
    public function fixedWidth(int|Closure|null $fixedWidth): static
    {
        $resolvedValue = $this->evaluate($fixedWidth);

        if (is_int($resolvedValue) && $resolvedValue < 0) {
            throw new MustBePositiveIntegerException('Fixed width must not be negative.');
        }

        $this->fixedWidth = $resolvedValue;

        return $this;
    }

    public function getFixedWidth(): ?int
    {
        return $this->fixedWidth;
    }

    protected bool $autoWidth = false;

    public function autoWidth(bool|Closure $autoWidth = true): static
    {
        $this->autoWidth = $this->evaluate($autoWidth);

        return $this;
    }

    public function getAutoWidth(): bool
    {
        return $this->autoWidth;
    }

    protected ?int $viewportMax = null;

    /**
     * @throws MustBePositiveIntegerException
     */
    public function viewportMax(int|Closure|null $viewportMax): static
    {
        $resolvedValue = $this->evaluate($viewportMax);

        if (is_int($resolvedValue) && $resolvedValue < 0) {
            throw new MustBePositiveIntegerException('Viewport max must not be negative.');
        }

        $this->viewportMax = $resolvedValue;

        return $this;
    }

    public function getViewportMax(): ?int
    {
        return $this->viewportMax;
    }

    protected int|string $slideBy = 1;

    /**
     * @throws MustBePositiveIntegerException
     * @throws MustBePageStringValueException
     */
    public function slideBy(int|string|Closure $slideBy): static
    {
        $resolvedValue = $this->evaluate($slideBy);

        if (is_int($resolvedValue) && $resolvedValue < 0) {
            throw new MustBePositiveIntegerException('Speed must not be negative.');
        }

        if (is_string($resolvedValue)) {
            $resolvedValue = strtolower($resolvedValue);

            if ($resolvedValue !== 'page') {
                throw new MustBePageStringValueException('"page" is the only valid string value for slide by.');
            }
        }

        $this->slideBy = $resolvedValue;

        return $this;
    }

    public function getSlideBy(): int|string
    {
        return $this->slideBy;
    }

    protected bool $center = false;

    public function center(bool|Closure $center = true): static
    {
        $this->center = $this->evaluate($center);

        return $this;
    }

    public function getCenter(): bool
    {
        return $this->center;
    }

    protected bool $controls = true;

    public function controls(bool|Closure $controls): static
    {
        $this->controls = $this->evaluate($controls);

        return $this;
    }

    public function getControls(): bool
    {
        return $this->controls;
    }

    protected ControlsPosition $controlsPosition = ControlsPosition::TOP;

    public function controlsPosition(ControlsPosition|Closure $controlsPosition): static
    {
        $this->controlsPosition = $this->evaluate($controlsPosition);

        return $this;
    }

    public function getControlsPosition(): ControlsPosition
    {
        return $this->controlsPosition;
    }

    protected array $controlsText = ['prev', 'next'];

    public function controlsText(array|Closure $controlsText): static
    {
        $this->controlsText = $this->evaluate($controlsText);

        return $this;
    }

    public function getControlsText(): array
    {
        return $this->controlsText;
    }

    protected ?string $controlsContainer = null;

    public function controlsContainer(string|Closure|null $controlsContainer): static
    {
        $this->controlsContainer = $this->evaluate($controlsContainer);

        return $this;
    }

    public function getControlsContainer(): ?string
    {
        return $this->controlsContainer;
    }

    protected ?string $prevButton = null;

    public function prevButton(string|Closure|null $prevButton): static
    {
        $this->prevButton = $this->evaluate($prevButton);

        return $this;
    }

    public function getPrevButton(): ?string
    {
        return $this->prevButton;
    }

    protected ?string $nextButton = null;

    public function nextButton(string|Closure|null $nextButton): static
    {
        $this->nextButton = $this->evaluate($nextButton);

        return $this;
    }

    public function getNextButton(): ?string
    {
        return $this->nextButton;
    }

    protected bool $nav = true;

    public function nav(bool|Closure $nav): static
    {
        $this->nav = $this->evaluate($nav);

        return $this;
    }

    public function getNav(): bool
    {
        return $this->nav;
    }

    protected NavPosition $navPosition = NavPosition::TOP;

    public function navPosition(NavPosition|Closure $navPosition): static
    {
        $this->navPosition = $this->evaluate($navPosition);

        return $this;
    }

    public function getNavPosition(): NavPosition
    {
        return $this->navPosition;
    }

    protected ?string $navContainer = null;

    public function navContainer(string|Closure|null $navContainer): static
    {
        $this->navContainer = $this->evaluate($navContainer);

        return $this;
    }

    public function getNavContainer(): ?string
    {
        return $this->navContainer;
    }

    protected bool $navAsThumbnails = false;

    public function navAsThumbnails(bool|Closure $navAsThumbnails = true): static
    {
        $this->navAsThumbnails = $this->evaluate($navAsThumbnails);

        return $this;
    }

    public function getNavAsThumbnails(): bool
    {
        return $this->navAsThumbnails;
    }

    /**
     * Using this option causes bugs when used with controls.
     */
    protected bool $arrowKeys = false;

    public function arrowKeys(bool|Closure $arrowKeys = true): static
    {
        $this->arrowKeys = $this->evaluate($arrowKeys);

        return $this;
    }

    public function getArrowKeys(): bool
    {
        return $this->arrowKeys;
    }

    protected int $speed = 300;

    /**
     * @throws Exception
     */
    public function speed(int|Closure $speed): static
    {
        $resolvedValue = $this->evaluate($speed);

        if (is_int($resolvedValue) && $resolvedValue < 0) {
            throw new MustBePositiveIntegerException('Speed must not be negative.');
        }

        $this->speed = $resolvedValue;

        return $this;
    }

    public function getSpeed(): int
    {
        return $this->speed;
    }

    protected bool $autoplay = false;

    public function autoplay(bool|Closure $autoplay = true): static
    {
        $this->autoplay = $this->evaluate($autoplay);

        return $this;
    }

    public function getAutoplay(): bool
    {
        return $this->autoplay;
    }

    protected AutoplayPosition $autoplayPosition = AutoplayPosition::TOP;

    public function autoplayPosition(AutoplayPosition|Closure $autoplayPosition): static
    {
        $this->autoplayPosition = $this->evaluate($autoplayPosition);

        return $this;
    }

    public function getAutoplayPosition(): AutoplayPosition
    {
        return $this->autoplayPosition;
    }

    protected int $autoplayTimeout = 5000;

    /**
     * @throws Exception
     */
    public function autoplayTimeout(int|Closure $autoplayTimeout): static
    {
        $resolvedValue = $this->evaluate($autoplayTimeout);

        if (is_int($resolvedValue) && $resolvedValue < 0) {
            throw new MustBePositiveIntegerException('Autoplay timeout must not be negative.');
        }

        $this->autoplayTimeout = $resolvedValue;

        return $this;
    }

    public function getAutoplayTimeout(): int
    {
        return $this->autoplayTimeout;
    }

    protected AutoplayDirection $autoplayDirection = AutoplayDirection::FORWARD;

    public function autoplayDirection(AutoplayDirection|Closure $autoplayDirection): static
    {
        $this->autoplayDirection = $this->evaluate($autoplayDirection);

        return $this;
    }

    public function getAutoplayDirection(): AutoplayDirection
    {
        return $this->autoplayDirection;
    }

    protected ?array $autoplayText = null;

    public function autoplayText(array|Closure $autoplayText): static
    {
        $this->autoplayText = $this->evaluate($autoplayText);

        return $this;
    }

    public function getAutoplayText(): ?array
    {
        return $this->autoplayText ?? [
            svg('heroicon-o-play', 'w-8 h-8', [
                'fill' => '#ffffff',
            ])->toHtml(),
            svg('heroicon-o-pause', 'w-8 h-8')->toHtml()
        ];
    }

    protected bool $autoplayHoverPause = false;

    public function autoplayHoverPause(bool|Closure $autoplayHoverPause = true): static
    {
        $this->autoplayHoverPause = $this->evaluate($autoplayHoverPause);

        return $this;
    }

    public function getAutoplayHoverPause(): bool
    {
        return $this->autoplayHoverPause;
    }

    protected ?string $autoplayButton = null;

    public function autoplayButton(string|Closure|null $autoplayButton): static
    {
        $this->autoplayButton = $this->evaluate($autoplayButton);

        return $this;
    }

    public function getAutoplayButton(): ?string
    {
        return $this->autoplayButton;
    }

    protected bool $autoplayButtonOutput = true;

    public function autoplayButtonOutput(bool|Closure $autoplayButtonOutput): static
    {
        $this->autoplayButtonOutput = $this->evaluate($autoplayButtonOutput);

        return $this;
    }

    public function getAutoplayButtonOutput(): bool
    {
        return $this->autoplayButtonOutput;
    }

    protected bool $autoplayResetOnVisibility = true;

    public function autoplayResetOnVisibility(bool|Closure $autoplayResetOnVisibility): static
    {
        $this->autoplayResetOnVisibility = $this->evaluate($autoplayResetOnVisibility);

        return $this;
    }

    public function getAutoplayResetOnVisibility(): bool
    {
        return $this->autoplayResetOnVisibility;
    }

    protected string $animateIn = 'tns-fadeIn';

    public function animateIn(string|Closure $animateIn): static
    {
        $this->animateIn = $this->evaluate($animateIn);

        return $this;
    }

    public function getAnimateIn(): string
    {
        return $this->animateIn;
    }

    protected string $animateOut = 'tns-fadeOut';

    public function animateOut(string|Closure $animateOut): static
    {
        $this->animateOut = $this->evaluate($animateOut);

        return $this;
    }

    public function getAnimateOut(): string
    {
        return $this->animateOut;
    }

    protected string $animateNormal = 'tns-normal';

    public function animateNormal(string|Closure $animateNormal): static
    {
        $this->animateNormal = $this->evaluate($animateNormal);

        return $this;
    }

    public function getAnimateNormal(): string
    {
        return $this->animateNormal;
    }

    protected ?int $animateDelay = null;

    /**
     * @throws Exception
     */
    public function animateDelay(int|Closure|null $animateDelay): static
    {
        $resolvedValue = $this->evaluate($animateDelay);

        if (is_int($resolvedValue) && $resolvedValue < 0) {
            throw new MustBePositiveIntegerException('Animate delay must not be negative.');
        }

        $this->animateDelay = $resolvedValue;

        return $this;
    }

    public function getAnimateDelay(): ?int
    {
        return $this->animateDelay;
    }

    protected bool $loop = true;

    public function loop(bool|Closure $loop): static
    {
        $this->loop = $this->evaluate($loop);

        return $this;
    }

    public function getLoop(): bool
    {
        return $this->loop;
    }

    protected bool $rewind = false;

    public function rewind(bool|Closure $rewind = true): static
    {
        $this->rewind = $this->evaluate($rewind);

        return $this;
    }

    public function getRewind(): bool
    {
        return $this->rewind;
    }

    protected bool $autoHeight = false;

    public function autoHeight(bool|Closure $autoHeight = true): static
    {
        $this->autoHeight = $this->evaluate($autoHeight);

        return $this;
    }

    public function getAutoHeight(): bool
    {
        return $this->autoHeight;
    }

    protected ?array $responsive = null;

    public function responsive(array|Closure|null $responsive): static
    {
        $this->responsive = $this->evaluate($responsive);

        return $this;
    }

    public function getResponsive(): ?array
    {
        return $this->responsive;
    }

    protected bool $lazyLoad = false;

    public function lazyLoad(bool|Closure $lazyLoad = true): static
    {
        $this->lazyLoad = $this->evaluate($lazyLoad);

        return $this;
    }

    public function getLazyLoad(): bool
    {
        return $this->lazyLoad;
    }

    protected string $lazyLoadSelector = '.tns-lazy-img';

    public function lazyLoadSelector(string|Closure $lazyLoadSelector): static
    {
        $this->lazyLoadSelector = $this->evaluate($lazyLoadSelector);

        return $this;
    }

    public function getLazyLoadSelector(): string
    {
        return $this->lazyLoadSelector;
    }

    protected bool $touch = true;

    public function touch(bool|Closure $touch): static
    {
        $this->touch = $this->evaluate($touch);

        return $this;
    }

    public function getTouch(): bool
    {
        return $this->touch;
    }

    /**
     * Using this option causes bugs when used with controls.
     */
    protected bool $mouseDrag = false;

    public function mouseDrag(bool|Closure $mouseDrag = true): static
    {
        $this->mouseDrag = $this->evaluate($mouseDrag);

        return $this;
    }

    public function getMouseDrag(): bool
    {
        return $this->mouseDrag;
    }

    protected ?int $swipeAngle = 15;

    /**
     * @throws MustBePositiveIntegerException
     */
    public function swipeAngle(int|Closure|null $swipeAngle): static
    {
        $resolvedValue = $this->evaluate($swipeAngle);

        if (is_int($resolvedValue) && $resolvedValue < 0) {
            throw new MustBePositiveIntegerException('Swipe angle must not be negative.');
        }

        $this->swipeAngle = $resolvedValue;

        return $this;
    }

    public function getSwipeAngle(): ?int
    {
        return $this->swipeAngle;
    }

    protected bool $preventActionWhenRunning = false;

    public function preventActionWhenRunning(bool|Closure $preventActionWhenRunning = true): static
    {
        $this->preventActionWhenRunning = $this->evaluate($preventActionWhenRunning);

        return $this;
    }

    public function getPreventActionWhenRunning(): bool
    {
        return $this->preventActionWhenRunning;
    }

    protected ?PreventScrollOnTouch $preventScrollOnTouch = null;

    public function preventScrollOnTouch(PreventScrollOnTouch|Closure|null $preventScrollOnTouch): static
    {
        $this->preventScrollOnTouch = $this->evaluate($preventScrollOnTouch);

        return $this;
    }

    public function getPreventScrollOnTouch(): ?PreventScrollOnTouch
    {
        return $this->preventScrollOnTouch;
    }

    protected ?Nested $nested = Nested::INNER;

    public function nested(Nested|Closure|null $nested): static
    {
        $this->nested = $this->evaluate($nested);

        return $this;
    }

    public function getNested(): ?Nested
    {
        return $this->nested;
    }

    protected bool $freezable = true;

    public function freezable(bool|Closure $freezable): static
    {
        $this->freezable = $this->evaluate($freezable);

        return $this;
    }

    public function getFreezable(): bool
    {
        return $this->freezable;
    }

    protected bool $disable = false;

    public function disable(bool|Closure $disable = true): static
    {
        $this->disable = $this->evaluate($disable);

        return $this;
    }

    public function getDisable(): bool
    {
        return $this->disable;
    }

    protected int $startIndex = 0;

    public function startIndex(int|Closure $startIndex): static
    {
        $this->startIndex = $this->evaluate($startIndex);

        return $this;
    }

    public function getStartIndex(): int
    {
        return $this->startIndex;
    }

    protected string $onInit = '() => {}';

    public function onInit(string|Closure $onInit): static
    {
        $this->onInit = $this->evaluate($onInit);

        return $this;
    }

    public function getOnInit(): string
    {
        return $this->onInit;
    }

    protected bool $useLocalStorage = true;

    public function useLocalStorage(bool|Closure $useLocalStorage): static
    {
        $this->useLocalStorage = $this->evaluate($useLocalStorage);

        return $this;
    }

    public function getUseLocalStorage(): bool
    {
        return $this->useLocalStorage;
    }

    protected ?string $nonce = null;

    public function nonce(string|Closure|null $nonce): static
    {
        $this->nonce = $this->evaluate($nonce);

        return $this;
    }

    public function getNonce(): ?string
    {
        return $this->nonce;
    }
}
