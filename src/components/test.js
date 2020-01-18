import getNormalDistribution from 'get-normal-distribution';

// TODO: Refactor these horrible globals to function args.
let plays = [];
let maxTime = 0;

const choice = (values, probabilites) => {
    // TODO: Implement probability selection
    return values[0];
};

const createStartEndPairs = () => {
    for (let index = 0; index < 100; index++) {
        const chance = choice([0, 1, 2], [0.6, 0.3, 0.1]);
    
        let start = 0;
        let end = 0;
    
        if(!chance) {
            const a = Math.abs(getNormalDistribution(0, 5, 2));
            const b = Math.abs(getNormalDistribution(0, 5, 2));
    
            if(a === b) {
                continue;
            } else if (a < b) {
                start = a;
                end = b;
            } else {
                start = b;
                end = a;
            }
        } else if (chance === 1) {
            const a = Math.abs(getNormalDistribution(45, 5, 2));
            const b = Math.abs(getNormalDistribution(45, 5, 2));
    
            if (a < b) {
                start = a;
                end = b;
            } else {
                start = b;
                end = a;
            }
        } else if (chance === 2) {
            const a = Math.abs(getNormalDistribution(0, 15, 1));
            const b = Math.abs(getNormalDistribution(45, 15, 1));
    
            if (a < b) {
                start = a;
                end = b;
            } else {
                start = b;
                end = a;
            }
        }
    
        plays.push({ start, end });
        maxTime = Math.max(maxTime, end);
    }
}

// Don't really know what to call this the Python doesn't have a function name.
const createArrayWithSameLengthAsSong = () => {
    let counts = Array.fill(array, 0, 0, array.length);

    for (const play of plays) {
        const [start, end] = play;

        while (start < end) {
            counts[start] = counts[start] + 1;
            start = start + 1;
        }
    }

    return counts;
}