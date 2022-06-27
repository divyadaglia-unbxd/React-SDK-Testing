import React from 'react';
import SelectedFacets  from '../@unbxd-ui/react-search-sdk/src/modules/selectedFacets';

const FacetItemComponent = ({ itemData, onClick, priceUnit }) => {
  const { name, type, dataId } = itemData;
  const handleClick = () => {
    onClick(itemData);
  };

  let selectedFacetMarkup = null;
  if (type === 'TEXT_FACET') {
    selectedFacetMarkup = <span>{name}</span>;
  }
  if (type === 'RANGE_FACET') {
    const [valMin, valMax] = dataId.split(' TO ');
    selectedFacetMarkup = (
      <span>
        {priceUnit} {valMin} - {priceUnit} {valMax}
      </span>
    );
  }

  return (
    <div className="UNX-selectedFacets__item" onClick={handleClick}>
      {selectedFacetMarkup} <span className="-cross"></span>
    </div>
  );
};

const label = <div className="-label">Selected Filters</div>;

const ActiveFilters = () => {
  return (
    <SelectedFacets facetItemComponent={<FacetItemComponent />} label={label} />
  );
};

export default ActiveFilters;
