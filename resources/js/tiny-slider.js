import { tns } from 'tiny-slider/src/tiny-slider';
import '../css/tiny-slider.css'

export default function tinySlider({
    options = {},
    onInit = () => {},
    onTransitionEndCallback = () => {},
    offTransitionEndCallback = () => {},
}) {
    return {
        init() {
            const tinySlider = tns({
                container: this.$refs.tinySlider,
                onInit,
                ...options
            });

            tinySlider.events.on('transitionEnd', onTransitionEndCallback);
            tinySlider.events.off('transitionEnd', offTransitionEndCallback);
        },
    };
}
