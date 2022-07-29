export const  checkApiResponse = (res) => {
    if (!res.ok) {
        throw `Произошла ошибка ${res.status}`
    }
    return res.json();
}