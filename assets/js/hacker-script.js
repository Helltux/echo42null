// Hacker Style JavaScript

// Cursor functionality
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        const cursorWidth = cursor.offsetWidth;
        const cursorHeight = cursor.offsetHeight;

        cursor.style.top = (e.clientY - cursorHeight / 2) + 'px';
        cursor.style.left = (e.clientX - cursorWidth / 2) + 'px';
    });
});

// Popup functionality
document.addEventListener('DOMContentLoaded', function() {
    // Find all elements with the popup-trigger class
    const popupTriggers = document.querySelectorAll('.popup-trigger');
    const popupContainer = document.getElementById('popup-container');
    
    if (popupContainer) {
        const content = popupContainer.querySelector('.content');
        
        // Add click event to all popup triggers
        popupTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                popupContainer.style.display = 'grid';
            });
        });
        
        // Close popup when clicking outside content
        popupContainer.addEventListener('click', (event) => {
            if (content && (event.target !== content && !content.contains(event.target))) {
                popupContainer.style.display = 'none';
            }
        });
    }
});

// Draggable functionality for popup content
document.addEventListener('DOMContentLoaded', function() {
    const popupContent = document.querySelector('.popup-container .content');
    
    if (popupContent) {
        popupContent.addEventListener('mousedown', e => {
            const moveCallback = function(e) {
                // Implement dragging functionality if needed
                console.log('Dragging', e.clientX, e.clientY);
            };
            
            document.addEventListener('mousemove', moveCallback);
            
            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', moveCallback);
            }, { once: true });
        });
    }
});