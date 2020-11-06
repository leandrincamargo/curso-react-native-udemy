import React from 'react';
import { connect } from 'react-redux';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

import AddComment from './AddComment';
import Author from './Author';
import Comments from './Comments';

interface PostProps {
  id: number;
  name?: string;
  email: string;
  nickname: string;
  image: any;
  comments: any[];
}

const Post: React.FC<PostProps> = ({ id, name, email, nickname, image, comments }) => {
  const addComent = name ? <AddComment postId={id} /> : null;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Author email={email} nickname={nickname} />
      <Comments comments={comments} />
      {addComent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 3) / 4,
    resizeMode: 'contain',
  },
});

const mapStateToProps = ({ user }) => {
  return {
    name: user.name,
  };
};

// export default Post;
export default connect(mapStateToProps)(Post);
