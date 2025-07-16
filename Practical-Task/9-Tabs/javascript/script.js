document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.content');

    // console.log(tabContents);

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // console.log(button.textContent);
            const targetContent = document.querySelector(`#${button.textContent.toLowerCase()}`);

            console.log(targetContent);


            // active :- display: flex;
            // selected :- background-color, text colro change on selection

            // remove the active class from all the btn content elements
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // remove the active and selected class from all the buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.remove('selected');
            });

            // add the active class to the target content
            targetContent.classList.add('active');

            // add the active and selected class to the target button
            button.classList.add('active');
            button.classList.add('selected');
        });
    });
});