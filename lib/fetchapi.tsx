
export interface BookData {
    volumeInfo: {
        title: string,
        authors?: string[],
        imageLinks?: {
            smallThumbnail: string,
            thumbnail: string
        },
        description?: string
    
    }
}


interface apiResponse {
    items: BookData[];
}

const url = `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=20&startIndex=0&printType=books`;

export const fetchFiction = async() => {

    
    const response = await fetch(url);

    // error handling for if we can't get the data AND WHY
    if (!response.ok) {
        console.log(`Error fetching data ${response.status}`);
        throw new Error(`Error fetching data ${response.status}`);
    }

    // accessing the raw book with all data
    const data:apiResponse = await response.json();
    const bookData: BookData[] = data.items;

    // accessing the first book with the item data
    return bookData;
}











export const fetchFictionData = async() => {

    const response = await fetch(url);

    // error handling for if we can't get the data AND WHY
    if (!response.ok) {
        console.log(`Error fetching data ${response.status}`);
        throw new Error(`Error fetching data ${response.status}`);
    }

    // accessing the raw book with all data
    const data:apiResponse = await response.json();
    console.log(data.items[0].volumeInfo.imageLinks?.smallThumbnail);

    // accessing the first book with the item data
    return data.items[0].volumeInfo.imageLinks?.smallThumbnail;

}