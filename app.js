// DOM objects
const mainScreen = document.querySelector('.main-screen');
const mountName = document.querySelector('.mount-name');
const mountId = document.querySelector('.mount-id');
const mountFrontImage = document.querySelector('.mount-front-image');
const mountWeight = document.querySelector('.mount-weight');
const mountHeight = document.querySelector('.mount-height');
const MountDescription = document.querySelector('.mount-description');
const tooltip = document.querySelector('.tooltip');
const mountListItems = document.querySelectorAll('.list-item');
console.log(mountListItems);


fetch('https://ffxivcollect.com/api/mounts/1')
    .then(res => {
        return   res.json();
    })
    .then(data => {
        console.log(data);
        mainScreen.classList.remove('hide');
        mountName.textContent = data['name'];
        mountId.textContent = '#' + data['id'].toString().padStart(3,0,0);
        mountWeight.textContent = data['movement'];
        mountHeight.textContent = data['seats'];
        MountDescription.textContent = data['description'];
        tooltip.textContent = data['tooltip'];


        mountFrontImage.src = data['image'];

    });



// Get data for right side of screen


fetch('https://ffxivcollect.com/api/mounts')
    .then(res => {
        return   res.json();
    })
    .then(data => {
        console.log(data);
        const { results } = data;

        console.log(results)

        for (let i = 0; i < mountListItems.length ; i++) {
            const mountListItem = mountListItems[i];
            const resultData = results[i];


            if (resultData) {
                const { name } = resultData;
                mountListItem.textContent = (name);
            } else {
                mountListItem.textContent = '';
            }
        }

    });

