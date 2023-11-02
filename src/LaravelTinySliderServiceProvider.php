<?php

namespace Ejgandelaberon\LaravelTinySlider;

use Illuminate\Support\Facades\Blade;
use Spatie\LaravelPackageTools\Commands\InstallCommand;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class LaravelTinySliderServiceProvider extends PackageServiceProvider
{

    public function configurePackage(Package $package): void
    {
        $package
            ->name('laravel-tiny-slider')
            ->hasConfigFile('tiny-slider')
            ->hasViews()
            ->hasAssets()
            ->hasInstallCommand(fn(InstallCommand $command) => $command->publishAssets());
    }

    public function packageBooted(): void
    {
        Blade::directive('tinySliderStyles', function () {
            return "<?php echo \Ejgandelaberon\LaravelTinySlider\Facades\TinySliderAsset::styles(); ?>";
        });
    }
}
