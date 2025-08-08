// Simple hover effect for team members
document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        // Change background color on hover
        member.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#ffdafc';
        });
        
        // Change back when mouse leaves
        member.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'white';
        });
    });
});