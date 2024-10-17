const tools = document.querySelectorAll('.tool');
const robotImage = document.getElementById('robotImage');
const tooltip = document.getElementById('tooltip');

tools.forEach(tool => {
    tool.addEventListener('mouseenter', () => {
        const toolName = tool.getAttribute('data-name');
        const toolSpecs = tool.getAttribute('data-specs');
        
        // Blur other tools
        tools.forEach(t => {
            if (t !== tool) {
                t.style.filter = 'blur(4px)';
            }
        });

        // Change robot image
        robotImage.src = tool.querySelector('img').src.replace('tool', 'robot_with_tool'); // Change image path accordingly

        // Show tooltip
        tooltip.innerText = `${toolName}\n${toolSpecs}`;
        tooltip.style.display = 'block';
    });

    tool.addEventListener('mouseleave', () => {
        // Reset blurring
        tools.forEach(t => {
            t.style.filter = 'none';
        });

        // Reset robot image
        robotImage.src = 'default_robot.png'; // Change to your default robot image

        // Hide tooltip
        tooltip.style.display = 'none';
    });
});
