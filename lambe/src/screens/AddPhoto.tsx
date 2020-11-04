import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Alert,
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { addPost } from '../store/actions/posts';

const AddPhoto: React.FC = (props: any) => {
  const [image, setImage] = useState<any>(null);
  const [comment, setComment] = useState('');

  const noUser = 'Você precisa estar logado para adicionar imagens';

  const pickImage = () => {
    if (!props.name) {
      Alert.alert('Falha!', noUser);
      return;
    }

    ImagePicker.showImagePicker(
      {
        title: 'Escolha a imagem',
        maxHeight: 600,
        maxWidth: 800,
      },
      (res: any) => {
        if (!res.didCancel) {
          setImage({ uri: res.uri, base64: res.data });
        }
      },
    );
  };

  const save = async () => {
    if (!props.name) {
      Alert.alert('Falha!', noUser);
      return;
    }

    props.onAddPost({
      id: Math.random(),
      nickname: props.name,
      email: props.email,
      image: image,
      comments: [
        {
          nickname: props.name,
          comment: comment,
        },
      ],
    });

    setImage(null);
    setComment('');
    props.navigation.navigate('Feed');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Compartilhe uma imagem</Text>
        <View>
          <Image source={image} style={styles.image} />
        </View>
        <TouchableOpacity onPress={pickImage} style={styles.button}>
          <Text style={styles.buttonText}>Escolha a foto</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Algum comentário para a foto?"
          style={styles.input}
          value={comment}
          editable={props.name != null}
          onChangeText={setComment}
        />
        <TouchableOpacity onPress={save} style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 30 : 10,
    fontWeight: 'bold',
  },

  imageContainer: {
    width: '90%',
    height: Dimensions.get('window').width / 2,
    backgroundColor: '#EEE',
    marginTop: 10,
  },

  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 2,
    resizeMode: 'center',
  },

  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
  },

  buttonText: {
    fontSize: 20,
    color: '#FFF',
  },

  input: {
    marginTop: 20,
    width: '90%',
  },
});

const mapStateToProps = ({ user }) => {
  return {
    email: user.email,
    name: user.name,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddPost: (post: any) => dispatch(addPost(post)),
  };
};

// export default AddPhoto;
export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto);
