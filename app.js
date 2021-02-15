// DOM objects
const mainScreen = document.querySelector('.main-screen');
const mountName = document.querySelector('.mount-name');
const mountIdNumber = document.querySelector('.mount-id');
const mountFrontImage = document.querySelector('.mount-front-image');
const mountWeight = document.querySelector('.mount-weight');
const mountHeight = document.querySelector('.mount-height');
const MountDescription = document.querySelector('.mount-description');
const tooltip = document.querySelector('.tooltip');
const mountListItems = document.querySelectorAll('.list-item');
const leftButton = document.querySelector('.left-button')
const rightButton = document.querySelector('.right-button')
console.log(mountListItems);

// hard coded initial fetch 

/*fetch('https://ffxivcollect.com/api/mounts/1')
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

    }); */




// function 

const handleRightButtonClick = (e) => {
    console.log(e);
};

const handleListItemClick = (e) => {
    if (!e.target) return;

    const listItem = e.target;
    if (!listItem.textContent) return;

    const mountId = listItem.textContent.split('.')[0];
    fetchMountData(mountId);


};

// Get data for right side of screen


fetch('https://ffxivcollect.com/api/mounts')
    .then(res => {
        return   res.json();
    })
    .then(data => {
        console.log(data);
        const { results } = data;
        results.reverse();
        console.log(results);

// create new array
const mountListResults = results.map 
console.log(mountListResults);


// create seperate array of ids 
const mountId = results.map(results => results.id);

// current page 

let currentPage = mountId.slice(0, 1);


console.log(currentPage); 

        for (let i = 0; i < mountListItems.length ; i++) {
            const mountListItem = mountListItems[i];
            const resultData = results[i];


            if (resultData) {
                const { name, id} = resultData;
                
                mountListItem.textContent = id + '. ' + name;
            } else {
                mountListItem.textContent = '';
            }
        }

    });


const fetchMountData = mountId => {
    fetch(`https://ffxivcollect.com/api/mounts/${mountId}`)
    .then(res => {
        return   res.json();
    })
    .then(data => {
        console.log(data);
        mainScreen.classList.remove('hide');
        mountName.textContent = data['name'];
        mountIdNumber.textContent = '#' + data['id'].toString().padStart(3,0,0);
        mountWeight.textContent = data['movement'];
        mountHeight.textContent = data['seats'];
        MountDescription.textContent = data['description'];
        tooltip.textContent = data['tooltip'];


        mountFrontImage.src = data['image'];

    });
}



// add event listener 


rightButton.addEventListener('click', handleRightButtonClick); 

for (const mountListItem of mountListItems) {
    mountListItem.addEventListener('click', handleListItemClick);
}


