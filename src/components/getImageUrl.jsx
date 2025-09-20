export function getImageUrl(imageName,external){
    if(external == "y"){
        return(
            './assets/external/' +
            imageName +
            '.jpg'
        );
    }else{
        return(
            './assets/' +
            imageName +
            '.jpg'
        );
    }
}