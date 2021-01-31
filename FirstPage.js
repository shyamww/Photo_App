import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Image,
  Animated
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';


export default class FirstPageView extends Component {

  constructor() {
    super();
    this.state = {
      query: null,
      listSearched: [],
      listOriginal: [],
    };
  }


  componentDidMount() {
    var Data = [
    
      {
        name: 'India Gate',
        place: 'New Delhi',
        img: {uri: 'https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg'}
      },
      {
        name: 'Agra Fort',
        place: 'Agra, Uttar Pradesh',
        img: {uri: 'https://www.holidify.com/images/cmsuploads/compressed/799px-Agra_FortAgra_India_20200702133907.jpg'},
      },
      {
        name: 'Gateway of India',
        place: 'Mumbai',
        img: {uri: 'https://static.toiimg.com/thumb/msid-29505591,width=1200,height=900/29505591.jpg'}
      },
      {
        name: 'Lotus Temple',
        place: 'New Delhi',
        img: {uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lotus_temple_Delhi.jpg/1200px-Lotus_temple_Delhi.jpg'},
      },
      {
        name: 'Victoria Memorial',
        place: 'Kolkata',
        img: {uri: 'https://assets.telegraphindia.com/telegraph/05648444-7dc7-4c71-9a25-656e98a6a0a0.jpg'},
      },
      {
        name: 'Taj Hotel',
        place: 'Mumbai',
        img: {uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Mumbai_Aug_2018_%2843397784544%29.jpg/1200px-Mumbai_Aug_2018_%2843397784544%29.jpg'},
      },
      {
        name: 'Taj Mahal',
        place: 'Agra, Uttar Pradesh',
        img: {uri: 'https://www.tusktravel.com/blog/wp-content/uploads/2020/02/barack-obama-at-taj-mahal.jpg'},
      },
      {
        name: 'St. George\'s Cathedral',
        place: 'Agra, Uttar Pradesh',
        img: {uri: 'https://media-cdn.tripadvisor.com/media/photo-s/04/c4/f6/bf/front-entrance-and-church.jpg'},
      },
      {
        name: 'Taj Mahal',
        place: 'Agra, Uttar Pradesh',
        img: {uri: 'https://media.timesfreepress.com/img/photos/2020/02/28/1582929351_030220b07-FP-Eyeonleft_gs_t400_h745ace438d57823fd5194c7c0a25a521fce492ea.jpg'},
      },   
      {
        name: 'Agra Fort',
        place: 'Agra, Uttar Pradesh',
        img: {uri: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Agra-Fort_600.jpg'},
      },
      
      {
        name: 'St. George\'s Cathedral',
        place: 'Agra, Uttar Pradesh',
        img: {uri: 'https://www.tourmyindia.com/socialimg/st-georges-cathedral-agra.jpg'},
      },
      {
        name: 'Agra Fort',
        place: 'Agra, Uttar Pradesh',
        img: {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRBmd06l_DwJ1WNJSK3a5_juiZM3zOaYJaA&usqp=CAU'},
      },
      {
        name: 'Taj Hotel',
        place: 'Agra, Uttar Pradesh',
        img: {uri: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/a5/d8/c1/exterior.jpg'},
      },
      {
        name: 'Red Fort',
        place: 'Delhi',
        img: {uri: 'https://www.goworldtravelguide.com/wp-content/uploads/2013/08/Red-Fort.jpg'},
      },
      
    ];

    this.setState({
      listOriginal: Data,
      listSearched: Data,
    });
  }

  searchImages = event => {
    var query = event.nativeEvent.text;
    this.setState({
      query: query,
    });
    if (query == '') {
      this.setState({
        listSearched: this.state.listOriginal,
      });
    } 
    else {
      var Data = this.state.listOriginal;
      query = query.toLowerCase();
      Data = Data.filter(l => (l.name.toLowerCase().match(query))||(l.place.toLowerCase().match(query))
        );

      this.setState({
        listSearched: Data,
      });
    }

  };
  
  

  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        
        <StatusBar barStyle="light-content" backgroundColor="#2e9ff0" />
        
            <View style={styles.header}>
            <TextInput
                placeholder="Search..."
                placeholderTextColor="gray"
                value={this.state.query}
                onChange={this.searchImages.bind(this)}
                style={styles.input}
            />
            </View>
            
        
        <FlatList
          data={this.state.listSearched}
          renderItem={({item, index}) => {
            return (
                
              <View style={styles.oneImageComponent}>
                  <Image style={styles.image} source={item.img} />
                  
                  <Text style={styles.nameOfImage}>
                   {item.name}
                  </Text>
                  <Text style={styles.placeOfImage}>
                    Location: {item.place}
                  </Text>
                  <View style={{height: .5, width: '100%', backgroundColor:'white'}} />
              </View>
              
            );
          }}

        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    
    height: 50,
    width: '100%',
    backgroundColor: '#2e9ff0',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  input: {
    height: 40,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  oneImageComponent: {
    
    top:0,
    left:0,

  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: .85,
    
  },
  nameOfImage: {
    fontSize: 15,
    paddingLeft:5,
    backgroundColor: '#f2f8fa',
    color:'#495358',
  },
  placeOfImage: {
    fontSize: 16,
    paddingLeft:5,
    backgroundColor: '#f2f8fa',
    color:'#495358',

  },
});