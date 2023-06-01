/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Alert, SafeAreaView, StyleSheet, View } from 'react-native';
import { Text, TouchableOpacity, FlatList, Image } from 'react-native';

const data = {
  music: [
    {
      id: 'wake_up_01',
      title: 'Intro - The Way Of Waking Up (feat. Alan Watts)',
      album: 'Wake Up',
      artist: 'The Kyoto Connection',
      genre: 'Electronic',
      source:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/01_-_Intro_-_The_Way_Of_Waking_Up_feat_Alan_Watts.mp3',
      image:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/art.jpg',
      trackNumber: 1,
      totalTrackCount: 13,
      duration: 90,
      site:
        'http://freemusicarchive.org/music/The_Kyoto_Connection/Wake_Up_1957/',
    },
    {
      id: 'wake_up_02',
      title: 'Geisha',
      album: 'Wake Up',
      artist: 'The Kyoto Connection',
      genre: 'Electronic',
      source:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/02_-_Geisha.mp3',
      image:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/art.jpg',
      trackNumber: 2,
      totalTrackCount: 13,
      duration: 267,
      site:
        'http://freemusicarchive.org/music/The_Kyoto_Connection/Wake_Up_1957/',
    },
    {
      id: 'wake_up_03',
      title: 'Voyage I - Waterfall',
      album: 'Wake Up',
      artist: 'The Kyoto Connection',
      genre: 'Electronic',
      source:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/03_-_Voyage_I_-_Waterfall.mp3',
      image:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/art.jpg',
      trackNumber: 3,
      totalTrackCount: 13,
      duration: 264,
      site:
        'http://freemusicarchive.org/music/The_Kyoto_Connection/Wake_Up_1957/',
    },
    {
      id: 'wake_up_04',
      title: 'The Music In You',
      album: 'Wake Up',
      artist: 'The Kyoto Connection',
      genre: 'Electronic',
      source:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/04_-_The_Music_In_You.mp3',
      image:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/art.jpg',
      trackNumber: 4,
      totalTrackCount: 13,
      duration: 223,
      site:
        'http://freemusicarchive.org/music/The_Kyoto_Connection/Wake_Up_1957/',
    },
    {
      id: 'wake_up_05',
      title: 'The Calm Before The Storm',
      album: 'Wake Up',
      artist: 'The Kyoto Connection',
      genre: 'Electronic',
      source:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/05_-_The_Calm_Before_The_Storm.mp3',
      image:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/art.jpg',
      trackNumber: 5,
      totalTrackCount: 13,
      duration: 229,
      site:
        'http://freemusicarchive.org/music/The_Kyoto_Connection/Wake_Up_1957/',
    },
    {
      id: 'wake_up_06',
      title: 'No Pain, No Gain',
      album: 'Wake Up',
      artist: 'The Kyoto Connection',
      genre: 'Electronic',
      source:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/06_-_No_Pain_No_Gain.mp3',
      image:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/art.jpg',
      trackNumber: 6,
      totalTrackCount: 13,
      duration: 304,
      site:
        'http://freemusicarchive.org/music/The_Kyoto_Connection/Wake_Up_1957/',
    },
    {
      id: 'wake_up_07',
      title: 'Voyage II - Satori',
      album: 'Wake Up',
      artist: 'The Kyoto Connection',
      genre: 'Electronic',
      source:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/07_-_Voyage_II_-_Satori.mp3',
      image:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/art.jpg',
      trackNumber: 7,
      totalTrackCount: 13,
      duration: 256,
      site:
        'http://freemusicarchive.org/music/The_Kyoto_Connection/Wake_Up_1957/',
    },
    {
      id: 'wake_up_08',
      title: 'Reveal the Magic',
      album: 'Wake Up',
      artist: 'The Kyoto Connection',
      genre: 'Electronic',
      source:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/08_-_Reveal_the_Magic.mp3',
      image:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/art.jpg',
      trackNumber: 8,
      totalTrackCount: 13,
      duration: 293,
      site:
        'http://freemusicarchive.org/music/The_Kyoto_Connection/Wake_Up_1957/',
    },
    {
      id: 'wake_up_09',
      title: 'Hachiko (The Faithtful Dog)',
      album: 'Wake Up',
      artist: 'The Kyoto Connection',
      genre: 'Electronic',
      source:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/09_-_Hachiko_The_Faithtful_Dog.mp3',
      image:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/art.jpg',
      trackNumber: 9,
      totalTrackCount: 13,
      duration: 185,
      site:
        'http://freemusicarchive.org/music/The_Kyoto_Connection/Wake_Up_1957/',
    },
    {
      id: 'wake_up_10',
      title: 'Wake Up',
      album: 'Wake Up',
      artist: 'The Kyoto Connection',
      genre: 'Electronic',
      source:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/10_-_Wake_Up.mp3',
      image:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/art.jpg',
      trackNumber: 10,
      totalTrackCount: 13,
      duration: 251,
      site:
        'http://freemusicarchive.org/music/The_Kyoto_Connection/Wake_Up_1957/',
    },
    {
      id: 'wake_up_11',
      title: 'Voyage III - The Space Between Us',
      album: 'Wake Up',
      artist: 'The Kyoto Connection',
      genre: 'Electronic',
      source:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/11_-_Voyage_III_-_The_Space_Between_Us.mp3',
      image:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/art.jpg',
      trackNumber: 11,
      totalTrackCount: 13,
      duration: 290,
      site:
        'http://freemusicarchive.org/music/The_Kyoto_Connection/Wake_Up_1957/',
    },
    {
      id: 'wake_up_12',
      title: 'Ume No Kaori (feat. Sunawai)',
      album: 'Wake Up',
      artist: 'The Kyoto Connection',
      genre: 'Electronic',
      source:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/12_-_Ume_No_Kaori_feat_Sunawai.mp3',
      image:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/art.jpg',
      trackNumber: 12,
      totalTrackCount: 13,
      duration: 334,
      site:
        'http://freemusicarchive.org/music/The_Kyoto_Connection/Wake_Up_1957/',
    },
    {
      id: 'wake_up_13',
      title: 'Outro - Totally Here and Now (feat. Alan Watts)',
      album: 'Wake Up',
      artist: 'The Kyoto Connection',
      genre: 'Electronic',
      source:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/13_-_Outro_-_Totally_Here_and_Now_feat_Alan_Watts.mp3',
      image:
        'https://storage.googleapis.com/uamp/The_Kyoto_Connection_-_Wake_Up/art.jpg',
      trackNumber: 13,
      totalTrackCount: 13,
      duration: 242,
      site:
        'http://freemusicarchive.org/music/The_Kyoto_Connection/Wake_Up_1957/',
    },
    {
      id: 'jazz_in_paris',
      title: 'Jazz in Paris',
      album: 'Jazz & Blues',
      artist: 'Media Right Productions',
      genre: 'Jazz & Blues',
      source:
        'https://storage.googleapis.com/automotive-media/Jazz_In_Paris.mp3',
      image: 'https://storage.googleapis.com/automotive-media/album_art.jpg',
      trackNumber: 1,
      totalTrackCount: 6,
      duration: 103,
      site: 'https://www.youtube.com/audiolibrary/music',
    },
    {
      id: 'the_messenger',
      title: 'The Messenger',
      album: 'Jazz & Blues',
      artist: 'Silent Partner',
      genre: 'Jazz & Blues',
      source:
        'https://storage.googleapis.com/automotive-media/The_Messenger.mp3',
      image: 'https://storage.googleapis.com/automotive-media/album_art.jpg',
      trackNumber: 2,
      totalTrackCount: 6,
      duration: 132,
      site: 'https://www.youtube.com/audiolibrary/music',
    },
    {
      id: 'talkies',
      title: 'Talkies',
      album: 'Jazz & Blues',
      artist: 'Huma-Huma',
      genre: 'Jazz & Blues',
      source: 'https://storage.googleapis.com/automotive-media/Talkies.mp3',
      image: 'https://storage.googleapis.com/automotive-media/album_art.jpg',
      trackNumber: 3,
      totalTrackCount: 6,
      duration: 162,
      site: 'https://www.youtube.com/audiolibrary/music',
    },
    {
      id: 'on_the_bach',
      title: 'On the Bach',
      album: 'Cinematic',
      artist: 'Jingle Punks',
      genre: 'Cinematic',
      source: 'https://storage.googleapis.com/automotive-media/On_the_Bach.mp3',
      image: 'https://storage.googleapis.com/automotive-media/album_art.jpg',
      trackNumber: 4,
      totalTrackCount: 6,
      duration: 66,
      site: 'https://www.youtube.com/audiolibrary/music',
    },
    {
      id: 'the_story_unfolds',
      title: 'The Story Unfolds',
      album: 'Cinematic',
      artist: 'Jingle Punks',
      genre: 'Cinematic',
      source:
        'https://storage.googleapis.com/automotive-media/The_Story_Unfolds.mp3',
      image: 'https://storage.googleapis.com/automotive-media/album_art.jpg',
      trackNumber: 5,
      totalTrackCount: 6,
      duration: 91,
      site: 'https://www.youtube.com/audiolibrary/music',
    },
    {
      id: 'drop_and_roll',
      title: 'Drop and Roll',
      album: 'Youtube Audio Library Rock',
      artist: 'Silent Partner',
      genre: 'Rock',
      source:
        'https://storage.googleapis.com/automotive-media/Drop_and_Roll.mp3',
      image: 'https://storage.googleapis.com/automotive-media/album_art_2.jpg',
      trackNumber: 1,
      totalTrackCount: 7,
      duration: 121,
      site: 'https://www.youtube.com/audiolibrary/music',
    },
    {
      id: 'motocross',
      title: 'Motocross',
      album: 'Youtube Audio Library Rock',
      artist: 'Topher Mohr and Alex Elena',
      genre: 'Rock',
      source: 'https://storage.googleapis.com/automotive-media/Motocross.mp3',
      image: 'https://storage.googleapis.com/automotive-media/album_art_2.jpg',
      trackNumber: 2,
      totalTrackCount: 7,
      duration: 182,
      site: 'https://www.youtube.com/audiolibrary/music',
    },
    {
      id: 'wish_youd_come_true',
      title: "Wish You'd Come True",
      album: 'Youtube Audio Library Rock',
      artist: 'The 126ers',
      genre: 'Rock',
      source:
        'https://storage.googleapis.com/automotive-media/Wish_You_d_Come_True.mp3',
      image: 'https://storage.googleapis.com/automotive-media/album_art_2.jpg',
      trackNumber: 3,
      totalTrackCount: 7,
      duration: 169,
      site: 'https://www.youtube.com/audiolibrary/music',
    },
    {
      id: 'awakening',
      title: 'Awakening',
      album: 'Youtube Audio Library Rock',
      artist: 'Silent Partner',
      genre: 'Rock',
      source: 'https://storage.googleapis.com/automotive-media/Awakening.mp3',
      image: 'https://storage.googleapis.com/automotive-media/album_art_2.jpg',
      trackNumber: 4,
      totalTrackCount: 7,
      duration: 220,
      site: 'https://www.youtube.com/audiolibrary/music',
    },
    {
      id: 'home',
      title: 'Home',
      album: 'Youtube Audio Library Rock',
      artist: 'Letter Box',
      genre: 'Rock',
      source: 'https://storage.googleapis.com/automotive-media/Home.mp3',
      image: 'https://storage.googleapis.com/automotive-media/album_art_2.jpg',
      trackNumber: 5,
      totalTrackCount: 7,
      duration: 213,
      site: 'https://www.youtube.com/audiolibrary/music',
    },
    {
      id: 'tell_the_angels',
      title: 'Tell The Angels',
      album: 'Youtube Audio Library Rock',
      artist: 'Letter Box',
      genre: 'Rock',
      source:
        'https://storage.googleapis.com/automotive-media/Tell_The_Angels.mp3',
      image: 'https://storage.googleapis.com/automotive-media/album_art_2.jpg',
      trackNumber: 6,
      totalTrackCount: 7,
      duration: 208,
      site: 'https://www.youtube.com/audiolibrary/music',
    },
    {
      id: 'hey_sailor',
      title: 'Hey Sailor',
      album: 'Youtube Audio Library Rock',
      artist: 'Letter Box',
      genre: 'Rock',
      source: 'https://storage.googleapis.com/automotive-media/Hey_Sailor.mp3',
      image: 'https://storage.googleapis.com/automotive-media/album_art_2.jpg',
      trackNumber: 7,
      totalTrackCount: 7,
      duration: 193,
      site: 'https://www.youtube.com/audiolibrary/music',
    },
    {
      id: 'keys_to_the_kingdom',
      title: 'Keys To The Kingdom',
      album: 'Youtube Audio Library Rock 2',
      artist: 'The 126ers',
      genre: 'Rock',
      source:
        'https://storage.googleapis.com/automotive-media/Keys_To_The_Kingdom.mp3',
      image: 'https://storage.googleapis.com/automotive-media/album_art_3.jpg',
      trackNumber: 1,
      totalTrackCount: 2,
      duration: 221,
      site: 'https://www.youtube.com/audiolibrary/music',
    },
    {
      id: 'the_coldest_shoulder',
      title: 'The Coldest Shoulder',
      album: 'Youtube Audio Library Rock 2',
      artist: 'The 126ers',
      genre: 'Rock',
      source:
        'https://storage.googleapis.com/automotive-media/The_Coldest_Shoulder.mp3',
      image: 'https://storage.googleapis.com/automotive-media/album_art_3.jpg',
      trackNumber: 2,
      totalTrackCount: 2,
      duration: 160,
      site: 'https://www.youtube.com/audiolibrary/music',
    },
    {
      id: 'spatial_01',
      title: 'Pre-game marching band',
      album: 'Spatial Audio',
      artist: 'Watson Wu',
      genre: 'People',
      source:
        'https://storage.googleapis.com/uamp/Spatial Audio/Marching band.wav',
      image:
        'https://storage.googleapis.com/uamp/Spatial Audio/Marching band.jpg',
      trackNumber: 1,
      totalTrackCount: 6,
      duration: 56,
      site: 'https://library.soundfield.com/track/163',
    },
    {
      id: 'spatial_02',
      title: 'Chickens on a farm',
      album: 'Spatial Audio',
      artist: 'Watson Wu',
      genre: 'Animals',
      source: 'https://storage.googleapis.com/uamp/Spatial Audio/Chickens.wav',
      image: 'https://storage.googleapis.com/uamp/Spatial Audio/Chickens.jpg',
      trackNumber: 2,
      totalTrackCount: 6,
      duration: 180,
      site: 'https://library.soundfield.com/track/129',
    },
    {
      id: 'spatial_03',
      title: 'Rural market busker',
      album: 'Spatial Audio',
      artist: 'Stephan Schutze',
      genre: 'Ambience',
      source:
        'https://storage.googleapis.com/uamp/Spatial Audio/Rural market.wav',
      image:
        'https://storage.googleapis.com/uamp/Spatial Audio/Rural market.jpg',
      trackNumber: 3,
      totalTrackCount: 6,
      duration: 299,
      site: 'https://library.soundfield.com/track/55',
    },
    {
      id: 'spatial_04',
      title: 'Steamtrain interior',
      album: 'Spatial Audio',
      artist: 'Stephan Schutze',
      genre: 'Ambience',
      source:
        'https://storage.googleapis.com/uamp/Spatial Audio/Steamtrain.wav',
      image: 'https://storage.googleapis.com/uamp/Spatial Audio/Steamtrain.jpg',
      trackNumber: 4,
      totalTrackCount: 6,
      duration: 296,
      site: 'https://library.soundfield.com/track/65',
    },
    {
      id: 'spatial_05',
      title: 'Rural road car pass',
      album: 'Spatial Audio',
      artist: 'Stephan Schutze',
      genre: 'Ambience',
      source: 'https://storage.googleapis.com/uamp/Spatial Audio/Car pass.wav',
      image: 'https://storage.googleapis.com/uamp/Spatial Audio/Car pass.jpg',
      trackNumber: 5,
      totalTrackCount: 6,
      duration: 302,
      site: 'https://library.soundfield.com/track/57',
    },
    {
      id: 'spatial_06',
      title: '10 feet from shore',
      album: 'Spatial Audio',
      artist: 'Watson Wu',
      genre: 'Ambience',
      source: 'https://storage.googleapis.com/uamp/Spatial Audio/Shore.wav',
      image: 'https://storage.googleapis.com/uamp/Spatial Audio/Shore.jpg',
      trackNumber: 6,
      totalTrackCount: 6,
      duration: 180,
      site: 'https://library.soundfield.com/track/114',
    },
  ],
};

const App = () => {
  const onPressItem = React.useCallback(
    item =>
      Alert.alert('Auto', `play ${item.title}`, [
        {
          onPress: () => console.log('play'),
          text: 'play',
          style: 'default',
        },
        {
          onPress: () => console.log('cancel'),
          text: 'cancel',
          style: 'destructive',
        },
      ]),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.music}
        ItemSeparatorComponent={() => <View style={{ marginBottom: 16 }} />}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => onPressItem(item)}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>

            <Text>{item.artist}</Text>
            <Text>{item.album}</Text>
            <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: 'gray',
  },
  info: {
    justifyContent: 'center',
  }
});

export default App;
