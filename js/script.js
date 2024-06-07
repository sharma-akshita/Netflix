const arrowLeft = document.querySelector('.arrow-left');
        const arrowRight = document.querySelector('.arrow-right');
        const box3 = document.querySelector('.box-3');

        let start = 0;
        let end = 4;

        function moveImages() {
            if (start < 0) start = 0;
            if (end > box3.children.length) end = box3.children.length;

            for (let i = 0; i < box3.children.length; i++) {
                if (i >= start && i < end) {
                    box3.children[i].style.display = 'block';
                } else {
                    box3.children[i].style.display = 'none';
                }
            }
        }

        arrowLeft.addEventListener('click', () => {
            start -= 4;
            end -= 4;
            moveImages();
        });

        arrowRight.addEventListener('click', () => {
            start += 4;
            end += 4;
            moveImages();
        });