import React from 'react';

import { connect } from 'react-redux';

// import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

// import './collection-item.styles.scss';
import { ItemContainer, ItemImage, ItemFooter, ItemName, ItemPrice, ItemButton } from './collection-item.styles';


const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <ItemContainer>
            <ItemImage style={{ backgroundImage: `url(${imageUrl})` }} />
            <ItemFooter>
                <ItemName>{name}</ItemName>
                <ItemPrice>{price}</ItemPrice>
            </ItemFooter>
            <ItemButton onClick={() => addItem(item)} inverted>Add To Cart</ItemButton>
        </ItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);