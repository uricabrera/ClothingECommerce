import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector} from "reselect";

import "./collections-overview.styles.scss";
import CollectionPreview from "../preview-collection/collection-preview.component";
import {selectCollections} from "../../redux/shop/shop.selectors";


const CollectionsOverview = ({collections}) => {
    return(
        <div className="collections-overview">
            {
                collections.map(({id,...otherCollectionProps}) => {
                    return(
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview);