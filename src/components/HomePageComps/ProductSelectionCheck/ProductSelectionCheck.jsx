'use client'

import React, { useState } from 'react';
import './ProductSelectionCheck.css';

import {
  COLOR_VARIANTS_PRODUCT_SELECTION_CHECK,
  SIZES_PRODUCT_SELECTION_CHECK,
  CHANNELS_PRODUCT_SELECTION_CHECK,
  CHANNEL_ICONS_PRODUCT_SELECTION_CHECK,
} from './ProductSelectionCheckdata.js';

function ProductSelectionCheck() {
  const [activeColorId, setActiveColorId] = useState(
    COLOR_VARIANTS_PRODUCT_SELECTION_CHECK[0].id
  );
  const [activeSize, setActiveSize] = useState(9);
  const [imageKey, setImageKey] = useState(0);

  const activeVariant =
    COLOR_VARIANTS_PRODUCT_SELECTION_CHECK.find((v) => v.id === activeColorId) ||
    COLOR_VARIANTS_PRODUCT_SELECTION_CHECK[0];

  const handleColorChange = (id) => {
    if (id === activeColorId) return;
    setActiveColorId(id);
    setImageKey((k) => k + 1);
  };

const glassStyle = {
    WebkitBackdropFilter: 'blur(0px) ',
    backdropFilter: 'blur(0px) ',
    WebkitBackgroundClip: 'padding-box', // Yeh blur ko border ke bahar nikalne se rokega
    backgroundClip: 'padding-box'
  };
  return (
    <div className="rootProductSelectionCheck">
      <div className="stageProductSelectionCheck">
        {/* Inventory card */}
        <div 
          className="cardProductSelectionCheck inventoryCardProductSelectionCheck"
          style={glassStyle}
        >
          <p className="cardTitleProductSelectionCheck">Inventory</p>
          <p className="inventoryNumberProductSelectionCheck">1,428</p>
          <span className="inventoryLabelProductSelectionCheck">Products</span>
          <div className="barsRowProductSelectionCheck">
            {activeVariant.chart.map((h, i) => (
              <div
                key={i}
                className="barProductSelectionCheck"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Product Details card */}
        <div 
          className="cardProductSelectionCheck detailsCardProductSelectionCheck"
          style={glassStyle}
        >
          <p className="cardTitleProductSelectionCheck">Product Details</p>
          <div className="imageStageProductSelectionCheck" key={imageKey}>
            <div className="shoeImgWrapProductSelectionCheck">
              {activeVariant.shoeImage ? (
                <img
                  src={activeVariant.shoeImage}
                  alt={`${activeVariant.label} sneaker`}
                />
              ) : (
                <div className="placeholderImgProductSelectionCheck">
                  Add {activeVariant.label} shoe image
                </div>
              )}
            </div>
            <div className="budsImgWrapProductSelectionCheck">
              {activeVariant.budsImage ? (
                <img
                  src={activeVariant.budsImage}
                  alt={`${activeVariant.label} earbuds`}
                />
              ) : (
                <div className="placeholderImgProductSelectionCheck placeholderBudsProductSelectionCheck">
                  Add {activeVariant.label} buds image
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product ID card */}
        <div 
          className="cardProductSelectionCheck productIdCardProductSelectionCheck"
          style={glassStyle}
        >
          <p className="cardTitleProductSelectionCheck">Product ID:</p>

          <div className="fieldProductSelectionCheck">
            <span className="fieldLabelProductSelectionCheck">Title</span>
            <div className="fieldBoxProductSelectionCheck">Classic Runner Sneakers</div>
          </div>

          <div className="fieldProductSelectionCheck">
            <span className="fieldLabelProductSelectionCheck">Price</span>
            <div className="fieldBoxProductSelectionCheck">$89.00</div>
          </div>

          <div className="fieldProductSelectionCheck stockRowProductSelectionCheck">
            <div style={{width:'100%'}}>

            <span className="fieldLabelProductSelectionCheck">Stock</span>
            <div className="stockBoxProductSelectionCheck">
              <span className="stockLabelSubProductSelectionCheck">Green</span>
            </div>
            
                
              {/* <span className="fieldLabelProductSelectionCheck">Stock</span> */}
            </div>
            <div className="stockPillProductSelectionCheck">
              <span className="stockValueProductSelectionCheck">{activeVariant.stock}</span>
              <span className="checkDotProductSelectionCheck">✓</span>
            </div>
          </div>

          <div className="fieldProductSelectionCheck">
            <span className="fieldLabelProductSelectionCheck">Variants</span>
            <div className="variantsRowProductSelectionCheck">
              {COLOR_VARIANTS_PRODUCT_SELECTION_CHECK.map((variant) => (
                <button
                  key={variant.id}
                  type="button"
                  aria-label={variant.label}
                  onClick={() => handleColorChange(variant.id)}
                  className={
                    'swatchProductSelectionCheck' +
                    (variant.id === activeColorId
                      ? ' swatchActiveProductSelectionCheck'
                      : '')
                  }
                  style={{ background: variant.swatch }}
                />
              ))}
            </div>
          </div>

          <div className="fieldProductSelectionCheck">
            <span className="fieldLabelProductSelectionCheck">Size</span>
            <div className="sizesRowProductSelectionCheck">
              {SIZES_PRODUCT_SELECTION_CHECK.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setActiveSize(size)}
                  className={
                    'sizeBtnProductSelectionCheck' +
                    (size === activeSize ? ' sizeBtnActiveProductSelectionCheck' : '')
                  }
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button type="button" className="addBtnProductSelectionCheck">
            <img src="./cartsvghomebussinesstarter.svg" alt="" /> Add Product
          </button>
        </div>

        {/* Sync Across All Channels card */}
        <div 
          className="cardProductSelectionCheck syncCardProductSelectionCheck"
          style={glassStyle}
        >
          <p className="cardTitleProductSelectionCheck">
            Sync Across
            <br />
            All Channels
          </p>
          <div className="syncChartRowProductSelectionCheck">
            {activeVariant.syncChart.map((h, i) => (
              <div
                key={i}
                className="syncBarProductSelectionCheck"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="channelsRowProductSelectionCheck">
            {CHANNELS_PRODUCT_SELECTION_CHECK.map((c) => {
              const Icon = CHANNEL_ICONS_PRODUCT_SELECTION_CHECK[c.id];
              return (
                <div key={c.id} className="channelIconProductSelectionCheck" title={c.label}>
                  {Icon && <Icon size={18} />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSelectionCheck;