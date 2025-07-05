var url = 'https://api.artic.edu/api/v1/artworks?page=25';

fetch(url)
.then((response) => {
    return response.json();
})
.then((result) => {
    console.log(result);

    var body = document.querySelector('body');

    for (let i = 0; i < result['data'].length; i++) {
        if(result['data'][i]['image_id'] != null) {
            var img_id = result['data'][i]['image_id'];
            var img_source = `https://www.artic.edu/iiif/2/${img_id}/full/843,/0/default.jpg`
            var img_element = document.createElement('img');

            var title = result ['data'] [i] ['title'];
            var title_element = document.createElement ('h1');
            title_element.innerText = title
            body.appendChild(title_element);

            var description = result ['data'] [i] ['publication_history'];
            var description_element = document.createElement ('h1');
            description_element.innerText = description;
            body.appendChild(description_element)
            




            img_element.src = img_source;
            body.appendChild(img_element);
        }
    }
});