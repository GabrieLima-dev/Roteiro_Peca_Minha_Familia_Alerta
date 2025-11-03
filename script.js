
        function showSection(sectionId) {
            // Remove active class from all sections and buttons
            const sections = document.querySelectorAll('.section');
            const buttons = document.querySelectorAll('nav button');

            sections.forEach(section => section.classList.remove('active'));
            buttons.forEach(button => button.classList.remove('active'));

            // Add active class to selected section and button
            document.getElementById(sectionId).classList.add('active');
            event.target.classList.add('active');

            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Add keyboard navigation
        document.addEventListener('keydown', function(e) {
            const sections = ['overview', 'ato1', 'ato2', 'ato3', 'dicas'];
            const currentSection = document.querySelector('.section.active').id;
            const currentIndex = sections.indexOf(currentSection);

            if (e.key === 'ArrowRight' && currentIndex < sections.length - 1) {
                const nextButton = document.querySelector(`button[onclick="showSection('${sections[currentIndex + 1]}')"]`);
                nextButton.click();
            } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
                const prevButton = document.querySelector(`button[onclick="showSection('${sections[currentIndex - 1]}')"]`);
                prevButton.click();
            }
        });

        // Add smooth transitions
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.style.transition = 'all 0.3s ease';
            });
        });