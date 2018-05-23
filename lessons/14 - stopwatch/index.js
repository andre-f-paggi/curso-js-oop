// Constructor function
function Stopwatch() {
    let running = false;

    let startedTimestamp;
    let stoppedTimestamp;

    let duration = 0;

    this.start = () => {
        if (running)
            throw new Error("Stopwatch has already started!");

        running = true;
        startedTimestamp = new Date();
    };

    this.stop = () => {
        if (!running)
            throw new Error("Stopwatch is not started!");

        stoppedTimestamp = new Date();
        duration += (stoppedTimestamp - startedTimestamp) / 1000;
        running = false;
    };

    this.reset = () => {
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: () => duration,
        set: () => { throw new Error('Cannot set duration property of stopwatch') }
    });
}