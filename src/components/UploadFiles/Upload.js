import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

function Upload() {
    const maxSize = 1048576;
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files


        console.log(acceptedFiles);
    }, [])
    const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles, rejectedFiles } = useDropzone({
        onDrop,
        accept: 'image/png, image/jpeg, image/jpg',
        minSize: 0,
        maxSize,
    });
    const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {!isDragActive && 'Click here or drop a file to upload!'}
            {isDragActive && !isDragReject && "Drop it like it's hot!"}
            {isDragReject && "File type not accepted, sorry!"}
            {isFileTooLarge && (
                <div className="text-danger mt-2">
                    File is too large.
          </div>
            )}
            <ul className="list-group mt-2">
                {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
                    <li className="list-group-item list-group-item-success">
                        {acceptedFile.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Upload;


