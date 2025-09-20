
export function getImageUrl(imageName,external,fileType){
    let path;

    if(external == "y"){
        path = '../public/external/' + imageName + fileType;
    }else{
        path = '../public/' + imageName + fileType;
    }

    console.log(path);
    
    return(
        path
    )
}