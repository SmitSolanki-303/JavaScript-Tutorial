document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.content');

    console.log(tabContents);

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {+
            console.log(button.textContent);
            const targetContent = document.querySelector(`#${button.textContent.toLowerCase()}`);

            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.remove('selected');
            });

            targetContent.classList.add('active');
            button.classList.add('active');
            button.classList.add('selected');
        });
    });
});