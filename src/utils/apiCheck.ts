export const  checkApiResponse = (res: Response) => {
    if (!res.ok) {
        throw `Произошла ошибка ${res.status}`
    }
    return res.json();
}