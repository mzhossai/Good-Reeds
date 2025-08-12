import { View, Image } from 'react-native'
import { Text, Button } from 'react-native-paper';


interface BookCardProps {
    title: string,
    author?: string[],
    image?: string,
    description?: string
}


export default function BookCard({ title, author, image, description }: BookCardProps) {


  // truncate title
  if (title.length > 34) {
    title = title.slice(0, 33) + "...";
  }

  // truncate description
  if (description!.length > 70) {
    description = description!.slice(0, 100) + "...";
  }


  return (
    <View
      style={{
        marginBottom: 30,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        width: 370,
        height: 230,
        backgroundColor: "#F2EDE4",
        boxShadow: "0px 8px 4px rgba(0, 0, 0, 0.25)",
        borderWidth: 4,
        borderColor: "#403A2F",}}>
      
      
      {/* IMAGE */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
  
          width: 118,
          height: 168,
          marginRight: 10,
          
          borderRadius: 10, 
          borderWidth: 4, 
          borderColor: "#403A2F",
          boxShadow: "-3px 8px 4px rgba(0, 0, 0, 0.25)"}}>
        <Image src={image} style={{width: 110, height: 160, borderRadius: 5,}} />
      </View>
      

      {/* TITLE AND AUTHOR */}
      <View style={{maxWidth: 200, height: 170}}>
        <Text style={{
            fontFamily: "serif",
            fontSize: 20,
            maxWidth: 200,
            fontWeight: "bold",
            color: "#403A2F"}}>
          {title}
        </Text>

        <Text style={{fontFamily: "serif" }}>
          by <Text style={{fontStyle: "italic", fontWeight: "bold"}}>{author? author: "Unknown" } </Text>
        </Text>

        <Text style={{marginTop: 10, fontFamily: "serif", maxHeight: 100}}>
          {description}
        </Text>

      </View>

      

    </View>
  )
}

