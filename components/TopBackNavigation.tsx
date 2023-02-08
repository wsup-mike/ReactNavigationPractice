import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View} from 'react-native';
import { TouchableHighlight} from 'react-native-gesture-handler';
import BackIcon from '../icons/BackIcon';


const TopBackNavigation = () => {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableHighlight>
                <BackIcon color='#3333' size={20} />
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },

    backButton: {
        borderRadius: 8,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TopBackNavigation;