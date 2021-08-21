import * as React from "react";
import { View } from "react-native";

import Carousel from "react-native-snap-carousel";

export default class CustomCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: this.props.items,
    };
  }

  render() {
    return (
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Carousel
          layout={"default"}
          ref={(ref) => (this.carousel = ref)}
          data={this.state.carouselItems}
          sliderWidth={this.props.width}
          itemWidth={this.props.width}
          renderItem={this.props.renderItem}
          onSnapToItem={(index) => this.setState({ activeIndex: index })}
        />
      </View>
    );
  }
}
