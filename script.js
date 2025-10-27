// Load and display presentations from presentations.json
document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('presentations-container');
    
    try {
        const response = await fetch('presentations.json');
        
        if (!response.ok) {
            throw new Error('Failed to load presentations');
        }
        
        const presentations = await response.json();
        
        // Sort presentations by date (oldest first, upcoming presentations)
        presentations.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        // Clear loading message
        container.innerHTML = '';
        
        if (presentations.length === 0) {
            container.innerHTML = `
                <div class="no-presentations">
                    <h3>No presentations scheduled yet</h3>
                    <p>Be the first to submit a presentation!</p>
                </div>
            `;
            return;
        }
        
        // Get current date for comparison
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        
        // Render each presentation
        presentations.forEach((presentation, index) => {
            // Parse date as local time to avoid timezone issues
            const [year, month, day] = presentation.date.split('-').map(num => parseInt(num, 10));
            const presentationDate = new Date(year, month - 1, day);
            const isPast = presentationDate < now;
            
            const card = createPresentationCard(presentation, isPast);
            container.appendChild(card);
        });
        
    } catch (error) {
        console.error('Error loading presentations:', error);
        container.innerHTML = `
            <div class="no-presentations">
                <h3>Error loading presentations</h3>
                <p>Please try again later or check the console for details.</p>
            </div>
        `;
    }
});

/**
 * Create a presentation card element
 */
function createPresentationCard(presentation, isPast = false) {
    const card = document.createElement('div');
    card.className = 'presentation-card';
    
    // If presentation is in the past, add a visual indicator
    if (isPast) {
        card.style.opacity = '0.7';
    }
    
    // Format date
    const formattedDate = formatDate(presentation.date);
    
    // Create card HTML
    card.innerHTML = `
        <div class="presentation-header">
            <div class="presentation-date">
                ${formattedDate}
                ${isPast ? ' (Past)' : ''}
            </div>
            <div class="presentation-presenter">
                Presenter: ${escapeHtml(presentation.presenter)}
            </div>
        </div>
        
        <h3 class="presentation-title">
            ${escapeHtml(presentation.title)}
        </h3>
        
        <p class="presentation-abstract">
            ${escapeHtml(presentation.abstract)}
        </p>
        
        ${presentation.links && presentation.links.length > 0 ? `
            <div class="presentation-links">
                ${presentation.links.map(link => `
                    <a href="${escapeHtml(link.url)}" 
                       class="presentation-link" 
                       target="_blank" 
                       rel="noopener noreferrer">
                        ${escapeHtml(link.title)}
                    </a>
                `).join('')}
            </div>
        ` : ''}
    `;
    
    return card;
}

/**
 * Format date string to readable format
 */
function formatDate(dateString) {
    // Parse date as local time to avoid timezone issues
    const [year, month, day] = dateString.split('-').map(num => parseInt(num, 10));
    const date = new Date(year, month - 1, day);
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Filter presentations by status (upcoming, past, all)
 */
function filterPresentations(status = 'all') {
    // This function can be extended to add filtering functionality
    console.log('Filter by:', status);
}

