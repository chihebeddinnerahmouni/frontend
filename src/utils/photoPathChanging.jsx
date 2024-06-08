function convertToLocalServerPath(filePath) {
    const localFilePathPrefix =
        "C:\\Users\\Administrator\\Desktop\\backend\\src\\images\\";
    const serverUrl = "http://localhost:3000/images/";
    if (filePath && filePath.startsWith(localFilePathPrefix)) {
        const relativeFilePath = filePath.slice(localFilePathPrefix.length);
        const fileName = relativeFilePath.replace("\\src\\images\\", "");
        const newPath = serverUrl + fileName;
        return newPath;
    }
    return filePath;
}

export default convertToLocalServerPath;