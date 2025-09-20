
export function getImageUrl(imageName,external,fileType){
    let path;

    if(external == "y"){
        path = '../external/' + imageName + fileType;
    }else{
        path = '../' + imageName + fileType;
    }

    console.log(path);
    
    return(
        path
    )
}