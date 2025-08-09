// Hacker Style JavaScript

// ScrambleText functionality
document.addEventListener('DOMContentLoaded', function() {
    const DEFAULT_CHARS = "!<>-_\\/[]{}—=+*^?";
    const STEP_MS = 30;
    const SCRAMBLE_RANGE = 3; // Number of characters to scramble on each side of the cursor
    const SCRAMBLE_DURATION_MS = 350; // Duration in ms before scramble effect stops
    
    // Find all scramble-text elements
    const scrambleElements = document.querySelectorAll('.scramble-text');
    
    scrambleElements.forEach(element => {
        // Store original text
        const originalChars = [];
        const charElements = element.querySelectorAll('.scramble-text__char');
        
        charElements.forEach(charEl => {
            originalChars.push(charEl.innerHTML);
        });
        
        let isHovering = false;
        let animationFrameId = null;
        let timeoutId = 1.8;
        let currentMouseX = 0;
        
        // Get a random character from the set
        function getRandomChar() {
            return DEFAULT_CHARS[Math.floor(Math.random() * DEFAULT_CHARS.length)];
        }
        
        // Get the character index closest to the mouse position
        function getCharIndexAtPosition(mouseX) {
            const elementRect = element.getBoundingClientRect();
            const relativeX = mouseX - elementRect.left;
            
            // Find the character element closest to the mouse position
            let closestIndex = 0;
            let closestDistance = Infinity;
            
            charElements.forEach((charEl, index) => {
                const charRect = charEl.getBoundingClientRect();
                const charCenter = charRect.left + charRect.width / 2 - elementRect.left;
                const distance = Math.abs(relativeX - charCenter);
                
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });
            
            return closestIndex;
        }
        
        // Main animation function
        function runScramble() {
            const startTime = performance.now();
            let isScrambling = true;
            
            function tick(timestamp) {
                // Check if we've exceeded the scramble duration
                const elapsed = timestamp - startTime;
                if (elapsed > SCRAMBLE_DURATION_MS) {
                    isScrambling = false;
                }
                
                // Get the current center index based on mouse position
                const centerIndex = getCharIndexAtPosition(currentMouseX);
                const startIndex = Math.max(0, centerIndex - SCRAMBLE_RANGE);
                const endIndex = Math.min(originalChars.length - 1, centerIndex + SCRAMBLE_RANGE);
                
                // Reset all characters to original first
                charElements.forEach((charEl, i) => {
                    charEl.innerHTML = originalChars[i];
                });
                
                // Only scramble if we're still within the duration
                if (isScrambling) {
                    // Scramble only characters within range of the mouse
                    for (let i = startIndex; i <= endIndex; i++) {
                        // The closer to the center, the higher chance of scrambling
                        const distanceFromCenter = Math.abs(i - centerIndex);
                        const scrambleChance = 1 - (distanceFromCenter / (SCRAMBLE_RANGE + 1));
                        
                        if (Math.random() < scrambleChance) {
                            charElements[i].innerHTML = getRandomChar();
                        }
                    }
                }
                
                if (isHovering && isScrambling) {
                    animationFrameId = requestAnimationFrame(tick);
                } else {
                    // Ensure final text is correct
                    charElements.forEach((charEl, i) => {
                        charEl.innerHTML = originalChars[i];
                    });
                    animationFrameId = null;
                }
            }
            
            animationFrameId = requestAnimationFrame(tick);
        }
        
        // Track mouse movement over the element
        element.addEventListener('mousemove', (e) => {
            currentMouseX = e.clientX;
            
            // If we're already hovering but not animating, start animation
            if (isHovering && !animationFrameId) {
                runScramble();
            }
        });
        
        // Mouse enter event
        element.addEventListener('mouseenter', (e) => {
            isHovering = true;
            currentMouseX = e.clientX;
            
            let jitterCount = 0;
            
            function jitter() {
                if (!isHovering) return;
                
                // Get current position for each jitter frame
                const centerIndex = getCharIndexAtPosition(currentMouseX);
                const startIndex = Math.max(0, centerIndex - SCRAMBLE_RANGE);
                const endIndex = Math.min(originalChars.length - 1, centerIndex + SCRAMBLE_RANGE);
                
                // Reset all characters to original first
                charElements.forEach((charEl, i) => {
                    charEl.innerHTML = originalChars[i];
                });
                
                // Scramble only characters within range
                for (let i = startIndex; i <= endIndex; i++) {
                    charElements[i].innerHTML = getRandomChar();
                }
                
                jitterCount++;
                
                if (jitterCount < 5) {
                    timeoutId = setTimeout(jitter, STEP_MS);
                } else {
                    runScramble();
                }
            }
            
            jitter();
        });
        
        // Mouse leave event
        element.addEventListener('mouseleave', () => {
            isHovering = false;
            
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
            
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
            
            // Reset to original text
            charElements.forEach((charEl, i) => {
                charEl.innerHTML = originalChars[i];
            });
        });
    });
});

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
        
        // Create and add close button to popup content
        const closeButton = document.createElement('button');
        closeButton.className = 'popup-close-button';
        closeButton.innerHTML = '&times;';
        closeButton.title = 'Close';
        
        // Add close button to the popup content
        const popupContent = popupContainer.querySelector('#popup-content');
        if (popupContent && !popupContent.querySelector('.popup-close-button')) {
            popupContent.insertBefore(closeButton, popupContent.firstChild);
        }
        
        // Close popup only when clicking the close button
        closeButton.addEventListener('click', () => {
            popupContainer.style.display = 'none';
        });
        
        // Close popup when pressing Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && popupContainer.style.display === 'grid') {
                popupContainer.style.display = 'none';
            }
        });
    }
});

// Draggable and resizable functionality for popup
document.addEventListener('DOMContentLoaded', function() {
    const popupContainer = document.getElementById('popup-container');
    const popupContent = document.querySelector('.popup-container .content');
    
    if (!popupContainer || !popupContent) return;
    
    // Prevent popup from closing when clicking on resize handles or content
    popupContainer.addEventListener('click', (event) => {
        // Only close if clicking directly on the container background
        // (not on content or any of the resize handles)
        const isResizeHandle = event.target.className.includes('border');
        const isContent = event.target === popupContent || popupContent.contains(event.target);
        
        if (!isResizeHandle && !isContent) {
            popupContainer.style.display = 'none';
        }
    });
    
    // Initial content dimensions
    let contentWidth = 500; // Default width from inline style
    let contentHeight = 300; // Default minimum height from CSS
    
    // Set initial height if not already set
    if (!popupContent.style.height) {
        popupContent.style.height = contentHeight + 'px';
    }
    
    // Get resize handles (the numbered divs)
    const topResize = popupContainer.querySelector('.border-content-bottom'); // div 2
    const rightResize = popupContainer.querySelector('.border-content-left'); // div 6
    const bottomResize = popupContainer.querySelector('.border-content-top'); // div 8
    const leftResize = popupContainer.querySelector('.border-content-right'); // div 4
    
    // Corner divs for diagonal resizing
    const topLeftResize = popupContainer.querySelector('.border-bottom.border-right'); // div 1
    const topRightResize = popupContainer.querySelector('.border-bottom.border-left'); // div 3
    const bottomLeftResize = popupContainer.querySelector('.border-right.border-top'); // div 7
    const bottomRightResize = popupContainer.querySelector('.border-left.border-top'); // div 9
    
    // Add resize cursor styles
    if (topResize) topResize.style.cursor = 'n-resize';
    if (rightResize) rightResize.style.cursor = 'e-resize';
    if (bottomResize) bottomResize.style.cursor = 's-resize';
    if (leftResize) leftResize.style.cursor = 'w-resize';
    if (topLeftResize) topLeftResize.style.cursor = 'nw-resize';
    if (topRightResize) topRightResize.style.cursor = 'ne-resize';
    if (bottomLeftResize) bottomLeftResize.style.cursor = 'sw-resize';
    if (bottomRightResize) bottomRightResize.style.cursor = 'se-resize';
    
    // Helper function for resize event handling
    function setupResizeHandler(element, resizeCallback) {
        if (!element) return;
        
        element.addEventListener('mousedown', e => {
            e.stopPropagation(); // Prevent event from bubbling to container
            e.preventDefault(); // Prevent default behavior
            
            // Add mousemove event listener
            document.addEventListener('mousemove', resizeCallback);
            
            // Add mouseup event listener that removes the mousemove listener
            document.addEventListener('mouseup', function cleanUp(e) {
                e.stopPropagation(); // Prevent event from bubbling to container
                document.removeEventListener('mousemove', resizeCallback);
                document.removeEventListener('mouseup', cleanUp);
            });
        });
    }
    
    // Draggable functionality
    popupContent.addEventListener('mousedown', e => {
        // Only allow dragging from the header area, not the entire content
        const isHeader = e.target.tagName === 'H2' || 
                         (e.target.parentElement && e.target.parentElement.tagName === 'H2');
        
        if (!isHeader && e.target.className !== 'popup-close-button') return;
        
        e.stopPropagation();
        const startX = e.clientX;
        const startY = e.clientY;
        const startLeft = parseInt(window.getComputedStyle(popupContent).left, 10) || 0;
        const startTop = parseInt(window.getComputedStyle(popupContent).top, 10) || 0;
        
        const moveCallback = function(e) {
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            popupContent.style.left = `${startLeft + dx}px`;
            popupContent.style.top = `${startTop + dy}px`;
        };
        
        document.addEventListener('mousemove', moveCallback);
        document.addEventListener('mouseup', function cleanUp(e) {
            e.stopPropagation(); // Prevent event from bubbling to container
            document.removeEventListener('mousemove', moveCallback);
            document.removeEventListener('mouseup', cleanUp);
        });
    });
    
    // Resize functionality - Vertical (top)
    setupResizeHandler(topResize, function(e) {
        const dy = startY - e.clientY;
        contentHeight = startHeight + dy;
        if (contentHeight > 100) { // Minimum height
            popupContent.style.height = `${contentHeight}px`;
        }
    });
    
    // Resize functionality - Vertical (bottom)
    setupResizeHandler(bottomResize, function(e) {
        const dy = e.clientY - startY;
        contentHeight = startHeight + dy;
        if (contentHeight > 100) { // Minimum height
            popupContent.style.height = `${contentHeight}px`;
        }
    });
    
    // Resize functionality - Horizontal (left)
    setupResizeHandler(leftResize, function(e) {
        const dx = startX - e.clientX;
        contentWidth = startWidth + dx;
        if (contentWidth > 200) { // Minimum width
            popupContent.style.width = `${contentWidth}px`;
        }
    });
    
    // Resize functionality - Horizontal (right)
    setupResizeHandler(rightResize, function(e) {
        const dx = e.clientX - startX;
        contentWidth = startWidth + dx;
        if (contentWidth > 200) { // Minimum width
            popupContent.style.width = `${contentWidth}px`;
        }
    });
    
    // Diagonal resize handlers for corners
    // Top-left corner (div 1)
    setupResizeHandler(topLeftResize, function(e) {
        const dx = startX - e.clientX;
        const dy = startY - e.clientY;
        contentWidth = startWidth + dx;
        contentHeight = startHeight + dy;
        if (contentWidth > 200) popupContent.style.width = `${contentWidth}px`;
        if (contentHeight > 100) popupContent.style.height = `${contentHeight}px`;
    });
    
    // Top-right corner (div 3)
    setupResizeHandler(topRightResize, function(e) {
        const dx = e.clientX - startX;
        const dy = startY - e.clientY;
        contentWidth = startWidth + dx;
        contentHeight = startHeight + dy;
        if (contentWidth > 200) popupContent.style.width = `${contentWidth}px`;
        if (contentHeight > 100) popupContent.style.height = `${contentHeight}px`;
    });
    
    // Bottom-left corner (div 7)
    setupResizeHandler(bottomLeftResize, function(e) {
        const dx = startX - e.clientX;
        const dy = e.clientY - startY;
        contentWidth = startWidth + dx;
        contentHeight = startHeight + dy;
        if (contentWidth > 200) popupContent.style.width = `${contentWidth}px`;
        if (contentHeight > 100) popupContent.style.height = `${contentHeight}px`;
    });
    
    // Bottom-right corner (div 9)
    setupResizeHandler(bottomRightResize, function(e) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        contentWidth = startWidth + dx;
        contentHeight = startHeight + dy;
        if (contentWidth > 200) popupContent.style.width = `${contentWidth}px`;
        if (contentHeight > 100) popupContent.style.height = `${contentHeight}px`;
    });
    
    // Variables for resize operations
    let startX, startY, startWidth, startHeight;
    
    // Initialize these variables on mousedown for any resize handle
    popupContainer.querySelectorAll('.border-bottom, .border-top, .border-left, .border-right, .border-content-bottom, .border-content-top, .border-content-left, .border-content-right').forEach(handle => {
        handle.addEventListener('mousedown', e => {
            startX = e.clientX;
            startY = e.clientY;
            startWidth = parseInt(window.getComputedStyle(popupContent).width, 10);
            startHeight = parseInt(window.getComputedStyle(popupContent).height, 10);
        });
    });
});