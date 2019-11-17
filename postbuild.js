const fse = require('fs-extra');

const folderBuilds = '../build'
if(!fse.existsSync(folderBuilds)){
    fse.mkdirsSync(folderBuilds)
}else{
    fse.removeSync(folderBuilds)
    fse.mkdirsSync(folderBuilds)
}

fse.move('./build', '../build/', {overwrite:true}, err=>{
    if (err) 
    return console.error(err)

    console.log('Success')
})