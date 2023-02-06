import { View, Text, StyleSheet} from "react-native";

const BakeriesScreen = () => {
    return (
        <View>
            <Text>Bakeries Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    content: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 150,
      
    }
  });

export default BakeriesScreen;