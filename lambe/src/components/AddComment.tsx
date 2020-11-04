import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { addComment } from '../store/actions/posts';

interface AddCommentProps {
  postId: number;
  name?: string;
  onAddComment?: any;
}

const AddComment: React.FC<AddCommentProps> = ({ postId, name, onAddComment }) => {
  const [comment, setComment] = useState('');
  const [editMode, setEditMode] = useState(false);
  let commentArea = null;

  const handleAddComment = () => {
    onAddComment({
      postId: postId,
      comment: { nickname: name, comment: comment },
    });

    setComment('');
    setEditMode(false);
  };

  if (editMode) {
    commentArea = (
      <View style={styles.container}>
        <TextInput
          placeholder="Pode comentar..."
          style={styles.input}
          autoFocus
          value={comment}
          onChangeText={setComment}
          onSubmitEditing={handleAddComment}
        />
        <TouchableWithoutFeedback onPress={() => setEditMode(false)}>
          <FontAwesome name="times" size={15} color="#555" />
        </TouchableWithoutFeedback>
      </View>
    );
  } else {
    commentArea = (
      <TouchableWithoutFeedback onPress={() => setEditMode(true)}>
        <View style={styles.container}>
          <FontAwesome name="comment-o" size={15} color="#555" />
          <Text style={styles.caption}>Adicione um comentário...</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return <View style={{ flex: 1 }}>{commentArea}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },

  caption: {
    marginLeft: 10,
    fontSize: 12,
    color: '#CCC',
  },

  input: {
    width: '90%',
  },
});

const mapStateToProps = ({ user }) => {
  return {
    name: user.name,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddComment: (comment: any) => dispatch(addComment(comment)),
  };
};

// export default AddComment;
export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
