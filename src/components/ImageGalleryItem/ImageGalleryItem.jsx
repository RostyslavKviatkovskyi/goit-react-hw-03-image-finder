import React, { Component } from 'react';
import { Modal } from '../Modal/Modal';
import { Item, ItemImageSmall, ItemImageLarge } from './ImageGalleryItemStyled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <Item className="gallery-item">
        <ItemImageSmall
          src={this.props.image.webformatURL}
          onClick={this.toggleModal}
          alt="image"
        />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <ItemImageLarge src={this.props.image.largeImageURL} alt="image" />
          </Modal>
        )}
      </Item>
    );
  }
}
