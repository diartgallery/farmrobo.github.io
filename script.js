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

        // Change robot image to match the hovered tool
        const toolImage = tool.querySelector('img').src; // Get the tool image
        robotImage.src = toolImage.replace('tool', 'robot_with_tool'); // Replace part of the filename to match your robot image naming convention

        // Show the tooltip with tool name and specifications
        tooltip.innerText = `${toolName}\n${toolSpecs}`;
        tooltip.style.display = 'block';
    });

    tool.addEventListener('mouseleave', () => {
        // Reset blurring for all tools
        tools.forEach(t => {
            t.style.filter = 'none';
        });

        // Reset robot image back to default
        robotImage.src = 'default_robot.png'; // Set to your default robot image path

        // Hide the tooltip
        tooltip.style.display = 'none';
    });
});

