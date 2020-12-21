import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {Container, AddButton} from './styles';
import Post from '../../components/Post';
import NewPostModal from '~/components/NewPostModal';
import Icon from 'react-native-vector-icons/FontAwesome';
import getRealm from '~/services/realm';
import api from '~/services/api';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '~/store/actions/posts';

const Feed = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    async function loadPosts() {
      const realm = await getRealm();
      const data = realm.objects('Post').sorted('id', true);
      //setPosts(data);
    }
    loadPosts();
    dispatch(fetchPosts());
  }, []);

  async function savePost(post) {
    const data = {
      id: post.id,
      title: post.title,
      body: post.body,
      liked: post.liked ? post.liked : '',
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Post', data, 'modified');
    });

    return data;
  }

  async function handleGetPosts() {
    try {
      const response = await api.get('/posts');
      const data = await response.data.slice(0, 10);

      //setPosts(data);
      console.log('call');
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRefreshPost(newPosts) {
    const response = await api.get('/posts');

    const data = await savePost(response.data);

    //setPosts(newPosts.map((post) => (post.id === data.id ? data : post)));
  }

  return (
    <>
      <Container>
        <AddButton activeOpacity={0.7} onPress={() => setOpenModal(!openModal)}>
          <Icon name="plus" size={28} color="#FFF" />
        </AddButton>
        <FlatList
          data={posts.posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Post title={item.title} body={item.body} />}
          refreshing={loading}
        />
      </Container>

      <NewPostModal
        openModal={openModal}
        hideModal={() => setOpenModal(false)}
      />
    </>
  );
};

export default Feed;
