/*
Notes:

  Try adding pages to
*/









import { View, Text, ScrollView, Image, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import {fetchFiction, BookData, fetchFictionData} from '@/lib/fetchapi'
import BookCard from '@/components/BookCard';

export default function FictionBooks() {

  

    const [books, setBooks] = useState<BookData[]>([]);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [error, setError] = useState<string | null>(null);

    


    useEffect(() => {
      setLoading(true);
      setError(null);
      handleButtonPress();
    }, []);
    const handleButtonPress = async() => {
      const allBooks: BookData[] = await fetchFiction();

      setBooks(allBooks);
      setLoading(false);
    }




    const handleButton2Press = async() => {
      const thumbnail = await fetchFictionData();
      return thumbnail;
    }



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FAF7F0"}}>
          <StatusBar barStyle="light-content"/>
          <ScrollView 
            style={{ flex: 1, backgroundColor: "#FAF7F0"}}
            contentContainerStyle={{justifyContent: "center", alignItems: "center"}}
            showsVerticalScrollIndicator={false}>
            
            {loading ? 
              (
                <View 
                    style={{
                        height: window.innerHeight*0.865,
                        width: window.innerWidth*0.9,
                        justifyContent: "center"
                      }}>
                    <ActivityIndicator 
                        color={"#BA8934"}
                        size={60}
                    />
                </View>
              ) : (


                    <SafeAreaView style={{ marginHorizontal: 10, maxWidth: window.innerWidth*0.9}}>
                      {
                      books.map((book, index) => (
                        <View key={index}>
                          <BookCard 
                            title={book.volumeInfo.title} 
                            image={book.volumeInfo.imageLinks?.thumbnail? book.volumeInfo.imageLinks.thumbnail : "https://media.gettyimages.com/id/1409858441/photo/man-shows-the-blank-pages-of-a-book.jpg?s=612x612&w=gi&k=20&c=c0y9nJ5mPz-bpWnAJbTtNnAWQiXfH257YctybHmXQYk="}
                            author={book.volumeInfo.authors}
                            description={book.volumeInfo.description }>
                          </BookCard>
                        </View>
                      ))
                      }
                    </SafeAreaView>



                    // <SafeAreaView>
                    //   {books.map((book, index) => (
                    //     <View key={index}>
                    //       <Text>{index+1} {book.volumeInfo.title}</Text>
                    //       <Text>    by {book.volumeInfo.authors}</Text>
                    //       <Text></Text>
                    //     </View>
                    //   ))}
                    // </SafeAreaView>

                  )
            }


          </ScrollView>
        </SafeAreaView>
    );
  }
