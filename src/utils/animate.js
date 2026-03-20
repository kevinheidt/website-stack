// utils/animate.js
// A simple animation utility for number counting

export function animate({
    from,
    to,
    duration,
    onUpdate,
    onComplete,
    ease = (t) => t, // linear ease by default
}) {
    let start = performance.now();
    let frame;

    const tick = (now) => {
        let elapsed = now - start;
        let progress = Math.min(elapsed / duration, 1);
        let easedProgress = ease(progress);

        onUpdate(from + (to - from) * easedProgress);

        if (progress < 1) {
            frame = requestAnimationFrame(tick);
        } else {
            if (onComplete) onComplete();
        }
    };

    frame = requestAnimationFrame(tick);

    return {
        stop() {
            cancelAnimationFrame(frame);
        },
    };
}
