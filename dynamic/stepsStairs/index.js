
function stepsStairs(steps) {
    if( steps <= 1) {
        return 1;
    }
    return stepsStairs( steps - 1) + stepsStairs( steps - 2);
}

module.exports = stepsStairs;
