export const getDataFromApi = async () => {
    return await fetch("http://194.110.54.230:8080/api/all")
        .catch(() => {
            throw new Error('aaa')
        })
}

export const postDataToApi = async (data) => {
    let postData = JSON.stringify(data)
    let response = await fetch(`http://194.110.54.230:8080/api/energy?userDevices`, {
        method: "POST",
        body: postData,
        headers: {
            "Content-Type": "application/json",
        },
    })
        .catch(() => {
            throw new Error('aaa')
        })
    return response;
}