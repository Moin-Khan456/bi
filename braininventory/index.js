const robot = require('robotjs');

function moveCursorAndKeyPress() {
    // Calculate random X and Y coordinates within the screen
    const screenSize = robot.getScreenSize();
    const newX = Math.floor(Math.random() * screenSize.width + 400);
    const newY = Math.floor(Math.random() * screenSize.height + 400);

    // Move the mouse cursor
    robot.moveMouseSmooth(newX, newY);

    // Simulate Ctrl + Tab key press
    robot.keyToggle('control', 'down');
    robot.keyTap('tab');
    robot.keyToggle('control', 'up');
}

// Move the cursor and press Ctrl + Tab every 3 minutes
setInterval(moveCursorAndKeyPress, 100000);
