import React from 'react'

import Button from 'elements/Button'

export default function Categories({data}) {
    return data.map((category, index1) => {
        return(
            <section className="container" key={`category-${index1}`}>
                <h4 className="h3 font-weight-medium">
                    {category.name}
                </h4>
                <div className="container-grid">
                    {category.items.length === 0 ?(
                        <div className="row">
                            <div className="col-auto align-items-center">
                                There is no property at this category
                            </div>
                        </div>
                    ) : (
                    category.items.map((item, index2) =>{
                      return(
                        <div className="item column-3 row-1" key={`category-${index1}-item-${index2}`}>
                            <div className="card">
                                {item.isPopular && (
                                    <div className="tag">
                                        Popular{" "}
                                        <span className="font-weight-light">Choice</span>
                                    </div>
                                )}
                                <figure className="img-wrapper" style={{height: 180}}>
                                    <img src={item.imageUrl} alt={item.name} className="img-cover" />
                                </figure>
                                <div className="meta-wrapper">
                                    <Button type="link" href={`/propeties/${item._id}`} className="stretched-link d-block text-gray-800">
                                        <h5 className="h4">
                                            {item.name}
                                        </h5>
                                    </Button>
                                    <span className="text-gray-500">
                                        {item.city}, {item.country}
                                    </span>
                                </div>
                            </div>
                        </div>)
                    })       
                        ) 
                    }
                </div>
            </section>
        );

    });
}

