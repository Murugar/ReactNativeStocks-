import React from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    backgroundColor: 'blue',
  },
  titleText: {
    fontSize: 14,
    color: 'yellow',
    textAlign: 'left',
    fontWeight: 'bold'
  },
  timeText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'left',
    fontWeight: 'bold'
  },
});

export default class NewsCell extends React.Component {
  render() {
    return (
      <TouchableHighlight
        onPress={() => Linking.openURL(
          this.props.news.link
        ).catch(err => console.error('An error occurred', err))}
        underlayColor="#202020"
      >
        <View style={styles.container}>
          <Text style={styles.titleText}>
            {this.props.news.title}
          </Text>
          <Text style={styles.timeText}>
            {`${moment(new Date(this.props.news.pubDate)).format('D/M/YYYY')} at ${moment(new Date(this.props.news.pubDate)).format('LT')}`}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

NewsCell.propTypes = {
  news: React.PropTypes.shape({
    title: React.PropTypes.string,
    link: React.PropTypes.string,
    pubDate: React.PropTypes.string,
  }),
};

NewsCell.defaultProps = {
  news: {},
};
