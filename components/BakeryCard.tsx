import { View, Text, StyleSheet} from "react-native";

interface Props {
    name: string;
}

const BakeryCard: React.FC<Props> = ({name}) => {
    return (
        <View>
            <Text>Bakery</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
    }
  });

export default BakeryCard;