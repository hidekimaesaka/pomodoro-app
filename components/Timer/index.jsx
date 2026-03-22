import { StyleSheet, Text } from "react-native"

export const Timer = ({totalSeconds}) => {
    return (
        <Text style={styles.timer}>
            {new Date(totalSeconds * 1000).toLocaleTimeString('pt-BR', {minute: '2-digit', second: '2-digit'})}
        </Text>
    )
}

const styles = StyleSheet.create({
    timer: {
        fontSize: 54,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
      }
})
