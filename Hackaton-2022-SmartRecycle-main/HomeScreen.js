import React from "react";
import { Component } from "react";
import { View ,Text,Dimensions,FlatList,TouchableOpacity,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Circle } from "react-native-svg";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data=[
    {
    key:1,
    activity:"Bisiklet",
    url:"https://www.cyclistmag.com.tr/wp-content/uploads/2019/11/IMG_9365.jpg",
    sponsor:"İBB",
    numberOfStar:70
    },

    {
    key:2,
    activity:"Otopark",
    url:"http://ispark.istanbul/wp-content/uploads/2015/03/ispark-logo-square.png",
    sponsor:"İBB",
    numberOfStar:20,
    },

    {
    key:3,
    activity:"Metro",
    url:"https://data.ibb.gov.tr/uploads/group/2020-01-10-073313.778837logo-metro-istanbul.png",
    sponsor:"İBB",
    numberOfStar:40,
    }
]

export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            progress:data[0].numberOfStar,
            activity:data[0].activity,
        }
    }

    renderItem= () => {
        <View>
            <Text>
                {item.key}
            </Text>
        </View>
    }

    render(){

        return(

            <View  style={{flex:1, backgroundColor:"#f9d549"}}>
                {/* Yıldızlarım */}
                <Text style={{
                    flex:0.1, 
                    textAlign:"center",
                    textAlignVertical:"center",
                    fontSize:windowHeight/20,
                    margin:windowWidth/30,
                    fontFamily:"Helvetica Neue",
                    color:"#000",
                    }}>
                    Yıldızlarım
                </Text>
                {/* Yıldızlarım animasyon or logo */}
                <View  style={{flex:0.5,backgroundColor:"#f9d549",justifyContent:"flex-start",alignItems:"center"}}>
                    <AnimatedCircularProgress
                    size={windowHeight/2.5}
                    width={windowWidth/12}
                    fill={this.state.progress}
                    tintColor="#000"
                    backgroundColor="rgba(133, 130, 138, 0.5)"
                    
                    padding={10}
                    renderCap={({ center }) => <Circle cx={center.x} cy={center.y} r={windowWidth/20} fill="rgba(133, 130, 138, 1)" />}
                    >
                    {
                    (fill) => (
                    <Text style={{fontSize:windowHeight/18,color:"black",textAlign:"center",fontFamily:"Helvetica Neue"}}>
                        {this.state.activity}
                        {"\n"}
                        %{this.state.progress}
                    </Text>
                    )
                    }
                    </AnimatedCircularProgress>
                </View>

                <View style={{flex:0.4, backgroundColor:"#f9d549",marginTop:windowHeight/8}}>                  
                    <Text style={{color:"black",marginStart:windowWidth/30,fontSize:windowHeight/30,fontFamily:"Helvetica Neue"}}>
                        Aktiviteler
                    </Text>
                    <FlatList 
                    directionalLockEnabled={false}
                    horizontal={true}
                    data={data}
                    style={{backgroundColor:"#f9d549"}}
                    renderItem={ ({item})=> 
                        <TouchableOpacity 
                        onPress={() => {this.setState({progress: item.numberOfStar , activity:item.activity}, )}}
                        style={{backgroundColor:"hsla(0,0%,100%,.51)", margin:windowWidth/50,width:windowWidth/2.2,borderRadius:20}}>
                            <Text style={{marginTop:windowHeight/80,marginLeft:windowWidth/20,fontSize:windowHeight/40,color:"black",fontFamily:"Helvetica Neue"}}>
                                {item.activity}
                            </Text>
                            <Text style={{marginTop:windowHeight/400,marginLeft:windowWidth/20,fontSize:windowHeight/40,color:"rgba(0, 0, 0, 0.4)"}}>
                                ({item.sponsor})
                            </Text>

                            <Image source={{uri: item.url }} 
                                style={{ borderWidth:0,borderColor:"black", overflow:"hidden" , resizeMode:"cover", height:windowHeight/9, width:windowWidth/2.2,marginTop:windowHeight/60 ,borderBottomLeftRadius:20,borderBottomRightRadius:20}} /> 
                            
                        </TouchableOpacity>
                     } />

                </View>

            </View>


        )
    }
}