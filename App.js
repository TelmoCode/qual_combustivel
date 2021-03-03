import React, { cloneElement, Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image

} from 'react-native';

export default class qual_combustivel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      txtResultado: 'Resultado',
      iptGas: '',
      iptAlc: '',
      btnCalcular: 'Calcular'
    }
    this.calcular = this.calcular.bind(this)
  }

  calcular() {

    if (this.state.btnCalcular == 'Calcular') {

      let resultado = this.state.iptAlc / this.state.iptGas

      if (resultado < 0.7) {

        this.setState({ txtResultado: this.txtResultado = 'Escolha Alcool' })

      } else {
        this.setState({ txtResultado: this.txtResultado = 'Escolha gasolina' })
      }

      this.setState({ btnCalcular: "Zerar" })

    } else {
      this.setState({
        iptAlc: this.iptAlc = "",
        iptGas: this.iptGas = "",
        btnCalcular: this.btnCalcular = 'Calcular',
        txtResultado: this.txtResultado = "Resultado"
      })


    }



  }

  render() {
    return (
      <View style={styles.conteiner}>

        <Text style={styles.titulo}>Qual Combustivel</Text>

        <Image
          style={styles.logo}
          source={require('./assets/img/gas.png')}
        />


        <Text style={styles.txtGas}>Gasolina(R$)</Text>
        <TextInput
          style={styles.input}
          value={this.state.iptGas}
          onChangeText={(gas) => { this.setState({ iptGas: gas }) }}
          underlineColorAndroid="transparent"
          keyboardType='numeric'
        />

        <Text style={styles.txtGas}>Alcool(R$)</Text>
        <TextInput
          style={styles.input}
          value={this.state.iptAlc}
          onChangeText={(alc) => { this.setState({ iptAlc: alc }) }}
          underlineColorAndroid="transparent"
          keyboardType='numeric'
        />

        <TouchableOpacity
          style={styles.btnArea}
          onPress={this.calcular}
        >

          <Text style={styles.btntext}>{this.state.btnCalcular}</Text>

        </TouchableOpacity>

        <Text style={styles.resultado}>{this.state.txtResultado}</Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#3A7AFF'
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff'

  },
  input: {

    width: 350,
    height: 40,
    fontSize: 20,
    color: '#fff',
    borderColor: '#fff',
    borderWidth: 1.2,
    margin: 20

  },
  btnArea: {

    borderColor: '#fff',
    borderWidth: 1,
    height: 50,
    width: 150,
    borderRadius: 10


  },
  btntext: {

    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#FFF',
    textAlign: 'center',
  },
  txtGas: {
    color: '#Fff',
    fontSize: 25
  },
  resultado: {
    color: '#Fff',
    fontSize: 25,
    marginTop: 50

  },
  logo: {
    width: 150,
    height: 150
  }


})